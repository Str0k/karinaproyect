"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What are your rates?",
        answer:
            "Rates vary based on the type of service, number of children, and duration. Please contact me via call or message for a personalized quote tailored to your needs!",
    },
    {
        question: "What is your cancellation policy?",
        answer:
            "I understand plans can change! Cancellations with 24+ hours notice receive a full refund. Cancellations within 24 hours are subject to a 50% fee. No-shows are charged the full amount. For recurring bookings, I'm happy to discuss flexible arrangements.",
    },
    {
        question: "What should I provide for the babysitter?",
        answer:
            "Please have ready: emergency contact information, any dietary restrictions or allergies, medication instructions (if applicable), house rules, Wi-Fi password, and age-appropriate snacks. I'll bring engaging activities and games!",
    },
    {
        question: "Are you CPR and First Aid certified?",
        answer:
            "Yes! I maintain current certifications in both CPR and First Aid through the American Red Cross. Safety is my top priority, and I'm prepared to handle any emergency situation.",
    },
    {
        question: "How do you handle children with special needs?",
        answer:
            "I have experience working with children who have various needs and am happy to discuss accommodations. Please share any specific requirements during our initial consultation so I can prepare appropriately.",
    },
    {
        question: "What areas do you serve?",
        answer:
            "I proudly serve Kansas City and surrounding areas including Overland Park, Olathe, Lenexa, Shawnee, and more. For events outside this area, please contact me to discuss availability and any travel considerations.",
    },
    {
        question: "How far in advance should I book?",
        answer:
            "For regular babysitting, 48-72 hours notice is ideal. For events and parties, I recommend booking 2-4 weeks in advance, especially during busy seasons (holidays, wedding season). Last-minute requests are considered based on availability.",
    },
    {
        question: "Can you provide references?",
        answer:
            "Absolutely! I'm happy to provide references from families I've worked with. Just ask during our consultation, and I'll connect you with parents who can share their experiences.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const decorY1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const decorY2 = useTransform(scrollYProgress, [0, 1], [0, 70]);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section ref={sectionRef} className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, #D1F8F0 0%, #EBFFFF 50%, #FAFFFE 100%)" }}>
            {/* Parallax Decorative Elements */}
            <motion.div
                style={{ y: decorY1 }}
                className="absolute top-24 -left-20 w-48 h-48 bg-gradient-to-br from-[#84E2C2]/20 to-[#B8F1E1]/15 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
                style={{ y: decorY2 }}
                className="absolute bottom-24 -right-20 w-56 h-56 bg-gradient-to-br from-[#9EE9D1]/15 to-[#D1F8F0]/20 rounded-full blur-3xl pointer-events-none"
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
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A3A] mb-4">
                        Frequently Asked{" "}
                        <span className="text-[#2D9A78]">Questions</span>
                    </h2>
                    <p className="text-[#4A6D6D] text-lg">
                        Have questions? I&apos;ve got answers. Find everything you need to
                        know about my childcare services.
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="mb-4"
                        >
                            <motion.button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full flex items-center justify-between p-4 sm:p-6 rounded-2xl text-left transition-all ${openIndex === index
                                    ? "bg-white shadow-lg"
                                    : "bg-white/50 hover:bg-white hover:shadow-md"
                                    }`}
                                style={openIndex === index ? { boxShadow: "0 10px 30px rgba(132, 226, 194, 0.2)" } : {}}
                            >
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div
                                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openIndex === index
                                            ? "bg-[#2D9A78] text-white"
                                            : "bg-[#84E2C2]/20 text-[#2D9A78]"
                                            }`}
                                    >
                                        <HelpCircle size={18} className="sm:hidden" />
                                        <HelpCircle size={20} className="hidden sm:block" />
                                    </div>
                                    <span className="font-semibold text-[#1A3A3A] text-sm sm:text-base">
                                        {faq.question}
                                    </span>
                                </div>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="shrink-0 ml-4"
                                >
                                    <ChevronDown
                                        size={24}
                                        className={
                                            openIndex === index ? "text-[#2D9A78]" : "text-[#9EE9D1]"
                                        }
                                    />
                                </motion.div>
                            </motion.button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 bg-white rounded-b-2xl -mt-4 shadow-lg" style={{ boxShadow: "0 10px 30px rgba(132, 226, 194, 0.15)" }}>
                                            <div className="pl-0 sm:pl-14">
                                                <p className="text-[#4A6D6D] leading-relaxed text-sm sm:text-base">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Still Have Questions */}
                {/* Still Have Questions - Premium CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-20 max-w-4xl mx-auto"
                >
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A3A3A] to-[#2D5A5A] p-8 md:p-12 shadow-2xl text-center">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                            <div className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] bg-[#84E2C2]/10 rounded-full blur-[100px]" />
                            <div className="absolute bottom-[-50%] right-[-20%] w-[500px] h-[500px] bg-[#9EE9D1]/10 rounded-full blur-[100px]" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                                <HelpCircle size={32} className="text-[#84E2C2]" />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Still have questions?
                            </h3>

                            <p className="text-gray-200 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                                I understand that choosing childcare is a big decision. I'm here to answer any other questions you might have!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-[#84E2C2] text-[#1A3A3A] font-bold rounded-full hover:bg-[#72D0B2] transition-colors shadow-lg shadow-[#84E2C2]/20"
                                >
                                    Message Me
                                </motion.a>

                                <motion.a
                                    href="tel:+19132069322"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
                                >
                                    Call Now
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
