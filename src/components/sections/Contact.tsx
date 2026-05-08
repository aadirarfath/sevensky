"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const services = [
    "Web Design",
    "SEO",
    "Branding",
    "Photography",
    "Social Media",
    "Strategy",
    "Ads",
    "Content Creation",
    "Email Marketing",
];

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer: "Our turnaround time is designed for business agility. Most projects, from boutique branding to high-performance web development, are delivered within 1 to 3 weeks. We prioritize precision without compromising on the rapid execution required in today's digital landscape."
    },
    {
        question: "Do you work with international clients?",
        answer: "Absolutely. While we are headquartered in the UAE, our digital-first approach allows us to partner with brands globally. We have successfully executed projects for clients in the UAE, India, and several other countries across Europe and Asia, ensuring seamless communication regardless of time zones."
    },
    {
        question: "How do you measure campaign success?",
        answer: "Success is measured through transparency and data. We don't just look at 'vanity metrics'; we focus on KPIs that impact your bottom line—leads generated, conversion rate optimization (CRO), and overall return on ad spend (ROAS). Every client receives access to detailed reporting."
    },
    {
        question: "Do you offer ongoing support after launch?",
        answer: "Yes, we believe in long-term partnerships. We provide dedicated post-launch support and monthly growth retainers. The level of support is customized based on the specific package you apply for, ranging from basic technical maintenance to full-scale continuous marketing management."
    },
    {
        question: "What industries do you specialize in?",
        answer: "Our creative frameworks are industry-agnostic, yet we possess deep expertise in Luxury Real Estate, E-commerce, Tech Startups, and Hospitality. We adapt our strategy to the specific nuances of your market to ensure your brand doesn't just blend in, but leads."
    },
    {
        question: "How do we get started with SevenSky?",
        answer: "The process begins with a discovery call where we audit your current digital presence. Following this, we provide a tailored strategy and a transparent quote. Once the alignment is confirmed, we move into our rapid 1-3 week execution phase."
    }
];

const WHATSAPP_URL = "https://wa.me/971565805774?text=Hi%20SevenSky!%20I%20have%20some%20further%20questions%20regarding%20your%20services.";

export function ContactSection() {
    const [submitted, setSubmitted] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const inputClass =
        "w-full px-4 py-3 bg-[#f8fafc] border border-[#1a4473]/10 rounded-lg text-[#1a4473] text-sm placeholder-[#1a4473]/40 focus:outline-none focus:border-[#2d6fbc]/40 focus:ring-1 focus:ring-[#2d6fbc]/10 transition-colors duration-200";

    return (
        <section
            id="contact"
            className="min-h-[100dvh] flex flex-col justify-center py-12 md:py-20 border-t border-[#1a4473]/10 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                
                {/* Header */}
                <div className="mb-16">
                    <h2
                        className="text-[16vw] sm:text-[10vw] md:text-[8vw] leading-none text-[#1a4473] mb-4"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        LET&apos;S TALK
                    </h2>
                    <p className="text-[#1a4473]/60 text-lg">Tell us about your project or explore our FAQs.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    
                    {/* Left: Contact Form */}
                    <div>
                        {submitted ? (
                            <div className="py-16 text-center border border-[#1a4473]/10 rounded-2xl bg-[#f8fafc]">
                                <p className="text-3xl text-[#1a4473]" style={{ fontFamily: "var(--font-display)" }}>
                                    Message sent ✦
                                </p>
                                <p className="text-[#1a4473]/60 mt-3">We&apos;ll be in touch within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Your Name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={inputClass}
                                    />
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Email Address"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={inputClass}
                                    />
                                </div>
                                <select
                                    name="service"
                                    required
                                    value={formData.service}
                                    onChange={handleChange}
                                    className={`${inputClass} cursor-pointer [&>option]:text-black`}
                                >
                                    <option value="" disabled className="text-gray-500">
                                        Select a Service
                                    </option>
                                    {services.map((s) => (
                                        <option key={s} value={s} className="text-black">
                                            {s}
                                        </option>
                                    ))}
                                </select>
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your project..."
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`${inputClass} resize-none`}
                                />
                                <Button variant="primary" className="w-full mt-2" size="lg">
                                    Send Message →
                                </Button>
                            </form>
                        )}

                        <div
                            onClick={() => window.open(WHATSAPP_URL, '_blank')}
                            className="mt-8 group cursor-pointer p-6 sm:p-8 rounded-3xl bg-[#f8fafc] border border-[#1a4473]/10 transition-all duration-300 hover:border-[#1a4473]/30 hover:-translate-y-1"
                        >
                            <p
                                className="text-xl sm:text-2xl text-[#1a4473] mb-4 leading-tight"
                                style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
                            >
                                Have further questions? Our team is ready to help you scale.
                            </p>
                            <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest font-bold text-[#1a4473] border-b-2 border-[#1a4473] pb-1 group-hover:gap-4 transition-all">
                                Chat on WhatsApp <span>→</span>
                            </span>
                        </div>
                    </div>

                    {/* Right: FAQ Accordion */}
                    <div className="divide-y divide-[#1a4473]/10 border-t border-[#1a4473]/10 lg:border-t-0">
                        {faqs.map((faq, index) => (
                            <div key={index} className="py-6">
                                <button
                                    className="w-full flex items-center justify-between text-left focus:outline-none group"
                                    onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                >
                                    <span className="text-lg sm:text-xl font-medium text-[#1a4473] transition-colors group-hover:text-[#1a4473]/60 pr-8">
                                        {faq.question}
                                    </span>
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-[#1a4473] shrink-0" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-[#1a4473]/30 shrink-0" />
                                    )}
                                </button>

                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4">
                                                <p className="text-sm sm:text-base text-[#1a4473]/70 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Footer contact info */}
                <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-[#1a4473]/10">
                    <a
                        href="mailto:admin@sevenskymedia.com"
                        className="text-sm text-[#1a4473]/60 hover:text-[#2d6fbc] transition-colors"
                        style={{ fontFamily: "var(--font-geist-mono)" }}
                    >
                        admin@sevenskymedia.com
                    </a>
                    <a
                        href="https://instagram.com/sevensky.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#1a4473]/60 hover:text-[#2d6fbc] transition-colors"
                        style={{ fontFamily: "var(--font-geist-mono)" }}
                    >
                        @sevensky.ae
                    </a>
                </div>
            </div>
        </section>
    );
}
