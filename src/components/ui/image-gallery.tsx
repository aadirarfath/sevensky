"use client";

import { cn } from "@/lib/utils";

export function ImageGallery() {
  const images = [
    "/testimonial/1.png",
    "/testimonial/2.png",
    "/testimonial/3.png",
    "/testimonial/4.png",
    "/testimonial/5.png",
    "/testimonial/6.png",
    "/testimonial/7.png",
    "/testimonial/8.png",
  ];

  return (
    <section className="w-full flex flex-col items-center justify-start py-12 md:py-24">
      <div className="max-w-3xl text-center px-4">
        <h2 
            className="text-[12vw] md:text-[8vw] leading-none text-[#1a4473] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
        >
          OUR LATEST CREATIONS
        </h2>
        <p className="text-lg text-[#1a4473]/80 mt-2 max-w-xl mx-auto leading-relaxed">
          A visual collection of our most recent works – each piece crafted
          with intention, emotion, and style.
        </p>
      </div>

      {/* Gallery Bottom */}
      <div className="flex flex-col md:flex-row items-center gap-2 h-[60vh] md:h-[60vh] w-full max-w-7xl mt-12 md:mt-16 px-4 md:px-8">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative group flex-grow transition-all w-full md:w-24 h-16 md:h-full rounded-xl overflow-hidden duration-500 hover:h-[40%] md:hover:h-full md:hover:w-[40%]"
          >
            <img
              className="h-full w-full object-cover object-center"
              src={src}
              alt={`gallery-image-${idx}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
