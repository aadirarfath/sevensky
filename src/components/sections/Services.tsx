"use client";

import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";

const serviceFrames = [
  {
    id: 1,
    title: "Web Development",
    video: "/images/web_development.jpg",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 2,
    title: "Social Media",
    video: "/images/social_media.jpg",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 3,
    title: "Performance Marketing",
    video: "/images/ads.jpg",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 4,
    title: "Production",
    video: "/images/video_editing.jpg",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 5,
    title: "Creative",
    video: "/images/photography.jpg",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 6,
    title: "Branding",
    video: "/images/branding.jpg",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 7,
    title: "Content Creation",
    video: "/images/content_creation.jpg",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 8,
    title: "Strategy",
    video: "/images/seo.jpg",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 9,
    title: "E-Commerce",
    video: "/images/email_marketing.jpg",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
];

export function ServicesSection() {
    return (
        <section
            id="services"
            className="py-24 md:py-36 border-t border-[#21548e] bg-white"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Heading */}
                <h2
                    className="text-[15vw] md:text-[10vw] leading-none text-[#1a4473] mb-12 md:mb-16"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    OUR SERVICES
                </h2>
            </div>

            {/* Dynamic Frame Layout */}
            <div className="w-full h-[60vh] md:h-[80vh] max-w-[1600px] mx-auto px-4 md:px-8">
                <DynamicFrameLayout 
                    frames={serviceFrames} 
                    className="w-full h-full" 
                    hoverSize={6}
                    gapSize={8}
                />
            </div>
        </section>
    );
}
