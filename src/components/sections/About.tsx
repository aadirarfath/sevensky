"use client";

import { ImageGallery } from "@/components/ui/image-gallery";

export function GallerySection() {
    return (
        <section id="gallery" className="min-h-[100dvh] flex flex-col justify-center border-t border-[#1a4473]/10 bg-white">
            <ImageGallery />
        </section>
    );
}
