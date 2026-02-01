"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { OpenStatus } from "@/components/ui/open-status";
import { ReservationModal } from "@/components/modals/ReservationModal";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b shadow-sm py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <a href="#home" className="flex items-center gap-2 md:gap-3 group">
                    <div className="bg-primary p-1.5 md:p-2 rounded-xl text-primary-foreground group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
                        <span className="text-xl md:text-2xl">☕</span>
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className={`text-xl md:text-3xl font-black tracking-tighter uppercase font-display ${isScrolled ? "text-foreground" : "text-white"}`}>
                            RAMNA <span className="text-primary">CAFÉ</span>
                        </span>
                        <span className={`text-[8px] md:text-[10px] tracking-[0.3em] font-bold uppercase mt-0.5 ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>
                            Premium Experience
                        </span>
                    </div>
                </a>

                {/* Desktop Links */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`px-4 py-2 text-xs font-black uppercase tracking-widest transition-colors rounded-lg hover:bg-accent/50 ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white hover:bg-white/10"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2 md:gap-4">
                    {/* Live Open/Closed Status - Desktop Only */}
                    <div className="hidden lg:block">
                        <OpenStatus openHour={8} closeHour={24} />
                    </div>

                    {/* Theme Toggle */}
                    <ThemeToggle isScrolled={isScrolled} />

                    {/* Reserve Table Button - Desktop */}
                    <div className="hidden sm:block">
                        <ReservationModal />
                    </div>

                    {/* Mobile Nav */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className={`lg:hidden rounded-full ${isScrolled ? "text-foreground" : "text-white hover:bg-white/10"}`}>
                                <Menu className="w-5 h-5 md:w-6 md:h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background border-l w-[80vw] max-w-xs p-0">
                            {/* Mobile Menu Header */}
                            <div className="p-6 border-b flex items-center justify-between">
                                <span className="text-xl font-black uppercase font-display">
                                    RAMNA <span className="text-primary">CAFÉ</span>
                                </span>
                                <SheetClose asChild>
                                    <Button variant="ghost" size="icon" className="rounded-full">
                                        <X className="w-5 h-5" />
                                    </Button>
                                </SheetClose>
                            </div>

                            {/* Mobile Navigation Links */}
                            <nav className="flex flex-col p-4">
                                {navLinks.map((link) => (
                                    <SheetClose asChild key={link.name}>
                                        <a
                                            href={link.href}
                                            className="py-4 px-3 text-base font-bold uppercase tracking-widest hover:text-primary hover:bg-muted/50 rounded-xl transition-all"
                                        >
                                            {link.name}
                                        </a>
                                    </SheetClose>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
