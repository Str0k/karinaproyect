"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    distance?: number;
    once?: boolean;
}

export default function ScrollReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.6,
    distance = 60,
    once = true,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once && ref.current) {
                        observer.unobserve(ref.current);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [once]);

    const getTransform = () => {
        if (isVisible) return "translate3d(0, 0, 0)";
        switch (direction) {
            case "up":
                return `translate3d(0, ${distance}px, 0)`;
            case "down":
                return `translate3d(0, -${distance}px, 0)`;
            case "left":
                return `translate3d(${distance}px, 0, 0)`;
            case "right":
                return `translate3d(-${distance}px, 0, 0)`;
            default:
                return "translate3d(0, 0, 0)";
        }
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                transform: getTransform(),
                opacity: isVisible ? 1 : 0,
                transition: `transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s, opacity ${duration}s ease ${delay}s`,
                willChange: "transform, opacity",
            }}
        >
            {children}
        </div>
    );
}
