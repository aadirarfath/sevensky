import { FloatingHeader } from "@/components/ui/floating-header";
import { HeroSection } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/Services";
import { ProcessSection } from "@/components/sections/Process";
import { AboutSection } from "@/components/sections/About";
import { FAQSection } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/Contact";

function Footer() {
  return (
    <footer className="border-t border-[#D8D8D0] dark:border-[#333333] py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#888880]" style={{ fontFamily: "var(--font-geist-mono)" }}>
          © 2025 SevenSky Agency
        </p>
        <p className="text-xs text-[#888880]" style={{ fontFamily: "var(--font-geist-mono)" }}>
          Crafted with intention
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/sevensky.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#111111] dark:text-white md:text-[#888880] md:hover:text-[#111111] md:dark:hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com/company/sevensky"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#111111] dark:text-white md:text-[#888880] md:hover:text-[#111111] md:dark:hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:admin@sevenskymedia.com"
            className="text-xs text-[#111111] dark:text-white md:text-[#888880] md:hover:text-[#111111] md:dark:hover:text-white transition-colors"
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
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
