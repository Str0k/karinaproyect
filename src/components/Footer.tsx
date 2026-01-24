"use client";

import { motion } from "framer-motion";
import {
    Heart,
    Phone,
    Mail,
    MapPin,
    ShieldCheck,
    Award,
    Languages,
} from "lucide-react";

const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "About Me", href: "#why-trust" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

const serviceAreas = [
    "Kansas City",
    "Overland Park",
    "Olathe",
    "Lenexa",
    "Shawnee",
    "Prairie Village",
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-[#1A3A3A] text-white">
            {/* Main Footer */}
            <div className="container-custom section-padding pb-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <a href="#" className="text-3xl font-bold mb-4 block">
                            <span className="text-[#84E2C2]">CareBy</span>KG
                        </a>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Professional childcare services for Kansas City families.
                            Specializing in event babysitting, in-home care, and bilingual
                            services.
                        </p>
                        <div className="flex gap-3">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                <ShieldCheck size={20} className="text-[#84E2C2]" />
                            </div>
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                <Award size={20} className="text-[#9EE9D1]" />
                            </div>
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                <Languages size={20} className="text-[#B8F1E1]" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-gray-300 hover:text-[#84E2C2] hover:pl-2 transition-all text-left"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Service Areas */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-bold mb-6">Service Areas</h4>
                        <ul className="space-y-3">
                            {serviceAreas.map((area) => (
                                <li key={area} className="flex items-center gap-2">
                                    <MapPin size={14} className="text-[#84E2C2]" />
                                    <span className="text-gray-300 hover:text-white transition-colors">{area}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="tel:+19132069322"
                                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-[#84E2C2]/10 rounded-full flex items-center justify-center group-hover:bg-[#84E2C2]/20 transition-colors">
                                        <Phone size={18} className="text-[#84E2C2]" />
                                    </div>
                                    (913) 206-9322
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:karigss95@gmail.com"
                                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-[#9EE9D1]/10 rounded-full flex items-center justify-center group-hover:bg-[#9EE9D1]/20 transition-colors">
                                        <Mail size={18} className="text-[#9EE9D1]" />
                                    </div>
                                    karigss95@gmail.com
                                </a>
                            </li>
                        </ul>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => scrollToSection("#contact")}
                            className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-[#84E2C2] to-[#2D9A78] text-white font-bold rounded-xl shadow-lg hover:shadow-[#84E2C2]/20 transition-all"
                        >
                            Book Now
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 bg-[#152e2e]">
                <div className="container-custom py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} CareByKG. All rights reserved.
                        </p>
                        <p className="text-gray-400 text-sm flex items-center gap-2">
                            Made with <Heart size={16} className="text-[#84E2C2] fill-[#84E2C2]" /> in Kansas City
                        </p>
                    </div>
                </div>
            </div>
        </footer >
    );
}
