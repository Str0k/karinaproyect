"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface PremiumImageFrameProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
}

export default function PremiumImageFrame({
    src,
    alt,
    className = "",
    priority = false,
}: PremiumImageFrameProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

    return (
        <motion.div
            ref={ref}
            className={`relative ${className}`}
            style={{ y }}
        >
            {/* Outer Glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#FF6B6B]/30 via-[#FECFEF]/20 to-[#4ECDC4]/30 rounded-[2.5rem] blur-2xl opacity-60" />

            {/* Premium Frame Container */}
            <motion.div
                style={{ scale, rotate }}
                className="relative"
            >
                {/* Gold/Gradient Border Frame */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#FFD700] via-[#FF6B6B] to-[#4ECDC4] rounded-[2rem] opacity-80" />

                {/* Inner White Border */}
                <div className="absolute inset-0 bg-white rounded-[1.8rem] m-1" />

                {/* Shadow Layers */}
                <div className="absolute inset-0 shadow-2xl rounded-[2rem]" />

                {/* Image Container */}
                <div className="relative rounded-[1.5rem] overflow-hidden m-2 shadow-inner">
                    <div className="aspect-[4/3] relative">
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-cover"
                            priority={priority}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* Premium Overlay Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
                    </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-2 left-2 w-8 h-8 border-l-4 border-t-4 border-[#FFD700]/60 rounded-tl-xl" />
                <div className="absolute top-2 right-2 w-8 h-8 border-r-4 border-t-4 border-[#FFD700]/60 rounded-tr-xl" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-l-4 border-b-4 border-[#FFD700]/60 rounded-bl-xl" />
                <div className="absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 border-[#FFD700]/60 rounded-br-xl" />
            </motion.div>
        </motion.div>
    );
}
