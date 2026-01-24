"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Calendar, ChevronRight } from "lucide-react";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#why-trust" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-md py-3"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="container-custom flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        className="text-2xl font-bold text-[#1A3A3A] hover:text-[#2D9A78] transition-colors"
                    >
                        <span className="text-[#2D9A78]">CareBy</span>KG
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="text-[#1A3A3A] hover:text-[#2D9A78] font-medium transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="tel:+19132069322"
                            className="flex items-center gap-2 text-[#1A3A3A] hover:text-[#2D9A78] transition-colors"
                        >
                            <Phone size={18} />
                            <span className="font-medium">(913) 206-9322</span>
                        </a>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection("#contact")}
                            className="btn-primary flex items-center gap-2 py-3 px-6"
                        >
                            <Calendar size={18} />
                            Book Now
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-[#2C3E50]"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white/95 backdrop-blur-xl z-50 shadow-[-10px_0_30px_rgba(0,0,0,0.1)] md:hidden border-l border-white/20"
            >
                <div className="flex flex-col h-full p-8 pt-24">
                    {/* Brand in Menu */}
                    <div className="mb-12">
                        <a
                            href="#"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-bold text-[#1A3A3A]"
                        >
                            <span className="text-[#2D9A78]">CareBy</span>KG
                        </a>
                        <p className="text-sm text-gray-500 mt-2">Professional Childcare</p>
                    </div>

                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link, index) => (
                            <motion.button
                                key={link.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : 20 }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                                onClick={() => scrollToSection(link.href)}
                                className="text-left text-xl font-semibold text-[#1A3A3A] hover:text-[#2D9A78] py-4 border-b border-gray-50/50 transition-all flex items-center justify-between group"
                            >
                                {link.name}
                                <ChevronRight size={18} className="text-gray-300 group-hover:text-[#2D9A78] transition-colors" />
                            </motion.button>
                        ))}
                    </nav>

                    <div className="mt-auto space-y-6">
                        <div className="flex flex-col gap-4">
                            <a
                                href="tel:+19132069322"
                                className="flex items-center gap-4 text-[#1A3A3A] font-bold p-4 rounded-2xl bg-[#84E2C2]/10 border border-[#84E2C2]/20 shadow-sm"
                            >
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                    <Phone size={20} className="text-[#2D9A78]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-[#2D9A78] uppercase tracking-wider font-bold">Call Now</span>
                                    <span>(913) 206-9322</span>
                                </div>
                            </a>

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection("#contact")}
                                className="w-full py-4 bg-gradient-to-r from-[#1A3A3A] to-[#2D5A5A] text-white font-bold rounded-2xl shadow-xl shadow-[#1A3A3A]/10"
                            >
                                Book a Consultation
                            </motion.button>
                        </div>

                        <div className="flex justify-center gap-6 pt-4 border-t border-gray-100">
                            {/* Social or small links if any */}
                            <p className="text-xs text-gray-400">© 2026 CareByKG</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
