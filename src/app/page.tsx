import { FloatingHeader } from "@/components/ui/floating-header";
import { HeroSection } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/Services";
import { ProcessSection } from "@/components/sections/Process";
import { GallerySection } from "@/components/sections/About";
import { PostersSection } from "@/components/sections/Posters";
import { ContactSection } from "@/components/sections/Contact";

function Footer() {
  return (
    <footer className="border-t border-[#21548e] py-8 bg-[#2d6fbc]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40" style={{ fontFamily: "var(--font-geist-mono)" }}>
          © 2025 SevenSky Agency
        </p>
        <p className="text-xs text-white/40" style={{ fontFamily: "var(--font-geist-mono)" }}>
          Crafted with intention
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/sevensky.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/60 hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com/company/sevensky"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/60 hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:admin@sevenskymedia.com"
            className="text-xs text-white/60 hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main>
      <FloatingHeader />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <GallerySection />
      <PostersSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
