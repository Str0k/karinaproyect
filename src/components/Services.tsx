"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Home, Moon, PartyPopper, Languages, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Home,
        title: "Private In-Home Babysitting",
        description:
            "Personalized care in the comfort of your home. One-on-one attention ensuring your child's routine and needs are perfectly met.",
        color: "#2D9A78",
        bgColor: "#D1F8F0",
    },
    {
        icon: Moon,
        title: "Evening & Overnight Care",
        description:
            "Reliable coverage when you need it most. Date nights, work commitments, or just a well-deserved break—I've got you covered.",
        color: "#84E2C2",
        bgColor: "#EBFFFF",
    },
    {
        icon: PartyPopper,
        title: "Event & Party Childcare",
        description:
            "Let kids have fun while you enjoy your celebration. Organized activities and supervision for birthdays, weddings, and gatherings.",
        color: "#2D9A78",
        bgColor: "#B8F1E1",
    },
    {
        icon: Languages,
        title: "Spanish Language Exposure",
        description:
            "Bilingual engagement for cultural enrichment. Introducing Spanish through natural interaction, songs, and playful learning.",
        color: "#1E7A5E",
        bgColor: "#9EE9D1",
    },
];

export default function Services() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const decorY1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const decorY2 = useTransform(scrollYProgress, [0, 1], [0, 60]);
    const decorRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

    return (
        <section id="services" ref={sectionRef} className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FAFFFE 0%, #EBFFFF 100%)" }}>
            {/* Parallax Decorative Elements */}
            <motion.div
                style={{ y: decorY1, rotate: decorRotate }}
                className="absolute top-20 -left-20 w-40 h-40 bg-gradient-to-br from-[#84E2C2]/20 to-[#D1F8F0]/20 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
                style={{ y: decorY2 }}
                className="absolute bottom-40 -right-20 w-60 h-60 bg-gradient-to-br from-[#9EE9D1]/20 to-[#B8F1E1]/20 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
                style={{ y: backgroundY }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#84E2C2]/10 to-transparent rounded-full pointer-events-none"
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
                        What I Offer
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A3A] mb-4">
                        Childcare Services Tailored to{" "}
                        <span className="text-[#2D9A78]">Your Needs</span>
                    </h2>
                    <p className="text-[#4A6D6D] text-lg">
                        From everyday babysitting to special events, I provide professional,
                        nurturing care that gives you peace of mind.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="card h-full cursor-pointer group"
                            >
                                <div className="flex flex-col h-full">
                                    {/* Icon */}
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                                        style={{ backgroundColor: service.bgColor }}
                                    >
                                        <service.icon
                                            size={32}
                                            style={{ color: service.color }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-[#1A3A3A] mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-[#4A6D6D] flex-grow mb-4">
                                        {service.description}
                                    </p>

                                    {/* Learn More Link */}
                                    <motion.a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 font-semibold transition-colors group-hover:gap-3"
                                        style={{ color: service.color }}
                                        whileHover={{ x: 5 }}
                                    >
                                        Learn More
                                        <ArrowRight size={18} className="transition-transform" />
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Activities Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-20 relative"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="inline-block px-4 py-2 bg-[#9EE9D1]/30 text-[#1E7A5E] font-semibold rounded-full text-sm mb-4"
                            >
                                Featured Activity
                            </motion.span>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl md:text-3xl font-bold text-[#1A3A3A] mb-4"
                            >
                                Arts & Crafts{" "}
                                <span className="text-[#2D9A78]">Adventures</span>
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-[#4A6D6D] text-lg leading-relaxed mb-6"
                            >
                                Creativity knows no bounds! From painting masterpieces to building crafts,
                                every session is filled with colorful activities that help children express
                                themselves while developing fine motor skills and confidence.
                            </motion.p>
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary inline-flex"
                            >
                                Book a Creative Session
                                <ArrowRight size={18} />
                            </motion.a>
                        </div>

                        {/* Image with Premium Frame */}
                        <div className="relative order-1 lg:order-2">
                            {/* Outer Glow */}
                            <div className="absolute -inset-6 bg-gradient-to-br from-[#84E2C2]/30 via-[#D1F8F0]/20 to-[#9EE9D1]/30 rounded-[3rem] blur-2xl opacity-60" />

                            <motion.div
                                whileHover={{ scale: 1.02, rotate: -1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative"
                            >
                                {/* Premium Frame */}
                                <div className="absolute -inset-1.5 bg-gradient-to-br from-[#84E2C2] via-[#9EE9D1] to-[#B8F1E1] rounded-[2rem] opacity-90" />
                                <div className="absolute inset-0 bg-white rounded-[1.8rem] m-1.5" />

                                <div className="relative rounded-[1.5rem] overflow-hidden m-3 shadow-2xl">
                                    <div className="aspect-[4/3] relative">
                                        <img
                                            src="/images/playing.png"
                                            alt="Arts and crafts activities"
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
                    </div>
                </motion.div>

                {/* Second Featured Activity - Storytime */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-24 relative"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image with Premium Frame - Left on Desktop */}
                        <div className="relative order-1">
                            {/* Outer Glow */}
                            <div className="absolute -inset-6 bg-gradient-to-br from-[#FFD166]/30 via-[#FFE5A3]/20 to-[#FFC947]/30 rounded-[3rem] blur-2xl opacity-60" />

                            <motion.div
                                whileHover={{ scale: 1.02, rotate: 1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative"
                            >
                                {/* Premium Frame */}
                                <div className="absolute -inset-1.5 bg-gradient-to-br from-[#FFD166] via-[#FFE5A3] to-[#FFC947] rounded-[2rem] opacity-90" />
                                <div className="absolute inset-0 bg-white rounded-[1.8rem] m-1.5" />

                                <div className="relative rounded-[1.5rem] overflow-hidden m-3 shadow-2xl">
                                    <div className="aspect-[4/3] relative">
                                        <img
                                            src="/images/reading.png"
                                            alt="Child reading a book"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
                                    </div>
                                </div>

                                {/* Corner Decorations */}
                                <div className="absolute top-3 left-3 w-8 h-8 border-l-4 border-t-4 border-[#FFD166]/70 rounded-tl-xl" />
                                <div className="absolute top-3 right-3 w-8 h-8 border-r-4 border-t-4 border-[#FFD166]/70 rounded-tr-xl" />
                                <div className="absolute bottom-3 left-3 w-8 h-8 border-l-4 border-b-4 border-[#FFD166]/70 rounded-bl-xl" />
                                <div className="absolute bottom-3 right-3 w-8 h-8 border-r-4 border-b-4 border-[#FFD166]/70 rounded-br-xl" />
                            </motion.div>
                        </div>

                        {/* Content */}
                        <div className="text-center lg:text-left order-2">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="inline-block px-4 py-2 bg-[#FFD166]/20 text-[#B38B00] font-semibold rounded-full text-sm mb-4"
                            >
                                Educational Focus
                            </motion.span>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl md:text-3xl font-bold text-[#1A3A3A] mb-4"
                            >
                                Storytime & <span className="text-[#F4B942]">Early Learning</span>
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-[#4A6D6D] text-lg leading-relaxed mb-6"
                            >
                                Fostering a love for reading starts early! I incorporate quiet
                                reading time and interactive storytelling to spark imagination
                                and support language development in a cozy, calming atmosphere.
                            </motion.p>
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-[#B38B00] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                            >
                                Learn About My Methods
                                <ArrowRight size={18} />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-[#4A6D6D] mb-4">
                        Not sure which service is right for you?
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary inline-flex"
                    >
                        Let&apos;s Discuss Your Needs
                        <ArrowRight size={18} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
