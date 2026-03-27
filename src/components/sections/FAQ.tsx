"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

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

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 md:py-36 border-t border-[#D8D8D0] dark:border-[#333333]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">

                    {/* Left Column: Heading & CTA */}
                    <div className="lg:col-span-5">
                        <h2 className="text-[12vw] md:text-[8vw] leading-none text-[#111111] dark:text-white mb-12" style={{ fontFamily: "var(--font-display)" }}>
                            FAQs
                        </h2>

                        <div
                            onClick={() => window.open(WHATSAPP_URL, '_blank')}
                            className="group cursor-pointer p-8 rounded-3xl bg-white dark:bg-white/5 border border-[#D8D8D0] dark:border-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                        >
                            <p className="text-2xl md:text-3xl text-[#111111] dark:text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                                Have further questions? Our team is ready to help you scale.
                            </p>
                            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-[#111111] dark:text-white border-b-2 border-[#111111] dark:border-white pb-1 group-hover:gap-4 transition-all">
                                Chat on WhatsApp <span>→</span>
                            </span>
                        </div>
                    </div>

                    {/* Right Column: FAQ Accordion */}
                    <div className="lg:col-span-7 divide-y divide-[#D8D8D0] dark:divide-[#333333]">
                        {faqs.map((faq, index) => (
                            <div key={index} className="py-6 md:py-8">
                                <button
                                    className="w-full flex items-center justify-between text-left focus:outline-none group"
                                    onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                >
                                    <span className="text-xl md:text-2xl font-medium text-[#111111] dark:text-white transition-colors group-hover:text-[#888880]">
                                        {faq.question}
                                    </span>
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-[#111111] dark:text-white shrink-0 ml-4" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-[#888880] shrink-0 ml-4" />
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
                                            <div className="pt-6">
                                                <p className="text-base md:text-lg text-[#888880] dark:text-gray-400 leading-relaxed">
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
            </div>
        </section>
    );
}
