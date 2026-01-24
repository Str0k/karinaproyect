"use client";

import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MessageCircle,
    Clock,
    MapPin,
    Heart,
    ShieldCheck,
    Award,
} from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FAFFFE 0%, #D1F8F0 50%, #EBFFFF 100%)" }}>
            {/* Decorative Elements */}
            <div className="absolute top-20 -left-20 w-48 h-48 bg-gradient-to-br from-[#84E2C2]/20 to-[#B8F1E1]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 -right-20 w-56 h-56 bg-gradient-to-br from-[#9EE9D1]/15 to-[#D1F8F0]/20 rounded-full blur-3xl pointer-events-none" />

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
                        Get in Touch
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A3A] mb-4">
                        Ready to <span className="text-[#2D9A78]">Connect?</span>
                    </h2>
                    <p className="text-[#4A6D6D] text-lg">
                        I&apos;d love to hear from you! Reach out directly and let&apos;s discuss how I can help with your childcare needs.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                    {/* Call Card */}
                    <motion.a
                        href="tel:+19132069322"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gradient-to-br from-[#2D9A78] to-[#84E2C2] rounded-3xl p-8 text-white shadow-lg cursor-pointer group"
                        style={{ boxShadow: "0 10px 40px rgba(45, 154, 120, 0.3)" }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Phone size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Call Me</h3>
                                <p className="text-white/80">Direct & immediate</p>
                            </div>
                        </div>
                        <p className="text-3xl font-bold mb-2">(913) 206-9322</p>
                        <p className="text-white/70 text-sm">Tap to call now</p>
                    </motion.a>

                    {/* Text/Message Card */}
                    <motion.a
                        href="sms:+19132069322"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gradient-to-br from-[#84E2C2] to-[#9EE9D1] rounded-3xl p-8 text-white shadow-lg cursor-pointer group"
                        style={{ boxShadow: "0 10px 40px rgba(132, 226, 194, 0.3)" }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <MessageCircle size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Text Me</h3>
                                <p className="text-white/80">Quick & convenient</p>
                            </div>
                        </div>
                        <p className="text-3xl font-bold mb-2">(913) 206-9322</p>
                        <p className="text-white/70 text-sm">Tap to send a message</p>
                    </motion.a>
                </div>

                {/* Email Card */}
                <motion.a
                    href="mailto:karigss95@gmail.com"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="block max-w-2xl mx-auto mb-16"
                >
                    <div className="bg-white rounded-3xl p-6 shadow-lg flex items-center gap-6 group" style={{ boxShadow: "0 4px 20px rgba(132, 226, 194, 0.15)" }}>
                        <div className="w-14 h-14 bg-[#84E2C2]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Mail size={28} className="text-[#2D9A78]" />
                        </div>
                        <div className="flex-grow">
                            <p className="text-sm text-[#4A6D6D] mb-1">Email me at</p>
                            <p className="text-xl font-semibold text-[#1A3A3A]">karigss95@gmail.com</p>
                        </div>
                        <div className="hidden sm:block text-sm text-[#84E2C2] font-medium">
                            Click to email →
                        </div>
                    </div>
                </motion.a>

                {/* Info Cards */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {/* Response Time */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="bg-white rounded-2xl p-6 text-center shadow-md"
                        style={{ boxShadow: "0 4px 20px rgba(132, 226, 194, 0.1)" }}
                    >
                        <div className="w-12 h-12 bg-[#84E2C2]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Clock size={24} className="text-[#2D9A78]" />
                        </div>
                        <h4 className="font-bold text-[#1A3A3A] mb-1">Quick Response</h4>
                        <p className="text-sm text-[#4A6D6D]">Usually within 2-4 hours</p>
                    </motion.div>

                    {/* Service Area */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="bg-white rounded-2xl p-6 text-center shadow-md"
                        style={{ boxShadow: "0 4px 20px rgba(132, 226, 194, 0.1)" }}
                    >
                        <div className="w-12 h-12 bg-[#9EE9D1]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <MapPin size={24} className="text-[#2D9A78]" />
                        </div>
                        <h4 className="font-bold text-[#1A3A3A] mb-1">Kansas City Area</h4>
                        <p className="text-sm text-[#4A6D6D]">& surrounding cities</p>
                    </motion.div>

                    {/* Certified */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        className="bg-white rounded-2xl p-6 text-center shadow-md"
                        style={{ boxShadow: "0 4px 20px rgba(132, 226, 194, 0.1)" }}
                    >
                        <div className="w-12 h-12 bg-[#B8F1E1]/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <ShieldCheck size={24} className="text-[#2D9A78]" />
                        </div>
                        <h4 className="font-bold text-[#1A3A3A] mb-1">Fully Certified</h4>
                        <p className="text-sm text-[#4A6D6D]">CPR & First Aid</p>
                    </motion.div>
                </div>

                {/* Trust Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="text-[#4A6D6D] flex items-center justify-center gap-2">
                        Looking forward to hearing from you! <Heart size={16} className="text-[#84E2C2] fill-[#84E2C2]" />
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
