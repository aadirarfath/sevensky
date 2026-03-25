"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-[#EFEFEA]/95 backdrop-blur-lg border-b border-[#D8D8D0] shadow-sm"
                    : "bg-[#EFEFEA]/80 backdrop-blur-md border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2.5 group">
                    <div className="w-8 h-8 rounded-md bg-[#111111] flex items-center justify-center text-white text-xs font-bold tracking-tight select-none">
                        SS
                    </div>
                    <span
                        className="text-lg tracking-widest text-[#111111]"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        SEVENSKY
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-[#888880] hover:text-[#111111] transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA + Mobile Menu */}
                <div className="flex items-center gap-3">
                    <a href="#contact" className="hidden md:inline-flex">
                        <Button size="sm">Get a Quote</Button>
                    </a>

                    {/* Mobile hamburger */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button
                                    className="p-2 text-[#111111] hover:bg-[#111111]/5 rounded-md transition-colors"
                                    aria-label="Open menu"
                                >
                                    <Menu className="h-5 w-5" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle
                                        className="text-2xl tracking-widest"
                                        style={{ fontFamily: "var(--font-display)" }}
                                    >
                                        SEVENSKY
                                    </SheetTitle>
                                </SheetHeader>
                                <nav className="mt-10 flex flex-col gap-6">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            className="text-xl text-[#111111] hover:text-[#888880] transition-colors"
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
