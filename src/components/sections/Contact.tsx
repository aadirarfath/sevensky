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
        "w-full px-4 py-3 bg-[#0F172A] border border-[#1E293B] rounded-lg text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/10 transition-colors duration-200";

    return (
        <section
            id="contact"
            className="py-24 md:py-36 border-t border-[#1E293B]"
        >
            <div className="max-w-2xl mx-auto px-6 md:px-0">
                {/* Heading */}
                <h2
                    className="text-[16vw] sm:text-[10vw] md:text-[88px] leading-none text-white mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    LET&apos;S TALK
                </h2>
                <p className="text-white/60 mb-10">Tell us about your project.</p>

                {submitted ? (
                    <div className="py-16 text-center">
                        <p className="text-3xl text-white" style={{ fontFamily: "var(--font-display)" }}>
                            Message sent ✦
                        </p>
                        <p className="text-white/60 mt-3">We&apos;ll be in touch within 24 hours.</p>
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
                <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-[#1E293B]">
                    <a
                        href="mailto:admin@sevenskymedia.com"
                        className="text-sm text-white/60 hover:text-white transition-colors"
                        style={{ fontFamily: "var(--font-geist-mono)" }}
                    >
                        admin@sevenskymedia.com
                    </a>
                    <a
                        href="https://instagram.com/sevensky.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 hover:text-white transition-colors"
                        style={{ fontFamily: "var(--font-geist-mono)" }}
                    >
                        @sevensky.ae
                    </a>
                </div>
            </div>
        </section>
    );
}
