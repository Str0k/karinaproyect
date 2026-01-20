"use client";

import { motion } from "framer-motion";
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
    return (
        <section id="why-trust" className="section-padding gradient-section">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-[#4ECDC4]/10 text-[#4ECDC4] font-semibold rounded-full text-sm mb-4">
                        Why Choose Me
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
                        Why Parents <span className="text-[#FF6B6B]">Trust Me</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
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
                            >
                                <feature.icon
                                    size={36}
                                    className="text-[#FF6B6B] group-hover:scale-110 transition-transform"
                                />
                            </motion.div>
                            <h3 className="font-bold text-[#2C3E50] mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
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
                >
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", delay: 0.6 }}
                                className="text-5xl font-bold text-[#FF6B6B] mb-2"
                            >
                                5+
                            </motion.div>
                            <p className="text-gray-600 font-medium">Years of Experience</p>
                        </div>
                        <div>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", delay: 0.7 }}
                                className="text-5xl font-bold text-[#4ECDC4] mb-2"
                            >
                                50+
                            </motion.div>
                            <p className="text-gray-600 font-medium">Happy Families</p>
                        </div>
                        <div>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", delay: 0.8 }}
                                className="text-5xl font-bold text-[#FF9A8B] mb-2"
                            >
                                100+
                            </motion.div>
                            <p className="text-gray-600 font-medium">Events Covered</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
