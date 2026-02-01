"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck } from "lucide-react";
import { ReservationModal } from "@/components/modals/ReservationModal";
import { stats } from "@/lib/constants";

export function Hero() {
    return (
        <section id="home" className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 scale-110">
                <Image
                    src="/cafe_interior_1769890221754.png"
                    alt="Interior"
                    fill
                    className="object-cover animate-slow-zoom brightness-[0.5]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/60" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center pt-20">
                <Badge
                    variant="outline"
                    className="bg-primary/20 text-primary border-primary/50 px-4 md:px-6 py-1 md:py-1.5 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm"
                >
                    Now Open in Your City
                </Badge>

                <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase font-display leading-[1.1] tracking-tighter mb-4 md:mb-6 drop-shadow-2xl">
                    Welcome to<br />
                    <span className="text-premium-gradient">RAMNA CAFÉ</span>
                </h1>

                <p className="text-white/80 text-sm md:text-lg lg:text-xl max-w-2xl mb-6 md:mb-8 font-medium leading-relaxed px-4">
                    Where every sip tells an authentic story. Experience the perfect fusion of traditional Indian chai and global culinary craft.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12 w-full sm:w-auto px-4">
                    <Button size="lg" asChild className="w-full sm:w-auto px-6 md:px-10 py-5 md:py-6 text-sm md:text-base font-black uppercase tracking-widest rounded-full shadow-2xl shadow-primary/40 hover:scale-105 transition-transform">
                        <a href="#menu">Explore Our Menu</a>
                    </Button>
                    {/* Reserve Table - Easy Access Button (Mobile/Tablet Only) */}
                    <div className="lg:hidden">
                        <ReservationModal />
                    </div>
                </div>

                {/* Stat Pills */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full max-w-3xl px-4 mt-4">
                    {[
                        { number: "50+", label: "Menu Items", },
                        { number: "100%", label: "Live Hygiene", },
                        { number: "New", label: "Grand Opening", },
                        { number: "Fresh", label: "Daily Batches", }
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="relative group bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-4 text-center border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 shadow-xl overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-12 h-12 bg-primary/10 rounded-full blur-xl -mr-6 -mt-6 group-hover:bg-primary/20 transition-colors" />
                            <div className="text-xl md:text-2xl font-black text-primary mb-0.5 drop-shadow-[0_0_10px_rgba(255,100,0,0.2)]">
                                {stat.number}
                            </div>
                            <div className="text-white/70 text-[7px] md:text-[9px] uppercase font-black tracking-[0.2em] leading-tight">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
