"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck, FileCheck } from "lucide-react";

const testimonials = [
    {
        name: "Sarah M.",
        role: "Mom of 2",
        content:
            "Kari is absolutely wonderful with our kids! She came to our anniversary party and kept both our toddler and 7-year-old entertained the entire evening. We finally got to enjoy a party stress-free!",
        rating: 5,
    },
    {
        name: "Michael & Jennifer T.",
        role: "Parents of twins",
        content:
            "Finding a bilingual babysitter who is also CPR certified was our top priority. Kari exceeded all our expectations. Our twins now ask for her by name every time we need a sitter!",
        rating: 5,
    },
    {
        name: "Amanda R.",
        role: "Mom of 3",
        content:
            "I've used Kari for multiple birthday parties now. She creates such a fun, safe environment for all the kids. Other parents kept asking me where I found such an amazing babysitter!",
        rating: 5,
    },
    {
        name: "David L.",
        role: "Father of 1",
        content:
            "Our daughter can be shy with new people, but she warmed up to Kari within minutes. Her patience and kindness really shine through. Highly recommend for any family!",
        rating: 5,
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const decorY1 = useTransform(scrollYProgress, [0, 1], [0, -70]);
    const decorY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const decorScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.15, 0.9]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <section id="testimonials" ref={sectionRef} className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FFF8FB 0%, #FDF0F6 50%, #FAFFFE 100%)" }}>
            {/* Parallax Decorative Elements */}
            <motion.div
                style={{ y: decorY1, scale: decorScale }}
                className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-[#F279BC]/25 to-[#F291C7]/20 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
                style={{ y: decorY2 }}
                className="absolute bottom-20 right-10 w-52 h-52 bg-gradient-to-br from-[#F291C7]/25 to-[#F2A0CD]/20 rounded-full blur-3xl pointer-events-none"
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
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3D1F2E] mb-4">
                        What <span className="text-[#D962A3]">Parents Say</span>
                    </h2>
                    <p className="text-[#7A4A5E] text-lg">
                        Don&apos;t just take my word for it—hear from families I&apos;ve had the
                        pleasure of working with.
                    </p>
                </motion.div>

                {/* Testimonials Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Main Testimonial Card */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg relative"
                                style={{ boxShadow: "0 10px 40px rgba(242, 121, 188, 0.2)" }}
                            >
                                {/* Quote Icon */}
                                <Quote
                                    size={48}
                                    className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#F279BC]/20"
                                />

                                {/* Stars */}
                                <div className="flex gap-1 mb-4 sm:mb-6">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={20}
                                            className="text-yellow-400 fill-yellow-400 sm:w-6 sm:h-6"
                                        />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-base sm:text-lg md:text-xl text-[#7A4A5E] leading-relaxed mb-6 sm:mb-8 italic">
                                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#F279BC] to-[#F291C7] rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        {testimonials[currentIndex].name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#3D1F2E]">
                                            {testimonials[currentIndex].name}
                                        </p>
                                        <p className="text-[#7A4A5E] text-sm">
                                            {testimonials[currentIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center gap-4 mt-8">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevTestimonial}
                                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#3D1F2E] hover:bg-[#F279BC] hover:text-white transition-colors"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft size={24} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextTestimonial}
                                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#3D1F2E] hover:bg-[#F279BC] hover:text-white transition-colors"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight size={24} />
                            </motion.button>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-6">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex
                                        ? "bg-[#D962A3] w-8"
                                        : "bg-[#F2A0CD] hover:bg-[#F291C7]"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 flex flex-wrap justify-center gap-6"
                >
                    <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md" style={{ boxShadow: "0 4px 20px rgba(242, 121, 188, 0.2)" }}>
                        <ShieldCheck size={24} className="text-[#D962A3]" />
                        <span className="font-medium text-[#3D1F2E]">
                            Background Check Verified
                        </span>
                    </div>
                    <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md" style={{ boxShadow: "0 4px 20px rgba(242, 121, 188, 0.2)" }}>
                        <FileCheck size={24} className="text-[#F279BC]" />
                        <span className="font-medium text-[#3D1F2E]">
                            Professional References Available
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
