"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

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



export function ContactSection() {
    const [submitted, setSubmitted] = useState(false);
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
        "w-full px-4 py-3 bg-white dark:bg-[#111111] border border-[#D8D8D0] dark:border-[#333333] rounded-lg text-[#111111] dark:text-white text-sm placeholder-[#B0B0A8] focus:outline-none focus:border-[#111111] dark:focus:border-white transition-colors duration-200";

    return (
        <section
            id="contact"
            className="py-24 md:py-36 border-t border-[#D8D8D0] dark:border-[#333333]"
        >
            <div className="max-w-2xl mx-auto px-6 md:px-0">
                {/* Heading */}
                <h2
                    className="text-[16vw] sm:text-[10vw] md:text-[88px] leading-none text-[#111111] dark:text-white mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    LET&apos;S TALK
                </h2>
                <p className="text-[#888880] dark:text-gray-400 mb-10">Tell us about your project.</p>

                {submitted ? (
                    <div className="py-16 text-center">
                        <p className="text-3xl text-[#111111] dark:text-white" style={{ fontFamily: "var(--font-display)" }}>
                            Message sent ✦
                        </p>
                        <p className="text-[#888880] dark:text-gray-400 mt-3">We&apos;ll be in touch within 24 hours.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                        <select
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className={`${inputClass} cursor-pointer`}
                        >
                            <option value="" disabled>
                                Select a Service
                            </option>
                            {services.map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                        <textarea
                            name="message"
                            placeholder="Tell us about your project..."
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className={`${inputClass} resize-none`}
                        />
                        <Button className="w-full mt-2" size="lg">
                            Send Message →
                        </Button>
                    </form>
                )}



                {/* Footer contact info */}
                <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-[#D8D8D0] dark:border-[#333333]">
                    <a
                        href="mailto:admin@sevenskymedia.com"
                        className="text-sm text-[#111111] dark:text-white md:text-[#888880] md:hover:text-[#111111] md:dark:hover:text-white transition-colors"
                        style={{ fontFamily: "var(--font-geist-mono)" }}
                    >
                        admin@sevenskymedia.com
                    </a>
                    <a
                        href="https://instagram.com/sevensky.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#111111] dark:text-white md:text-[#888880] md:hover:text-[#111111] md:dark:hover:text-white transition-colors"
                        style={{ fontFamily: "var(--font-geist-mono)" }}
                    >
                        @sevensky.ae
                    </a>
                </div>
            </div>
        </section>
    );
}
