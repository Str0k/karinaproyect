"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What are your rates?",
        answer:
            "Rates vary based on the type of service, number of children, and duration. For in-home babysitting, rates start at $20/hour for one child. Event childcare has custom pricing based on event size and duration. Contact me for a personalized quote!",
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

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section-padding gradient-section">
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
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
                        Frequently Asked{" "}
                        <span className="text-[#FF6B6B]">Questions</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
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
                            >
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div
                                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openIndex === index
                                            ? "bg-[#FF6B6B] text-white"
                                            : "bg-[#FF6B6B]/10 text-[#FF6B6B]"
                                            }`}
                                    >
                                        <HelpCircle size={18} className="sm:hidden" />
                                        <HelpCircle size={20} className="hidden sm:block" />
                                    </div>
                                    <span className="font-semibold text-[#2C3E50] text-sm sm:text-base">
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
                                            openIndex === index ? "text-[#FF6B6B]" : "text-gray-400"
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
                                        <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 bg-white rounded-b-2xl -mt-4 shadow-lg">
                                            <div className="pl-0 sm:pl-14">
                                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
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
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 mb-4">
                        Still have questions? I&apos;m happy to help!
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary inline-flex"
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
