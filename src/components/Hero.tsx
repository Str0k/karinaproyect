"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    Heart,
    Award,
    Languages,
    Star,
    Calendar,
    ChevronRight,
} from "lucide-react";

const trustBadges = [
    { icon: ShieldCheck, text: "Background Checked" },
    { icon: Heart, text: "CPR Certified" },
    { icon: Award, text: "5+ Years Experience" },
    { icon: Languages, text: "Bilingual Services" },
];

export default function Hero() {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-10 w-20 h-20 bg-white/20 rounded-full blur-xl"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-40 left-10 w-32 h-32 bg-[#F279BC]/20 rounded-full blur-xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#F2A0CD]/20 rounded-full blur-lg"
                />
            </div>

            <div className="container-custom relative z-10 pt-28 sm:pt-32 lg:pt-24 pb-12 hero-mobile-wrap">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        {/* Rating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-sm mb-6 border border-white/50"
                        >
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className="text-yellow-400 fill-yellow-400 sm:w-5 sm:h-5"
                                    />
                                ))}
                            </div>
                            <span className="text-xs sm:text-sm font-bold text-[#BF5084]">
                                5.0 Rating • 50+ Families
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="hero-title font-bold text-[#3D1F2E] mb-6 leading-[1.1]"
                        >
                            Trusted Childcare for Your{" "}
                            <span className="hero-title-accent">Special Events</span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Serving{" "}
                            <span className="relative inline-flex items-center font-bold text-[#BF5084]">
                                Kansas City
                            </span>{" "}
                            and surroundings.
                            Experienced provider specializing in event and in-home care.
                            Creating safe, fun, and comfortable environments for your little ones.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col xs:flex-row gap-4 justify-center lg:justify-start mb-10 px-4 xs:px-0"
                        >
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => scrollToSection("#contact")}
                                className="btn-primary"
                            >
                                <Calendar size={18} />
                                Book Consultation
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => scrollToSection("#services")}
                                className="btn-secondary"
                            >
                                View Services
                            </motion.button>
                        </motion.div>

                        {/* Trust Badges - Simplified for Mobile */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-2 gap-3"
                        >
                            {trustBadges.map((badge, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-2 bg-white/40 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/20"
                                >
                                    <badge.icon size={16} className="text-[#D962A3] shrink-0" />
                                    <span className="text-[10px] sm:text-xs font-bold text-[#5C2D42]">
                                        {badge.text}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Hero Image/Illustration - Mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="hero-mobile-media relative lg:hidden mb-10 order-1 mt-6"
                    >
                        <div className="relative max-w-sm mx-auto pt-4">
                            {/* Outer Glow */}
                            <motion.div
                                animate={{ opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -inset-6 bg-gradient-to-br from-[#BF5084]/30 via-[#D962A3]/20 to-[#F279BC]/30 rounded-[2.8rem] blur-2xl"
                            />

                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative"
                            >
                                {/* Premium Frame */}
                                <div className="absolute -inset-1 bg-gradient-to-br from-[#BF5084] via-[#D962A3] to-[#F279BC] rounded-[2rem] opacity-80" />
                                <div className="absolute inset-0 bg-white rounded-[1.8rem] m-1" />

                                <div className="relative rounded-[1.5rem] overflow-hidden m-2 shadow-2xl">
                                    <div className="aspect-[4/3] relative">
                                        <img
                                            src="/images/hero-care.png"
                                            alt="Professional childcare services"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
                                    </div>
                                </div>

                                {/* Corner Decorations */}
                                <div className="absolute top-2 left-2 w-6 h-6 border-l-3 border-t-3 border-[#F279BC]/60 rounded-tl-lg" />
                                <div className="absolute top-2 right-2 w-6 h-6 border-r-3 border-t-3 border-[#F279BC]/60 rounded-tr-lg" />
                                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-3 border-b-3 border-[#F279BC]/60 rounded-bl-lg" />
                                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-3 border-b-3 border-[#F279BC]/60 rounded-br-lg" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Hero Image/Illustration - Desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative">
                            {/* Outer Glow */}
                            <div className="absolute -inset-8 bg-gradient-to-br from-[#F279BC]/30 via-[#FDF0F6]/20 to-[#F291C7]/30 rounded-[3rem] blur-3xl opacity-60" />

                            {/* Main Image Container */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full max-w-lg mx-auto"
                            >
                                {/* Premium Frame */}
                                <div className="absolute -inset-1.5 bg-gradient-to-br from-[#F279BC] via-[#F291C7] to-[#F2A0CD] rounded-[2.5rem] opacity-90" />
                                <div className="absolute inset-0 bg-white rounded-[2.3rem] m-1.5" />

                                <div className="relative rounded-[2rem] overflow-hidden m-3 shadow-2xl">
                                    <div className="aspect-[4/3] relative">
                                        <img
                                            src="/images/hero-care.png"
                                            alt="Professional childcare services"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
                                    </div>
                                </div>

                                {/* Corner Decorations */}
                                <div className="absolute top-3 left-3 w-10 h-10 border-l-4 border-t-4 border-[#F279BC]/70 rounded-tl-xl" />
                                <div className="absolute top-3 right-3 w-10 h-10 border-r-4 border-t-4 border-[#F279BC]/70 rounded-tr-xl" />
                                <div className="absolute bottom-3 left-3 w-10 h-10 border-l-4 border-b-4 border-[#F279BC]/70 rounded-bl-xl" />
                                <div className="absolute bottom-3 right-3 w-10 h-10 border-r-4 border-b-4 border-[#F279BC]/70 rounded-br-xl" />
                            </motion.div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#F279BC]/20 rounded-full flex items-center justify-center">
                                        <ShieldCheck size={24} className="text-[#D962A3]" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#5C2D42]">100% Safe</p>
                                        <p className="text-xs text-gray-500">Background Verified</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Another Floating Badge */}
                            <motion.div
                                animate={{ y: [0, 10, 0], rotate: [3, -3, 3] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5,
                                }}
                                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#F291C7]/30 rounded-full flex items-center justify-center">
                                        <Award size={24} className="text-[#D962A3]" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#5C2D42]">5+ Years</p>
                                        <p className="text-xs text-gray-500">Experience</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-[#5C2D42]/30 rounded-full flex justify-center pt-2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-[#D962A3] rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
