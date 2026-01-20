"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
    Send,
    Phone,
    Mail,
    Clock,
    Calendar,
    CheckCircle,
    MessageCircle,
} from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    eventDate: z.string().optional(),
    serviceType: z.string().min(1, "Please select a service type"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const serviceOptions = [
    "Private In-Home Babysitting",
    "Evening & Overnight Care",
    "Event & Party Childcare",
    "Spanish Language Exposure",
    "Other / Not Sure",
];

export default function BookingForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate form submission
        console.log("Form data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        reset();
    };

    return (
        <section id="contact" className="section-padding bg-[#FFFBF0]">
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
                        Get Started
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
                        Book Your <span className="text-[#FF6B6B]">Consultation</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Ready to experience stress-free childcare? Let&apos;s discuss your
                        needs and find the perfect solution for your family.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-[#4ECDC4]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle size={48} className="text-[#4ECDC4]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">
                                        Thank You!
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Your message has been received. I&apos;ll get back to you
                                        within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="btn-secondary"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    {/* Name & Email Row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="form-label">
                                                Full Name *
                                            </label>
                                            <input
                                                {...register("name")}
                                                id="name"
                                                type="text"
                                                placeholder="Your name"
                                                className={`form-input ${errors.name ? "border-red-400" : ""
                                                    }`}
                                            />
                                            {errors.name && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.name.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="form-label">
                                                Email Address *
                                            </label>
                                            <input
                                                {...register("email")}
                                                id="email"
                                                type="email"
                                                placeholder="your@email.com"
                                                className={`form-input ${errors.email ? "border-red-400" : ""
                                                    }`}
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Phone & Date Row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="form-label">
                                                Phone Number *
                                            </label>
                                            <input
                                                {...register("phone")}
                                                id="phone"
                                                type="tel"
                                                placeholder="(123) 456-7890"
                                                className={`form-input ${errors.phone ? "border-red-400" : ""
                                                    }`}
                                            />
                                            {errors.phone && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.phone.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="eventDate" className="form-label">
                                                Event/Service Date
                                            </label>
                                            <input
                                                {...register("eventDate")}
                                                id="eventDate"
                                                type="date"
                                                className="form-input"
                                            />
                                        </div>
                                    </div>

                                    {/* Service Type */}
                                    <div>
                                        <label htmlFor="serviceType" className="form-label">
                                            Type of Service *
                                        </label>
                                        <select
                                            {...register("serviceType")}
                                            id="serviceType"
                                            className={`form-input ${errors.serviceType ? "border-red-400" : ""
                                                }`}
                                        >
                                            <option value="">Select a service</option>
                                            {serviceOptions.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.serviceType && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.serviceType.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="form-label">
                                            Your Message *
                                        </label>
                                        <textarea
                                            {...register("message")}
                                            id="message"
                                            rows={4}
                                            placeholder="Tell me about your childcare needs, the ages of your children, and any special requirements..."
                                            className={`form-input resize-none ${errors.message ? "border-red-400" : ""
                                                }`}
                                        />
                                        {errors.message && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.message.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary w-full py-4 text-lg disabled:opacity-70"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg
                                                    className="animate-spin h-5 w-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                        fill="none"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    />
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center gap-2">
                                                <Send size={20} />
                                                Request a Quote
                                            </span>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Contact Info Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Quick Contact Card */}
                        <div className="bg-gradient-to-br from-[#FF6B6B] to-[#FF9A8B] rounded-3xl p-8 text-white">
                            <h3 className="text-xl font-bold mb-6">Quick Contact</h3>
                            <div className="space-y-4">
                                <a
                                    href="tel:+19132069322"
                                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                                >
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-white/80">Call or Text</p>
                                        <p className="font-semibold">(913) 206-9322</p>
                                    </div>
                                </a>
                                <a
                                    href="mailto:hello@karicare.com"
                                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                                >
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-white/80">Email Me</p>
                                        <p className="font-semibold">hello@karicare.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Response Time Card */}
                        <div className="bg-white rounded-3xl p-6 shadow-md">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-[#4ECDC4]/20 rounded-full flex items-center justify-center">
                                    <Clock size={24} className="text-[#4ECDC4]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#2C3E50]">Quick Response</h4>
                                    <p className="text-sm text-gray-600">
                                        Usually within 2-4 hours
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">
                                I respond to all inquiries promptly. For urgent requests, please
                                call or text directly.
                            </p>
                        </div>

                        {/* Availability Card */}
                        <div className="bg-white rounded-3xl p-6 shadow-md">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-[#FF6B6B]/20 rounded-full flex items-center justify-center">
                                    <Calendar size={24} className="text-[#FF6B6B]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#2C3E50]">Availability</h4>
                                    <p className="text-sm text-gray-600">Flexible scheduling</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                                    Weekdays: Flexible hours
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                                    Weekends: Available
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                                    Evenings & Overnights
                                </li>
                            </ul>
                        </div>

                        {/* Text CTA */}
                        <motion.a
                            href="sms:+19132069322"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-semibold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
                        >
                            <MessageCircle size={24} />
                            Text Me Directly
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
