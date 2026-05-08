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
            className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent"
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
                            className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
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
                                    className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                                    aria-label="Open menu"
                                >
                                    <Menu className="h-5 w-5" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-[#0A1128] border-[#1E293B]">
                                <SheetHeader className="text-left">
                                    <SheetTitle className="sr-only">SevenSky Advertising</SheetTitle>
                                    <LogoSmall />
                                </SheetHeader>
                                <nav className="mt-10 flex flex-col gap-6">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            className="text-xl text-[#F5F0E8] hover:text-white transition-colors"
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
