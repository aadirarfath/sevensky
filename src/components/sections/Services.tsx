"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    HoverSlider,
    HoverSliderImage,
    HoverSliderImageWrap,
    TextStaggerHover,
} from "@/components/ui/animated-slideshow";

const SLIDES = [
    {
        id: "slide-1",
        title: "Web Development",
        imageUrl: "/images/web_development.jpg",
        description: "Custom, high-performance websites built for speed, SEO, and conversion.",
        bullets: ["Next.js & React", "E-commerce", "CMS Integration", "Web App Development"],
    },
    {
        id: "slide-2",
        title: "Social Media",
        imageUrl: "/images/social_media.jpg",
        description: "Building brand presence and engagement across all key digital channels.",
        bullets: ["Content Strategy", "Community Management", "Influencer Marketing", "Account Growth"],
    },
    {
        id: "slide-3",
        title: "Performance Marketing",
        imageUrl: "/images/ads.jpg",
        description: "Data-driven campaigns designed to deliver measurable ROI and scale business.",
        bullets: ["Paid Search (SEM)", "Meta Ads", "Programmatic Ads", "Conversion Rate Optimisation"],
    },
    {
        id: "slide-4",
        title: "Production",
        imageUrl: "/images/video_editing.jpg",
        description: "High-end visual storytelling from concept to final edit.",
        bullets: ["Video Production", "Photography", "Post-Production", "Colour Grading"],
    },
    {
        id: "slide-5",
        title: "Creative",
        imageUrl: "/images/content_creation.jpg",
        description: "Bold ideas and visual languages that define market leaders.",
        bullets: ["Creative Direction", "Copywriting", "Content Creation", "Graphic Design"],
    },
    {
        id: "slide-6",
        title: "Branding",
        imageUrl: "/images/branding.jpg",
        description: "Positioning and identity systems that stand the test of time.",
        bullets: ["Visual Identity", "Brand Strategy", "Logo Design", "Brand Guidelines"],
    },
];

export function ServicesSection() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <section
            id="services"
            className="py-24 md:py-36 border-t border-[#D8D8D0] dark:border-[#333333]"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Heading */}
                <h2
                    className="text-[15vw] md:text-[10vw] leading-none text-[#111111] dark:text-white mb-12 md:mb-16"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    OUR SERVICES
                </h2>
            </div>

            {/* Hover Slider */}
            <HoverSlider className="px-6 md:px-12 max-w-7xl mx-auto">
                <div className="flex flex-wrap items-start justify-between gap-8 md:gap-12">
                    {/* Service List with Accordion */}
                    <div className="flex flex-col flex-1 min-w-[260px] divide-y divide-[#D8D8D0] dark:divide-[#333333]">
                        {SLIDES.map((slide, index) => (
                            <div key={slide.id} className="py-6 md:py-8">
                                <button
                                    className="w-full text-left focus:outline-none group"
                                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <TextStaggerHover
                                        index={index}
                                        text={slide.title}
                                        className="text-[8vw] sm:text-[5vw] md:text-[3.5vw] lg:text-[2.8vw] font-bold uppercase tracking-tighter text-[#111111] dark:text-white leading-tight"
                                        style={{ fontFamily: "var(--font-display)" }}
                                    />
                                </button>

                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-6 pb-2 max-w-xl">
                                                <p className="text-lg md:text-xl text-[#111111] dark:text-white mb-6 leading-relaxed">
                                                    {slide.description}
                                                </p>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                                                    {slide.bullets.map((bullet) => (
                                                        <div key={bullet} className="flex items-center gap-3">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[#111111] dark:bg-white opacity-40" />
                                                            <span className="text-sm md:text-base text-[#888880] dark:text-gray-400 uppercase tracking-widest font-medium">
                                                                {bullet}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Image Panel — Sticky and tall */}
                    <div className="hidden lg:block w-[400px] xl:w-[480px] shrink-0 sticky top-32 self-start mt-8">
                        <HoverSliderImageWrap className="rounded-2xl overflow-hidden h-[70vh] shadow-xl">
                            {SLIDES.map((slide, index) => (
                                <div key={slide.id}>
                                    <HoverSliderImage
                                        index={index}
                                        imageUrl={slide.imageUrl}
                                        src={slide.imageUrl}
                                        alt={slide.title}
                                        className="size-full object-cover"
                                        loading="eager"
                                        decoding="async"
                                    />
                                </div>
                            ))}
                        </HoverSliderImageWrap>
                    </div>
                </div>
            </HoverSlider>
        </section>
    );
}
