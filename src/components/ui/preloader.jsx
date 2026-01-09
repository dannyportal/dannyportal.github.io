'use client'
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Preloader = () => {
    const controls = useAnimation();

    useEffect(() => {
        const gifDurationMs = 1500;
        const animate = async () => {
            await controls.start({
                opacity: 1,
                transition: { duration: 0 },
            });

            await new Promise((resolve) => setTimeout(resolve, gifDurationMs));

            await controls.start({
                opacity: 0,
                transition: { duration: 0.3, ease: "easeInOut" },
            });

            await controls.start({
                zIndex: -1,
                display: "none",
                transition: { duration: 0.1 },
            });
        };

        animate();
    }, [controls]);

    return (
        <motion.div className="preloader" animate={controls}>
            <img
                className="preloader__image"
                src="/images/giphy.gif"
                alt="Loading animation"
            />
        </motion.div>
    );
};

export default Preloader;
