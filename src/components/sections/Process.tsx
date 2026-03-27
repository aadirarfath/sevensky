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
            className="py-24 md:py-36 border-t border-[#D8D8D0] dark:border-[#333333]"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Heading */}
                <div className="mb-4 flex items-center gap-4">
                    <h2
                        className="text-[12vw] md:text-[8vw] leading-none text-[#111111] dark:text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        HOW WE WORK
                    </h2>
                </div>

                {/* Steps */}
                <div className="mt-12 md:mt-16 divide-y divide-[#D8D8D0] dark:divide-[#333333]">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="step-item group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 md:py-10"
                        >
                            {/* Number */}
                            <span
                                className="text-[80px] md:text-[120px] leading-none text-[#DEDED8] dark:text-[#222222] group-hover:text-[#111111] dark:group-hover:text-white transition-colors duration-300 select-none shrink-0 w-auto md:w-48 text-right hidden md:block"
                                style={{ fontFamily: "var(--font-display)" }}
                                aria-hidden="true"
                            >
                                {step.number}
                            </span>

                            {/* Mobile number — always lit */}
                            <span
                                className="text-5xl text-[#111111] dark:text-white select-none md:hidden"
                                style={{ fontFamily: "var(--font-display)" }}
                                aria-hidden="true"
                            >
                                {step.number}
                            </span>

                            {/* Text */}
                            <div className="flex-1">
                                <h3
                                    className="text-3xl md:text-4xl text-[#111111] dark:text-white mb-3"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    {step.title}
                                </h3>
                                <p className="text-[#888880] dark:text-gray-300 leading-relaxed max-w-lg">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
