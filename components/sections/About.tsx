"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function About() {
    return (
        <section id="about" className="py-12 md:py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="relative">
                        <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-border">
                            <Image
                                src="/about_team_1769890242630.png"
                                alt="Team"
                                width={800}
                                height={800}
                                className="w-full object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 hidden sm:block">
                            <div className="bg-primary text-primary-foreground w-20 h-20 md:w-32 md:h-32 rounded-full shadow-xl flex flex-col items-center justify-center border-4 md:border-8 border-background animate-pulse">
                                <span className="text-xl md:text-2xl font-black italic">NEW</span>
                                <span className="text-[6px] md:text-[8px] uppercase font-bold tracking-widest text-center mt-0.5">Arrival in<br />City</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="flex flex-col gap-2 md:gap-3">
                            <Badge variant="secondary" className="w-fit text-primary font-black uppercase tracking-widest px-3 py-0.5 rounded-full text-[10px]">New Chapter</Badge>
                            <h2 className="text-3xl md:text-5xl font-display font-black leading-tight tracking-tighter">
                                Freshly Brewed <br />
                                <span className="text-premium-gradient">For Your Soul.</span>
                            </h2>
                        </div>

                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
                            RAMNA CAFÉ has finally arrived to redefine the chai experience in your neighborhood. We are a fresh destination dedicated to the authentic soul of traditional recipes, using only 100% organic ingredients and artisanal brewing techniques.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                            {[
                                { icon: "🌿", title: "100% Organic", desc: "Farm-to-cup fresh sourcing." },
                                { icon: "🏺", title: "Authentic Prep", desc: "Traditional slow-brew method." }
                            ].map((item, idx) => (
                                <Card key={idx} className="bg-secondary/50 border-none rounded-2xl p-4 md:p-5 hover:bg-secondary transition-colors group">
                                    <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">{item.icon}</span>
                                    <h4 className="font-bold text-base mb-1">{item.title}</h4>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </Card>
                            ))}
                        </div>

                        <div className="mt-2">
                            <Button size="lg" className="h-12 rounded-full px-8 font-black uppercase tracking-widest shadow-xl shadow-primary/10 text-xs">
                                Our Full Journey
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
