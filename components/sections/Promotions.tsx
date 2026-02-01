"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function Promotions() {
    return (
        <section className="py-12 md:py-16 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative overflow-hidden bg-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16">
                    {/* Background Decorative Circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="flex flex-col gap-4 text-center lg:text-left">
                            <Badge className="bg-white/20 text-white w-fit mx-auto lg:mx-0 border-none px-4 py-1.5 uppercase font-black tracking-widest text-[10px]">Limited Time Offer</Badge>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white leading-none tracking-tighter">
                                GRAND OPENING <br />
                                <span className="text-white/30">CELEBRATION!</span>
                            </h2>
                            <p className="text-white/80 text-lg md:text-xl font-medium max-w-xl">
                                Enjoy a flat <span className="text-white font-black text-2xl md:text-3xl">20% OFF</span> on all our signature Chais. Let's brew some memories together!
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <div className="bg-background/95 backdrop-blur-md p-6 md:p-10 rounded-[2rem] shadow-2xl flex flex-col items-center gap-2 transform hover:scale-105 transition-transform">
                                <span className="text-primary font-black text-4xl md:text-6xl tracking-tighter">RAMNA20</span>
                                <span className="text-muted-foreground uppercase font-bold text-xs tracking-widest">USE THIS CODE AT CHECKOUT</span>
                            </div>
                            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-black uppercase tracking-widest h-14 px-10 rounded-full shadow-2xl flex gap-2">
                                <Sparkles className="w-5 h-5 text-primary" /> Claim Reward
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
