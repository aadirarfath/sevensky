"use client";

import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";

const serviceFrames = [
  {
    id: 1,
    title: "Web Development",
    video: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 2,
    title: "Social Media",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 3,
    title: "Performance Marketing",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 4,
    title: "Production",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 5,
    title: "Creative",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 6,
    title: "Branding",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 7,
    title: "Content Creation",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 8,
    title: "Strategy",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 9,
    title: "E-Commerce",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Product%20Video.mp4",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
];

export function ServicesSection() {
    return (
        <section
            id="services"
            className="py-24 md:py-36 border-t border-[#1E293B]"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Heading */}
                <h2
                    className="text-[15vw] md:text-[10vw] leading-none text-white mb-12 md:mb-16"
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
