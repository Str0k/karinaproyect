"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Heart,
    Sparkles,
    Languages,
    Clock,
    ShieldCheck,
} from "lucide-react";

const features = [
    {
        icon: Heart,
        title: "Patient & Reliable",
        description: "Calm, consistent care you can count on every time.",
    },
    {
        icon: Sparkles,
        title: "Learning Through Play",
        description: "Educational activities that spark curiosity and joy.",
    },
    {
        icon: Languages,
        title: "Bilingual",
        description: "English & Spanish through natural, fun interaction.",
    },
    {
        icon: Clock,
        title: "Flexible Availability",
        description: "Accommodating your schedule, including weekends.",
    },
    {
        icon: ShieldCheck,
        title: "Safety-Focused",
        description: "Background checked, CPR & First Aid certified.",
    },
];

export default function WhyTrust() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const decorY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const decorY2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const decorScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);

    return (
        <section id="why-trust" ref={sectionRef} className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, #F5FAFA 0%, #D1F8F0 50%, #EBFFFF 100%)" }}>
            {/* Parallax Decorative Elements */}
            <motion.div
                style={{ y: decorY1, scale: decorScale }}
                className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[#84E2C2]/30 to-[#B8F1E1]/20 rounded-full blur-2xl pointer-events-none"
            />
            <motion.div
                style={{ y: decorY2 }}
                className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-[#9EE9D1]/25 to-[#D1F8F0]/20 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
                className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#84E2C2]/15 rounded-full blur-xl pointer-events-none"
            />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-[#84E2C2]/20 text-[#2D9A78] font-semibold rounded-full text-sm mb-4">
                        Why Choose Me
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A3A] mb-4">
                        Why Parents <span className="text-[#2D9A78]">Trust Me</span>
                    </h2>
                    <p className="text-[#4A6D6D] text-lg">
                        Every child deserves attentive, loving care. Here&apos;s what sets my
                        childcare services apart.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="w-20 h-20 mx-auto mb-4 bg-white rounded-2xl shadow-md flex items-center justify-center group"
                                style={{ boxShadow: "0 4px 20px rgba(132, 226, 194, 0.3)" }}
                            >
                                <feature.icon
                                    size={36}
                                    className="text-[#2D9A78] group-hover:scale-110 transition-transform"
                                />
                            </motion.div>
                            <h3 className="font-bold text-[#1A3A3A] mb-2">{feature.title}</h3>
                            <p className="text-sm text-[#4A6D6D]">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Trust Element */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-lg"
                    style={{ boxShadow: "0 10px 40px rgba(132, 226, 194, 0.2)" }}
                >
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", delay: 0.6 }}
                                className="text-5xl font-bold text-[#2D9A78] mb-2"
                            >
                                5+
                            </motion.div>
                            <p className="text-[#4A6D6D] font-medium">Years of Experience</p>
                        </div>
                        <div>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", delay: 0.7 }}
                                className="text-5xl font-bold text-[#84E2C2] mb-2"
                            >
                                50+
                            </motion.div>
                            <p className="text-[#4A6D6D] font-medium">Happy Families</p>
                        </div>
                        <div>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", delay: 0.8 }}
                                className="text-5xl font-bold text-[#9EE9D1] mb-2"
                            >
                                100+
                            </motion.div>
                            <p className="text-[#4A6D6D] font-medium">Events Covered</p>
                        </div>
                    </div>
                </motion.div>

                {/* Premium Image Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-20 relative"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image with Premium Frame */}
                        <div className="relative">
                            {/* Outer Glow */}
                            <div className="absolute -inset-6 bg-gradient-to-br from-[#84E2C2]/30 via-[#D1F8F0]/20 to-[#9EE9D1]/30 rounded-[3rem] blur-2xl opacity-60" />

                            <motion.div
                                whileHover={{ scale: 1.02, rotate: 1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative"
                            >
                                {/* Premium Frame */}
                                <div className="absolute -inset-1.5 bg-gradient-to-br from-[#84E2C2] via-[#9EE9D1] to-[#B8F1E1] rounded-[2rem] opacity-90" />
                                <div className="absolute inset-0 bg-white rounded-[1.8rem] m-1.5" />

                                <div className="relative rounded-[1.5rem] overflow-hidden m-3 shadow-2xl">
                                    <div className="aspect-[4/3] relative">
                                        <img
                                            src="/images/reading.png"
                                            alt="Reading time with children"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
                                    </div>
                                </div>

                                {/* Corner Decorations */}
                                <div className="absolute top-3 left-3 w-8 h-8 border-l-4 border-t-4 border-[#84E2C2]/70 rounded-tl-xl" />
                                <div className="absolute top-3 right-3 w-8 h-8 border-r-4 border-t-4 border-[#84E2C2]/70 rounded-tr-xl" />
                                <div className="absolute bottom-3 left-3 w-8 h-8 border-l-4 border-b-4 border-[#84E2C2]/70 rounded-bl-xl" />
                                <div className="absolute bottom-3 right-3 w-8 h-8 border-r-4 border-b-4 border-[#84E2C2]/70 rounded-br-xl" />
                            </motion.div>
                        </div>

                        {/* Content */}
                        <div className="text-center lg:text-left">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="inline-block px-4 py-2 bg-[#84E2C2]/20 text-[#2D9A78] font-semibold rounded-full text-sm mb-4"
                            >
                                Creating Moments
                            </motion.span>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl md:text-3xl font-bold text-[#1A3A3A] mb-4"
                            >
                                Learning Through{" "}
                                <span className="text-[#2D9A78]">Stories & Play</span>
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-[#4A6D6D] text-lg leading-relaxed mb-6"
                            >
                                Every child deserves quality time filled with imagination and wonder.
                                From reading adventures to creative play, I create meaningful experiences
                                that spark curiosity and joy in every little heart.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-3 justify-center lg:justify-start"
                            >
                                <span className="px-4 py-2 bg-white rounded-full shadow-md text-sm font-medium text-[#1A3A3A]" style={{ boxShadow: "0 2px 10px rgba(132, 226, 194, 0.3)" }}>
                                    📚 Storytime
                                </span>
                                <span className="px-4 py-2 bg-white rounded-full shadow-md text-sm font-medium text-[#1A3A3A]" style={{ boxShadow: "0 2px 10px rgba(132, 226, 194, 0.3)" }}>
                                    🎨 Creative Arts
                                </span>
                                <span className="px-4 py-2 bg-white rounded-full shadow-md text-sm font-medium text-[#1A3A3A]" style={{ boxShadow: "0 2px 10px rgba(132, 226, 194, 0.3)" }}>
                                    🎵 Music & Songs
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
