"use client";

import { motion } from "framer-motion";
import { Heart, Users, Clock, Award, Sparkles } from "lucide-react";
import Image from "next/image";

const highlights = [
    { icon: Heart, text: "Compassionate Care" },
    { icon: Users, text: "Family-Centered" },
    { icon: Clock, text: "Flexible & Reliable" },
    { icon: Award, text: "Professional Excellence" },
];

export default function Biography() {
    return (
        <section
            id="about"
            className="section-padding relative overflow-hidden"
            style={{
                background: "linear-gradient(180deg, var(--color-mint-pale) 0%, var(--color-cream) 100%)",
            }}
        >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl"
                    style={{ backgroundColor: "rgba(132, 226, 194, 0.3)" }}
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl"
                    style={{ backgroundColor: "rgba(158, 233, 209, 0.25)" }}
                />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{ backgroundColor: "rgba(132, 226, 194, 0.2)" }}
                    >
                        <Sparkles size={18} style={{ color: "#2D9A78" }} />
                        <span className="text-sm font-semibold" style={{ color: "#2D9A78" }}>
                            About Me
                        </span>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#1A3A3A" }}>
                        Meet Your Trusted Caregiver
                    </h2>
                </motion.div>

                {/* Biography Content */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Photo Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative max-w-md mx-auto lg:mx-0">
                            {/* Outer Glow */}
                            <div
                                className="absolute -inset-6 rounded-[2.5rem] blur-2xl opacity-60"
                                style={{
                                    background: "linear-gradient(135deg, rgba(132, 226, 194, 0.5), rgba(184, 241, 225, 0.4), rgba(158, 233, 209, 0.5))",
                                }}
                            />

                            {/* Premium Frame with Animation */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative"
                            >
                                {/* Gradient Border */}
                                <div
                                    className="absolute -inset-1.5 rounded-[2rem] opacity-90"
                                    style={{
                                        background: "linear-gradient(135deg, #84E2C2, #9EE9D1, #B8F1E1, #84E2C2)",
                                        backgroundSize: "300% 300%",
                                        animation: "gradient-shift 4s ease infinite",
                                    }}
                                />
                                <div className="absolute inset-0 bg-white rounded-[1.8rem] m-1.5" />

                                {/* Image Container */}
                                <div className="relative rounded-[1.5rem] overflow-hidden m-3 shadow-2xl">
                                    <div className="aspect-[3/4] relative">
                                        <Image
                                            src="/images/karina-profile.jpg"
                                            alt="Karina - Professional Childcare Provider"
                                            fill
                                            className="object-cover object-top"
                                            priority
                                        />
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: "linear-gradient(to top, rgba(26, 58, 58, 0.1), transparent 40%, rgba(255, 255, 255, 0.1))",
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Corner Decorations */}
                                <div
                                    className="absolute top-3 left-3 w-10 h-10 border-l-4 border-t-4 rounded-tl-xl"
                                    style={{ borderColor: "rgba(132, 226, 194, 0.7)" }}
                                />
                                <div
                                    className="absolute top-3 right-3 w-10 h-10 border-r-4 border-t-4 rounded-tr-xl"
                                    style={{ borderColor: "rgba(132, 226, 194, 0.7)" }}
                                />
                                <div
                                    className="absolute bottom-3 left-3 w-10 h-10 border-l-4 border-b-4 rounded-bl-xl"
                                    style={{ borderColor: "rgba(132, 226, 194, 0.7)" }}
                                />
                                <div
                                    className="absolute bottom-3 right-3 w-10 h-10 border-r-4 border-b-4 rounded-br-xl"
                                    style={{ borderColor: "rgba(132, 226, 194, 0.7)" }}
                                />
                            </motion.div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: "rgba(132, 226, 194, 0.2)" }}
                                    >
                                        <Heart size={24} style={{ color: "#2D9A78" }} />
                                    </div>
                                    <div>
                                        <p className="font-bold" style={{ color: "#1A3A3A" }}>Dedicated Care</p>
                                        <p className="text-xs" style={{ color: "#4A6D6D" }}>Trusted by Families</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Bio Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl md:text-3xl font-bold mb-2"
                                style={{ color: "#1A3A3A" }}
                            >
                                Hi, I&apos;m Karina
                            </motion.h3>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="h-1 w-20 rounded-full origin-left"
                                style={{ backgroundColor: "#84E2C2" }}
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="space-y-5 text-lg leading-relaxed"
                            style={{ color: "#4A6D6D" }}
                        >
                            <p>
                                I provide <span className="font-semibold" style={{ color: "#2D9A78" }}>attentive, nurturing childcare</span> rooted
                                in patience, consistency, and thoughtful engagement. Every interaction is an opportunity to support
                                a child&apos;s growth, curiosity, and well-being.
                            </p>
                            <p>
                                My approach centers on creating a <span className="font-semibold" style={{ color: "#2D9A78" }}>calm, supportive environment</span> where
                                children feel comfortable, safe, and free to explore—while giving parents complete peace of mind.
                                I understand that entrusting your child to someone is a significant decision, and I take that
                                responsibility seriously.
                            </p>
                            <p>
                                <span className="font-semibold" style={{ color: "#2D9A78" }}>Reliable care, clear communication, and genuine respect</span> for
                                each family&apos;s unique needs and values guide everything I do. Whether it&apos;s in-home care or
                                event childcare, I bring the same dedication to every situation.
                            </p>
                        </motion.div>

                        {/* Highlight Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="grid grid-cols-2 gap-4 pt-4"
                        >
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-md backdrop-blur-sm"
                                    style={{
                                        border: "1px solid rgba(132, 226, 194, 0.3)",
                                    }}
                                >
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                                        style={{ backgroundColor: "rgba(132, 226, 194, 0.2)" }}
                                    >
                                        <item.icon size={20} style={{ color: "#2D9A78" }} />
                                    </div>
                                    <span className="text-sm font-semibold" style={{ color: "#1A3A3A" }}>
                                        {item.text}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
