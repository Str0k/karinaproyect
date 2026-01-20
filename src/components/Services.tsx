"use client";

import { motion } from "framer-motion";
import { Home, Moon, PartyPopper, Languages, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Home,
        title: "Private In-Home Babysitting",
        description:
            "Personalized care in the comfort of your home. One-on-one attention ensuring your child's routine and needs are perfectly met.",
        color: "#FF6B6B",
        bgColor: "#FEE5E5",
    },
    {
        icon: Moon,
        title: "Evening & Overnight Care",
        description:
            "Reliable coverage when you need it most. Date nights, work commitments, or just a well-deserved break—I've got you covered.",
        color: "#4ECDC4",
        bgColor: "#E0F7F5",
    },
    {
        icon: PartyPopper,
        title: "Event & Party Childcare",
        description:
            "Let kids have fun while you enjoy your celebration. Organized activities and supervision for birthdays, weddings, and gatherings.",
        color: "#FF9A8B",
        bgColor: "#FFEBE8",
    },
    {
        icon: Languages,
        title: "Spanish Language Exposure",
        description:
            "Bilingual engagement for cultural enrichment. Introducing Spanish through natural interaction, songs, and playful learning.",
        color: "#6C5CE7",
        bgColor: "#EDE9FE",
    },
];

export default function Services() {
    return (
        <section id="services" className="section-padding bg-[#FFFBF0]">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-[#FF6B6B]/10 text-[#FF6B6B] font-semibold rounded-full text-sm mb-4">
                        What I Offer
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
                        Childcare Services Tailored to{" "}
                        <span className="text-[#FF6B6B]">Your Needs</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
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
                                    <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 flex-grow mb-4">
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

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 mb-4">
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
