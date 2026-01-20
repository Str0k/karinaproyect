"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
    backgroundImage?: string;
    overlayColor?: string;
    parallaxSpeed?: number;
}

export default function ParallaxSection({
    children,
    className = "",
    backgroundImage,
    overlayColor = "rgba(255, 251, 240, 0.85)",
    parallaxSpeed = 0.5,
}: ParallaxSectionProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [`${-100 * parallaxSpeed}px`, `${100 * parallaxSpeed}px`]
    );

    return (
        <section ref={ref} className={`relative overflow-hidden ${className}`}>
            {backgroundImage && (
                <>
                    {/* Parallax Background */}
                    <motion.div
                        style={{ y }}
                        className="absolute inset-0 -inset-y-20"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
                            style={{ backgroundImage: `url(${backgroundImage})` }}
                        />
                    </motion.div>

                    {/* Overlay */}
                    <div
                        className="absolute inset-0"
                        style={{ backgroundColor: overlayColor }}
                    />
                </>
            )}

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </section>
    );
}
