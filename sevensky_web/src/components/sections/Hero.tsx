"use client";

import { useEffect, useRef } from "react";

const tickerItems = [
    "WEB DESIGN", "SEO", "BRANDING", "PHOTOGRAPHY", "SOCIAL MEDIA",
    "STRATEGY", "ADS", "CONTENT CREATION", "EMAIL MARKETING",
];

export function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Trigger animations after mount
        const el = sectionRef.current;
        if (el) el.classList.add("loaded");
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#EFEFEA]"
        >
            {/* Dot grid texture */}
            <div
                className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none"
                aria-hidden="true"
            />

            {/* Top-left label */}
            <div className="absolute top-24 left-6 md:left-12">
                <p
                    className="text-xs text-[#888880] tracking-widest uppercase animate-fade-up animate-delay-100"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                    Digital Agency — Est. 2024
                </p>
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16">
                {/* Headline */}
                <h1
                    className="text-[18vw] sm:text-[14vw] md:text-[11vw] leading-[0.88] text-[#111111] select-none"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "0.01em" }}
                >
                    <span className="block animate-fade-up animate-delay-200">WE BUILD</span>
                    <span className="block animate-fade-up animate-delay-300">BRANDS THAT</span>
                    <span className="block animate-fade-up animate-delay-400">MOVE PEOPLE</span>
                </h1>

                {/* Subtitle */}
                <p className="mt-8 text-base md:text-lg text-[#888880] tracking-widest uppercase animate-fade-up animate-delay-500">
                    Strategy · Design · Digital Marketing · Web
                </p>

                {/* Bottom row */}
                <div className="mt-16 md:mt-24 flex items-end justify-between">
                    <div /> {/* spacer */}
                    <div className="animate-fade-up animate-delay-600">
                        <a
                            href="#services"
                            className="inline-flex items-center gap-2 border border-[#111111] text-[#111111] text-sm px-6 py-3 rounded-full hover:bg-[#111111] hover:text-white transition-all duration-200"
                        >
                            See Our Work ↓
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom ticker */}
            <div className="absolute bottom-8 left-0 right-0 overflow-hidden">
                <div className="flex animate-ticker whitespace-nowrap select-none">
                    {[...tickerItems, ...tickerItems].map((item, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center px-6 text-xs tracking-widest text-[#888880] shrink-0"
                            style={{ fontFamily: "var(--font-geist-mono)" }}
                        >
                            {item}
                            <span className="ml-6 text-[#C8C8C0]">·</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
