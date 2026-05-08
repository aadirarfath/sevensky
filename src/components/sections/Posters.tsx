"use client";

import { useRef } from "react";

const posters = [
    "/insta/1.png",
    "/insta/2.png",
    "/insta/3.png",
    "/insta/4.png",
    "/insta/7.png",
    "/insta/19.jpeg",
    "/insta/20.jpeg",
    "/insta/21.jpeg",
];

// Duplicate the array to create a seamless infinite loop
const duplicatedPosters = [...posters, ...posters];

export function PostersSection() {
    return (
        <section
            id="posters"
            className="min-h-[100dvh] flex flex-col justify-center py-12 md:py-20 border-t border-white/10 bg-[#2d6fbc] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-12">
                <h2
                    className="text-[12vw] md:text-[8vw] leading-none text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    FEATURED WORK
                </h2>
                <p className="text-white/60 text-lg mt-2">
                    A collection of our recent visual campaigns.
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full flex overflow-hidden group">
                {/* 
                    The inner flex container holds all duplicated posters.
                    It uses the pre-defined .animate-ticker class from globals.css.
                    Hovering over the group pauses the animation.
                */}
                <div className="flex w-max animate-ticker group-hover:[animation-play-state:paused]">
                    {duplicatedPosters.map((src, idx) => (
                        <div
                            key={idx}
                            className="relative w-[60vw] sm:w-[40vw] md:w-[25vw] lg:w-[20vw] shrink-0 px-2 sm:px-4 transition-transform duration-500 hover:scale-105 hover:z-10"
                        >
                            {/* 
                                Aspect ratio logic: posters are usually vertical (e.g., 4:5 or 9:16). 
                                We enforce a consistent height or aspect ratio container.
                            */}
                            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10">
                                <img
                                    src={src}
                                    alt={`Poster ${idx}`}
                                    className="w-full h-full object-cover"
                                />
                                {/* Subtle glare/overlay effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Edge Gradients for smooth fade in/out */}
                <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#2d6fbc] to-transparent pointer-events-none z-10" />
                <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#2d6fbc] to-transparent pointer-events-none z-10" />
            </div>
        </section>
    );
}
