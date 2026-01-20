"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxWrapperProps {
    children: ReactNode;
    className?: string;
    speed?: number; // -1 to 1, negative = opposite direction
    type?: "y" | "scale" | "opacity" | "rotate";
}

export default function ParallaxWrapper({
    children,
    className = "",
    speed = 0.2,
    type = "y",
}: ParallaxWrapperProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const yRange = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
    const scaleRange = useTransform(scrollYProgress, [0, 0.5, 1], [1 - Math.abs(speed) * 0.1, 1, 1 - Math.abs(speed) * 0.1]);
    const opacityRange = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
    const rotateRange = useTransform(scrollYProgress, [0, 1], [-5 * speed, 5 * speed]);

    const getStyle = () => {
        switch (type) {
            case "y":
                return { y: yRange };
            case "scale":
                return { scale: scaleRange };
            case "opacity":
                return { opacity: opacityRange };
            case "rotate":
                return { rotate: rotateRange };
            default:
                return { y: yRange };
        }
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{
                ...getStyle(),
                willChange: "transform",
            }}
        >
            {children}
        </motion.div>
    );
}
