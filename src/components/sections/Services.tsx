"use client";

import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";

const serviceFrames = [
  {
    id: 1,
    title: "Web Design & Development",
    video: "/images/web_development.jpg",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 2,
    title: "Social Media Management",
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
    title: "Influencer & Creator Marketing",
    video: "/images/video_editing.jpg",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 5,
    title: "Videography & Reels",
    video: "/images/photography.jpg",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 6,
    title: "Brand Identity & Logo Design",
    video: "/images/branding.jpg",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 7,
    title: "Content Creation & Photography",
    video: "/images/content_creation.jpg",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 8,
    title: "SEO & Search Marketing",
    video: "/images/seo.jpg",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 9,
    title: "Brand Launch Campaigns",
    video: "/images/email_marketing.jpg",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 10,
    title: "Graphic Design",
    video: "/images/graphic_design.jpg",
    defaultPos: { x: 0, y: 12, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 11,
    title: "Print & Packaging Design",
    video: "/images/packaging_design.jpg",
    defaultPos: { x: 4, y: 12, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 12,
    title: "Reputation Management",
    video: "/images/reputation_management.jpg",
    defaultPos: { x: 8, y: 12, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="min-h-[100dvh] flex flex-col justify-center py-12 md:py-20 border-t border-[#1a4473]/10 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Heading */}
        <h2
          className="text-[15vw] md:text-[10vw] leading-none text-[#1a4473] mb-8 md:mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          OUR SERVICES
        </h2>
      </div>

      {/* Dynamic Frame Layout */}
      <div className="w-full h-[70vh] md:h-[85vh] max-w-[1600px] mx-auto px-4 md:px-8">
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
