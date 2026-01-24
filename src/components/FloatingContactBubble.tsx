"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";

const PHONE_NUMBER = "9132069322";

export default function FloatingContactBubble() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const bubbleVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 260,
                damping: 20,
            },
        },
        exit: { scale: 0, opacity: 0 },
    };

    const menuVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 25,
            },
        },
        exit: {
            opacity: 0,
            y: 20,
            scale: 0.8,
            transition: { duration: 0.2 },
        },
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={bubbleVariants}
                    className="fixed bottom-6 right-6 z-50"
                >
                    {/* Contact Options Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="absolute bottom-20 right-0 flex flex-col gap-3"
                            >
                                {/* Call Option */}
                                <motion.a
                                    href={`tel:+1${PHONE_NUMBER}`}
                                    whileHover={{ scale: 1.1, x: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-3 bg-white rounded-full shadow-xl pl-4 pr-5 py-3 group"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#F279BC] to-[#D962A3] rounded-full flex items-center justify-center shadow-lg">
                                        <Phone size={22} className="text-white" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-gray-500 font-medium">Call Now</p>
                                        <p className="text-sm font-bold text-[#5C2D42]">
                                            (913) 206-9322
                                        </p>
                                    </div>
                                </motion.a>

                                {/* Text Message Option */}
                                <motion.a
                                    href={`sms:+1${PHONE_NUMBER}`}
                                    whileHover={{ scale: 1.1, x: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-3 bg-white rounded-full shadow-xl pl-4 pr-5 py-3 group"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#F291C7] to-[#F279BC] rounded-full flex items-center justify-center shadow-lg">
                                        <MessageCircle size={22} className="text-white" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-gray-500 font-medium">
                                            Text Message
                                        </p>
                                        <p className="text-sm font-bold text-[#3D1F2E]">
                                            (913) 206-9322
                                        </p>
                                    </div>
                                </motion.a>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Main Bubble Button */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center overflow-hidden"
                        style={{
                            background:
                                "linear-gradient(135deg, #F279BC 0%, #F291C7 50%, #FDF0F6 100%)",
                        }}
                    >
                        {/* Animated Ring */}
                        <motion.div
                            animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute inset-0 rounded-full border-2 border-[#F279BC]"
                        />

                        {/* Second Ring */}
                        <motion.div
                            animate={{
                                scale: [1, 1.6, 1],
                                opacity: [0.3, 0, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                            className="absolute inset-0 rounded-full border-2 border-[#F291C7]"
                        />

                        {/* Icon */}
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isOpen ? (
                                <X size={28} className="text-white" />
                            ) : (
                                <Phone size={28} className="text-white" />
                            )}
                        </motion.div>
                    </motion.button>

                    {/* Tooltip */}
                    {!isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute right-20 top-1/2 -translate-y-1/2 bg-[#5C2D42] text-white text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap shadow-lg"
                        >
                            Contact Us!
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 border-l-8 border-l-[#5C2D42] border-y-4 border-y-transparent" />
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
