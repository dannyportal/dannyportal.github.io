"use client";

import { useEffect, useRef } from "react";

const grad3 = [
  [1, 1, 0],
  [-1, 1, 0],
  [1, -1, 0],
  [-1, -1, 0],
  [1, 0, 1],
  [-1, 0, 1],
  [1, 0, -1],
  [-1, 0, -1],
  [0, 1, 1],
  [0, -1, 1],
  [0, 1, -1],
  [0, -1, -1],
];

class SimplexNoise {
  constructor(random = Math) {
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i += 1) {
      p[i] = i;
    }
    for (let i = 255; i > 0; i -= 1) {
      const n = Math.floor((i + 1) * random.random());
      const tmp = p[i];
      p[i] = p[n];
      p[n] = tmp;
    }
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    for (let i = 0; i < 512; i += 1) {
      this.perm[i] = p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }
  }

  noise3D(xin, yin, zin) {
    const F3 = 1 / 3;
    const G3 = 1 / 6;
    const s = (xin + yin + zin) * F3;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const k = Math.floor(zin + s);
    const t = (i + j + k) * G3;
    const X0 = i - t;
    const Y0 = j - t;
    const Z0 = k - t;
    const x0 = xin - X0;
    const y0 = yin - Y0;
    const z0 = zin - Z0;

    let i1 = 0;
    let j1 = 0;
    let k1 = 0;
    let i2 = 0;
    let j2 = 0;
    let k2 = 0;

    if (x0 >= y0) {
      if (y0 >= z0) {
        i1 = 1;
        j1 = 0;
        k1 = 0;
        i2 = 1;
        j2 = 1;
        k2 = 0;
      } else if (x0 >= z0) {
        i1 = 1;
        j1 = 0;
        k1 = 0;
        i2 = 1;
        j2 = 0;
        k2 = 1;
      } else {
        i1 = 0;
        j1 = 0;
        k1 = 1;
        i2 = 1;
        j2 = 0;
        k2 = 1;
      }
    } else if (y0 < z0) {
      i1 = 0;
      j1 = 0;
      k1 = 1;
      i2 = 0;
      j2 = 1;
      k2 = 1;
    } else if (x0 < z0) {
      i1 = 0;
      j1 = 1;
      k1 = 0;
      i2 = 0;
      j2 = 1;
      k2 = 1;
    } else {
      i1 = 0;
      j1 = 1;
      k1 = 0;
      i2 = 1;
      j2 = 1;
      k2 = 0;
    }

    const x1 = x0 - i1 + G3;
    const y1 = y0 - j1 + G3;
    const z1 = z0 - k1 + G3;
    const x2 = x0 - i2 + 2 * G3;
    const y2 = y0 - j2 + 2 * G3;
    const z2 = z0 - k2 + 2 * G3;
    const x3 = x0 - 1 + 3 * G3;
    const y3 = y0 - 1 + 3 * G3;
    const z3 = z0 - 1 + 3 * G3;

    const ii = i & 255;
    const jj = j & 255;
    const kk = k & 255;
    const gi0 = this.permMod12[ii + this.perm[jj + this.perm[kk]]];
    const gi1 =
      this.permMod12[ii + i1 + this.perm[jj + j1 + this.perm[kk + k1]]];
    const gi2 =
      this.permMod12[ii + i2 + this.perm[jj + j2 + this.perm[kk + k2]]];
    const gi3 = this.permMod12[ii + 1 + this.perm[jj + 1 + this.perm[kk + 1]]];

    let n0 = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;

    let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
    if (t0 > 0) {
      t0 *= t0;
      n0 = t0 * t0 * (grad3[gi0][0] * x0 + grad3[gi0][1] * y0 + grad3[gi0][2] * z0);
    }

    let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
    if (t1 > 0) {
      t1 *= t1;
      n1 = t1 * t1 * (grad3[gi1][0] * x1 + grad3[gi1][1] * y1 + grad3[gi1][2] * z1);
    }

    let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
    if (t2 > 0) {
      t2 *= t2;
      n2 = t2 * t2 * (grad3[gi2][0] * x2 + grad3[gi2][1] * y2 + grad3[gi2][2] * z2);
    }

    let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
    if (t3 > 0) {
      t3 *= t3;
      n3 = t3 * t3 * (grad3[gi3][0] * x3 + grad3[gi3][1] * y3 + grad3[gi3][2] * z3);
    }

    return 32 * (n0 + n1 + n2 + n3);
  }
}

const TAU = Math.PI * 2;

function map(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function hsl(h, s, l, a = 1) {
  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}

export default function AboutContentWaves() {
  const canvasRef = useRef(null);
  const noiseRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return undefined;
    }

    const noise = new SimplexNoise();
    noiseRef.current = noise;
    let frameId = 0;
    let width = 0;
    let height = 0;
    let widthHalf = 0;
    let heightHalf = 0;

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) {
        return;
      }
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      widthHalf = width * 0.5;
      heightHalf = height * 0.5;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();

    function draw(timeMs) {
      const time = timeMs * 0.00025;
      const xCount = 40;
      const yCount = 60;
      const iXCount = 1 / (xCount - 1);
      const iYCount = 1 / (yCount - 1);
      const timeStep = 0.01;

      const t = time % 1;
      const tSide = Math.floor(time % 2) === 0;
      const hueA = tSide ? 120 : 210;
      const hueB = !tSide ? 120 : 210;
      const grad = ctx.createLinearGradient(-width, 0, width, height);
      grad.addColorStop(map(t, 0, 1, 1 / 3, 0), hsl(hueA, 90, 45));
      grad.addColorStop(map(t, 0, 1, 2 / 3, 1 / 3), hsl(hueB, 90, 45));
      grad.addColorStop(map(t, 0, 1, 1, 2 / 3), hsl(hueA, 90, 45));

      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = map(Math.cos(time), -1, 1, 0.12, 0.28);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1;

      ctx.save();
      ctx.translate(widthHalf, heightHalf + height * 0.32);
      ctx.scale(1.08, 1.08);
      ctx.beginPath();
      let localTime = time;
      for (let j = 0; j < yCount; j += 1) {
        const tj = j * iYCount;
        const c = Math.cos(tj * TAU + time) * 0.1;
        for (let i = 0; i < xCount; i += 1) {
          const tt = i * iXCount;
          const n = noise.noise3D(tt, localTime, c);
          const y = n * heightHalf;
          const x = tt * (width + 20) - widthHalf - 10;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        localTime += timeStep;
      }
      ctx.globalCompositeOperation = "lighter";
      ctx.filter = "blur(10px)";
      ctx.strokeStyle = grad;
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.filter = "none";
      ctx.strokeStyle = hsl(0, 0, 100, 0.7);
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      frameId = window.requestAnimationFrame(draw);
    }

    frameId = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas className="about-waves-canvas" ref={canvasRef} />;
}
