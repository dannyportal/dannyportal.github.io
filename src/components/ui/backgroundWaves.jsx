"use client";

import { useEffect } from "react";

const baseSettings = {
  amplitudeX: 120,
  amplitudeY: 24,
  lines: 18,
  smoothness: 3,
  offsetX: 12,
  fill: true,
};

const startColor = { h: 120, s: 68, l: 40 };
const endColor = { h: 210, s: 55, l: 16 };

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function hslString(h, s, l) {
  return `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
}

function buildColors(count) {
  const colors = [];
  for (let i = 0; i < count; i += 1) {
    const t = count === 1 ? 0 : i / (count - 1);
    colors.push(
      hslString(
        lerp(startColor.h, endColor.h, t),
        lerp(startColor.s, endColor.s, t),
        lerp(startColor.l, endColor.l, t)
      )
    );
  }
  return colors;
}

class Path {
  constructor(y, fill, offsetX, amplitudeX, amplitudeY, smoothness) {
    this.rootY = y;
    this.fill = fill;
    this.offsetX = offsetX;
    this.amplitudeX = amplitudeX;
    this.amplitudeY = amplitudeY;
    this.smoothness = smoothness;
    this.root = [];
  }

  createRoot(winW, overflow) {
    const root = [];
    let x = -overflow + this.offsetX;
    let y = 0;
    let upSideDown = false;

    root.push({ x, y: this.rootY });

    while (x < winW) {
      upSideDown = !upSideDown;
      const value = upSideDown ? 1 : -1;
      x += this.amplitudeX;
      y = this.amplitudeY * value + this.rootY;
      root.push({ x, y });
    }

    root.push({ x: winW + overflow, y: this.rootY });
    this.root = root;
  }

  createPath(svg, winW, winH, overflow) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", this.fill);
    path.setAttribute("stroke", this.fill);
    svg.appendChild(path);

    let d = `M -${overflow} ${winH + overflow}`;
    d += ` L ${this.root[0].x} ${this.root[0].y}`;

    for (let i = 1; i < this.root.length - 1; i += 1) {
      const prevPoint = this.root[i - 1];
      const actualPoint = this.root[i];
      const diffX = (actualPoint.x - prevPoint.x) / this.smoothness;
      const x1 = prevPoint.x + diffX;
      const x2 = actualPoint.x - diffX;
      const x = actualPoint.x;
      const y1 = prevPoint.y;
      const y2 = actualPoint.y;
      const y = actualPoint.y;
      d += ` C ${x1} ${y1}, ${x2} ${y2}, ${x} ${y}`;
    }

    const reverseRoot = [...this.root].reverse();
    d += ` L ${reverseRoot[0].x} ${reverseRoot[0].y}`;
    d += ` L ${winW + overflow} ${winH + overflow}`;
    d += " Z";

    path.setAttribute("d", d);
  }
}

export default function BackgroundWaves() {
  useEffect(() => {
    const svg = document.getElementById("bg-waves");
    if (!svg) {
      return;
    }

    function init(currentSettings) {
      const winW = window.innerWidth;
      const winH = window.innerHeight;
      const overflow = Math.abs(currentSettings.lines * currentSettings.offsetX);
      const colors = buildColors(currentSettings.lines + 2);

      svg.setAttribute("width", `${winW}`);
      svg.setAttribute("height", `${winH}`);
      svg.setAttribute("viewBox", `0 0 ${winW} ${winH}`);
      svg.setAttribute("preserveAspectRatio", "none");

      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }

      svg.style.backgroundColor = currentSettings.fill ? colors[0] : "#000";

      const paths = [];
      for (let i = 0; i < currentSettings.lines + 1; i += 1) {
        const rootY = Math.floor((winH / currentSettings.lines) * i);
        const path = new Path(
          rootY,
          colors[i + 1],
          currentSettings.offsetX * i,
          currentSettings.amplitudeX,
          currentSettings.amplitudeY,
          currentSettings.smoothness
        );
        path.createRoot(winW, overflow);
        paths.push(path);
      }

      paths.forEach((path) => {
        path.createPath(svg, winW, winH, overflow);
      });
    }

    let frameId = 0;
    let lastRender = 0;

    const handleResize = () => init(baseSettings);

    function animate(time) {
      if (time - lastRender > 80) {
        lastRender = time;
        const t = time * 0.001;
        const currentSettings = {
          ...baseSettings,
          amplitudeY: baseSettings.amplitudeY + Math.sin(t * 0.9) * 12,
          offsetX: baseSettings.offsetX + Math.sin(t * 0.6 + 1.2) * 6,
        };
        init(currentSettings);
      }
      frameId = window.requestAnimationFrame(animate);
    }

    init(baseSettings);
    frameId = window.requestAnimationFrame(animate);
    window.addEventListener("resize", handleResize);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <svg id="bg-waves" className="bg-waves" aria-hidden="true" />;
}
