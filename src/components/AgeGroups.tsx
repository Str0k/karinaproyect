"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Baby, Blocks, BookOpen } from "lucide-react";

const ageGroups = [
    {
        icon: Baby,
        age: "0-12 months",
        title: "Infants",
        activities: [
            "Feeding & bottle care",
            "Tummy time & sensory play",
            "Gentle rocking & soothing",
            "Diaper changes & nap routines",
        ],
        approach:
            "Nurturing, gentle care with attention to your baby's unique schedule and comfort needs.",
        color: "#D962A3",
        bgColor: "#FDF0F6",
    },
    {
        icon: Blocks,
        age: "1-4 years",
        title: "Toddlers",
        activities: [
            "Creative arts & crafts",
            "Building & construction play",
            "Music & movement activities",
            "Early learning games",
        ],
        approach:
            "Engaged, patient care that encourages curiosity and independence through guided play.",
        color: "#F279BC",
        bgColor: "#FFF8FB",
    },
    {
        icon: BookOpen,
        age: "5-10 years",
        title: "Elementary",
        activities: [
            "Homework assistance",
            "Educational games",
            "Outdoor activities",
            "Reading & storytelling",
        ],
        approach:
            "Fun, interactive care that balances learning, creativity, and active play.",
        color: "#1E7A5E",
        bgColor: "#F2A0CD",
    },
];

export default function AgeGroups() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const decorY1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const decorY2 = useTransform(scrollYProgress, [0, 1], [0, 90]);
    const decorRotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);

    return (
        <section ref={sectionRef} className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FAFFFE 0%, #FFF8FB 100%)" }}>
            {/* Parallax Decorative Elements */}
            <motion.div
                style={{ y: decorY1, rotate: decorRotate }}
                className="absolute top-32 -right-16 w-36 h-36 bg-gradient-to-br from-[#F279BC]/20 to-[#F2A0CD]/25 rounded-full blur-2xl pointer-events-none"
            />
            <motion.div
                style={{ y: decorY2 }}
                className="absolute bottom-32 -left-16 w-44 h-44 bg-gradient-to-br from-[#F291C7]/20 to-[#FDF0F6]/25 rounded-full blur-3xl pointer-events-none"
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
                    <span className="inline-block px-4 py-2 bg-[#F279BC]/20 text-[#D962A3] font-semibold rounded-full text-sm mb-4">
                        Age Groups
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3D1F2E] mb-4">
                        Care for <span className="text-[#D962A3]">Every Age</span>
                    </h2>
                    <p className="text-[#7A4A5E] text-lg">
                        Age-appropriate activities and care tailored to each developmental
                        stage.
                    </p>
                </motion.div>

                {/* Age Groups Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                    {ageGroups.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="card h-full relative overflow-hidden"
                                style={{ boxShadow: "0 4px 20px rgba(242, 121, 188, 0.15)" }}
                            >
                                {/* Decorative Background */}
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"
                                    style={{ backgroundColor: group.bgColor }}
                                />

                                <div className="relative">
                                    {/* Icon & Age */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center"
                                            style={{ backgroundColor: group.bgColor }}
                                        >
                                            <group.icon size={32} style={{ color: group.color }} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#3D1F2E]">
                                                {group.title}
                                            </h3>
                                            <span
                                                className="text-sm font-semibold"
                                                style={{ color: group.color }}
                                            >
                                                {group.age}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Activities */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-[#7A4A5E] uppercase tracking-wide mb-3">
                                            Typical Activities
                                        </h4>
                                        <ul className="space-y-2">
                                            {group.activities.map((activity, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <div
                                                        className="w-1.5 h-1.5 rounded-full"
                                                        style={{ backgroundColor: group.color }}
                                                    />
                                                    <span className="text-[#7A4A5E] text-sm">
                                                        {activity}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Approach */}
                                    <div
                                        className="p-4 rounded-xl"
                                        style={{ backgroundColor: group.bgColor }}
                                    >
                                        <p className="text-sm" style={{ color: group.color }}>
                                            <strong>My Approach:</strong> {group.approach}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
