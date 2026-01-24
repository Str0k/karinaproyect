"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";

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
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white z-50 shadow-2xl md:hidden"
            >
                <div className="p-6 pt-20">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="text-left text-lg font-medium text-[#1A3A3A] hover:text-[#2D9A78] py-3 border-b border-gray-100 transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>
                    <div className="mt-8 space-y-4">
                        <a
                            href="tel:+19132069322"
                            className="flex items-center gap-3 text-[#2C3E50] font-medium"
                        >
                            <Phone size={20} />
                            (913) 206-9322
                        </a>
                        <button
                            onClick={() => scrollToSection("#contact")}
                            className="btn-primary w-full"
                        >
                            Book a Consultation
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
