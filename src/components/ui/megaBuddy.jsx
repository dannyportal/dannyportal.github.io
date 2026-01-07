'use client'
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const MegaBuddy = () => {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        const handleClick = (event) => {
            const link = event.target.closest("a");
            if (!link) return;
            const href = link.getAttribute("href");
            if (!href) return;
            if (href.startsWith("#")) return;
            if (link.target === "_blank") return;
            if (href.startsWith("mailto:") || href.startsWith("tel:")) return;

            const url = new URL(href, window.location.href);
            if (url.origin !== window.location.origin) return;
            if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash) {
                return;
            }

            setIsLoading(true);
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    useEffect(() => {
        if (!isLoading) return;
        const loadingDurationMs = 1200;
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setIsLoading(false);
        }, loadingDurationMs);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [isLoading, pathname]);

    return (
        <div className="mega-buddy" aria-hidden="true">
            <img
                src={isLoading ? "/images/loadingmega.gif" : "/images/idlemega.gif"}
                alt=""
            />
        </div>
    );
};

export default MegaBuddy;
