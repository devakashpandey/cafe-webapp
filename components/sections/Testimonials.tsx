"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
    // Duplicate the testimonials to create a seamless infinite loop
    const doubledTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-12 md:py-24 bg-background text-foreground overflow-hidden relative border-t border-border">
            <div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-primary/5 rounded-full blur-[80px] md:blur-[120px]" />

            <div className="relative z-10">
                <div className="text-center mb-12 md:mb-20 flex flex-col items-center gap-3 container mx-auto px-4">
                    <Badge className="bg-primary/10 text-primary border-none px-4 py-1 uppercase font-black tracking-widest rounded-full text-[10px] backdrop-blur-md">Reviews</Badge>
                    <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter">Voice of Our <span className="text-premium-gradient">Soulmates</span></h2>
                </div>

                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee flex whitespace-nowrap gap-6 md:gap-8 hover:[animation-play-state:paused] py-4">
                        {doubledTestimonials.map((t, idx) => (
                            <div key={`${t.id}-${idx}`} className="w-[300px] md:w-[450px] shrink-0">
                                <Card className="bg-card backdrop-blur-xl p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-border/50 h-full flex flex-col gap-6 md:gap-8 hover:border-primary/30 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.05)] group/card">
                                    <div className="text-primary text-5xl md:text-7xl font-serif leading-none h-6 md:h-10 opacity-40 group-hover/card:opacity-100 group-hover/card:rotate-12 transition-all duration-500">“</div>
                                    <p className="text-base md:text-xl font-medium leading-relaxed italic text-muted-foreground flex-grow whitespace-normal">
                                        {t.text}
                                    </p>
                                    <div className="flex items-center gap-4 md:gap-5 pt-6 border-t border-border/50">
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground text-xl md:text-2xl font-black shadow-xl shadow-primary/20 shrink-0 group-hover/card:scale-110 transition-transform duration-500">
                                            {t.avatar}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-base md:text-lg uppercase tracking-wider">{t.name}</span>
                                            <span className="text-primary font-black uppercase text-[10px] md:text-xs tracking-widest">{t.role}</span>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* Gradient Fades for Premium Look */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
