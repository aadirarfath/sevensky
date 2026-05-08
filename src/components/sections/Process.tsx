"use client";

import { useEffect, useRef } from "react";

const steps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description:
            "We start by understanding your brand, audience, and goals. Deep research forms the bedrock of every decision we make.",
    },
    {
        number: "02",
        title: "Creative Direction",
        description:
            "Ideas become visual systems. We define the tone, aesthetic, and creative language that will differentiate your brand.",
    },
    {
        number: "03",
        title: "Build & Execute",
        description:
            "Design meets development. We build with precision — every pixel, every word, every campaign is crafted to convert.",
    },
    {
        number: "04",
        title: "Measure & Optimise",
        description:
            "We track, analyse, and continuously refine. Data-driven decisions ensure your investment keeps delivering returns.",
    },
];

export function ProcessSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const stepEls = entry.target.querySelectorAll<HTMLElement>(".step-item");
                        stepEls.forEach((el, i) => {
                            el.style.animationDelay = `${i * 0.12}s`;
                            el.classList.add("animate-slide-left");
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="process"
            ref={sectionRef}
            className="min-h-[100dvh] flex flex-col justify-center py-12 md:py-20 border-t border-white/10 bg-[#2d6fbc]"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
                    
                    {/* Left Column: Text & Steps */}
                    <div>
                        <div className="mb-4 flex items-center gap-4">
                            <h2
                                className="text-[12vw] md:text-[8vw] lg:text-[7vw] leading-none text-white"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                HOW WE WORK
                            </h2>
                        </div>

                        {/* Steps */}
                        <div className="mt-12 divide-y divide-white/10">
                            {steps.map((step) => (
                                <div
                                    key={step.number}
                                    className="step-item group flex items-start gap-6 py-8"
                                >
                                    {/* Number */}
                                    <span
                                        className="text-4xl md:text-5xl leading-none text-white transition-colors duration-500 select-none shrink-0"
                                        style={{ fontFamily: "var(--font-display)" }}
                                    >
                                        {step.number}
                                    </span>

                                    {/* Text */}
                                    <div className="flex-1">
                                        <h3
                                            className="text-2xl md:text-3xl text-white mb-2"
                                            style={{ fontFamily: "var(--font-display)" }}
                                        >
                                            {step.title}
                                        </h3>
                                        <p className="text-white/80 text-sm md:text-base leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative h-[400px] md:h-[600px] lg:h-[700px] lg:sticky lg:top-36 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img 
                            src="/images/catmascot.jpeg" 
                            alt="SevenSky Mascot"
                            className="w-full h-full object-cover"
                        />
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2d6fbc]/40 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}
