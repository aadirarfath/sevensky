"use client";

import { Target, Zap, Users } from "lucide-react";

const principles = [
    {
        icon: Target,
        title: "Results-Driven",
        description: "Every strategy is tied to measurable outcomes.",
    },
    {
        icon: Zap,
        title: "Fast Execution",
        description: "We move quickly without sacrificing quality.",
    },
    {
        icon: Users,
        title: "Client-Focused",
        description: "Your success is the only metric that matters.",
    },
];

export function AboutSection() {
    return (
        <section
            id="about"
            className="py-24 md:py-36 border-t border-[#D8D8D0] dark:border-[#333333]"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
                    {/* Left — 60% */}
                    <div className="md:col-span-3">
                        <p
                            className="text-xs tracking-widest text-[#888880] dark:text-gray-400 uppercase mb-4"
                            style={{ fontFamily: "var(--font-geist-mono)" }}
                        >
                            About Us
                        </p>

                        <h2
                            className="text-4xl md:text-6xl text-[#111111] dark:text-white leading-tight mb-8"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Built for brands that refuse to blend in.
                        </h2>

                        <p className="text-[#888880] dark:text-gray-300 leading-relaxed mb-4 max-w-lg">
                            SevenSky is a full-service digital agency rooted in strategy and obsessed with craft. We work with ambitious brands to create work that's impossible to ignore.
                        </p>
                        <p className="text-[#888880] dark:text-gray-300 leading-relaxed max-w-lg">
                            From startups finding their voice to established companies reaching new heights — we bring clarity, creativity, and conviction to everything we do.
                        </p>

                        {/* Stats */}
                        <div className="mt-12 grid grid-cols-2 gap-4">
                            <div className="border border-[#D8D8D0] dark:border-[#333333] bg-white dark:bg-[#111111] rounded-xl p-6">
                                <p
                                    className="text-5xl md:text-6xl text-[#111111] dark:text-white"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    50+
                                </p>
                                <p className="text-sm text-[#888880] dark:text-gray-400 mt-1">Projects Delivered</p>
                            </div>
                            <div className="border border-[#D8D8D0] dark:border-[#333333] bg-white dark:bg-[#111111] rounded-xl p-6">
                                <p
                                    className="text-5xl md:text-6xl text-[#111111] dark:text-white"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    5★
                                </p>
                                <p className="text-sm text-[#888880] dark:text-gray-400 mt-1">Average Client Rating</p>
                            </div>
                        </div>
                    </div>

                    {/* Right — 40% */}
                    <div className="md:col-span-2 flex flex-col justify-center gap-6">
                        {principles.map(({ icon: Icon, title, description }) => (
                            <div
                                key={title}
                                className="flex items-start gap-5 p-6 border border-[#D8D8D0] dark:border-[#333333] bg-white dark:bg-[#111111] rounded-xl hover:border-[#111111] dark:hover:border-white transition-colors duration-200"
                            >
                                <div className="shrink-0 w-10 h-10 rounded-full border border-[#D8D8D0] dark:border-[#333333] flex items-center justify-center">
                                    <Icon className="w-4 h-4 text-[#111111] dark:text-white" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p
                                        className="text-lg text-[#111111] dark:text-white"
                                        style={{ fontFamily: "var(--font-display)", letterSpacing: "0.04em" }}
                                    >
                                        {title}
                                    </p>
                                    <p className="text-sm text-[#888880] dark:text-gray-400 mt-0.5">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
