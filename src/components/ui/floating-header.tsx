"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { LogoSmall } from "@/components/ui/logo";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
];

export function FloatingHeader() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled
                ? "w-[95%] md:w-[80%] max-w-5xl bg-[#0C0C0C]/95 backdrop-blur-xl border border-[#2A2415] shadow-[0_8px_32px_rgba(212,168,67,0.08)] rounded-full"
                : "w-[95%] md:w-[85%] max-w-6xl bg-[#0C0C0C]/80 backdrop-blur-md border border-[#2A2415]/60 shadow-sm rounded-full"
                }`}
        >
            <div className="px-4 md:px-6 h-16 flex items-center justify-between">
                {/* Logo - Left */}
                <div className="flex-1 flex justify-start">
                    <a href="/" className="flex items-center group transition-transform hover:scale-105 duration-300">
                        <LogoSmall className="scale-90 md:scale-100 origin-left" />
                    </a>
                </div>

                {/* Desktop Nav - Center */}
                <nav className="hidden md:flex items-center justify-center gap-8 shrink-0">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-[#C9A84C] hover:text-[#F0C040] transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex-1 flex items-center justify-end gap-2 md:gap-3">

                    <a href="#contact" className="hidden md:inline-flex">
                        <Button size="sm" className="rounded-full px-5 md:px-6 font-medium">Get a Quote</Button>
                    </a>

                    {/* Mobile hamburger */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button
                                    className="p-2 text-[#C9A84C] hover:bg-[#D4A843]/10 rounded-full transition-colors"
                                    aria-label="Open menu"
                                >
                                    <Menu className="h-5 w-5" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-[#0C0C0C] border-[#2A2415]">
                                <SheetHeader className="text-left">
                                    <SheetTitle className="sr-only">SevenSky Advertising</SheetTitle>
                                    <LogoSmall />
                                </SheetHeader>
                                <nav className="mt-10 flex flex-col gap-6">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            className="text-xl text-[#F5F0E8] hover:text-[#D4A843] transition-colors"
                                            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.06em" }}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                    <a href="#contact" className="mt-4">
                                        <Button className="w-full">Get a Quote</Button>
                                    </a>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
