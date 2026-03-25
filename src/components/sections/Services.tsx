"use client";

import { useEffect, useRef } from "react";

const services = [
    { label: "WEB DESIGN", rotate: -6 },
    { label: "SEO", rotate: 4 },
    { label: "PHOTOGRAPHY", rotate: -3 },
    { label: "SOCIAL MEDIA", rotate: 7 },
    { label: "STRATEGY", rotate: -8 },
    { label: "BRANDING", rotate: 5 },
    { label: "ADS", rotate: -4 },
    { label: "CONTENT CREATION", rotate: 3 },
    { label: "EMAIL MARKETING", rotate: 9 },
];

export function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const pills = entry.target.querySelectorAll<HTMLElement>(".pill-item");
                        pills.forEach((pill, i) => {
                            pill.style.animationDelay = `${i * 0.07}s`;
                            pill.classList.add("animate-pill-in");
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="services"
            ref={sectionRef}
            className="py-24 md:py-36 bg-[#EFEFEA] border-t border-[#D8D8D0]"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Heading */}
                <h2
                    className="text-[15vw] md:text-[10vw] leading-none text-[#111111] mb-12 md:mb-16"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    OUR SERVICES
                </h2>

                {/* Pill scatter */}
                <div className="flex flex-wrap gap-4 md:gap-5">
                    {services.map((s, i) => (
                        <div
                            key={s.label}
                            className="pill-item group"
                            style={{ transform: `rotate(${s.rotate}deg)` }}
                        >
                            <span
                                className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 border-2 border-[#111111] rounded-full bg-white text-[#111111] font-bold text-sm md:text-base tracking-wide select-none cursor-default transition-all duration-200 ease-out group-hover:shadow-[4px_4px_0px_#111111] group-hover:-translate-y-1 group-hover:scale-[1.03]"
                                style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}
                            >
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Two-column text block */}
                <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 border-t border-[#D8D8D0] pt-10">
                    <div>
                        <p
                            className="text-4xl md:text-5xl text-[#111111] leading-tight"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            8 Services.
                            <br />
                            One Partner.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-[#888880] text-base leading-relaxed max-w-md">
                            SevenSky is your end-to-end digital partner. We don't just build assets — we build momentum. From the first touchpoint to sustained growth, every service connects into one cohesive strategy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
