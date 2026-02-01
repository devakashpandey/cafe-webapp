"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

export function Gallery() {
    return (
        <section id="gallery" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-8 md:mb-12 gap-6 text-center md:text-left">
                    <div className="flex flex-col gap-2 md:gap-3">
                        <Badge variant="outline" className="w-fit mx-auto md:mx-0 border-primary text-primary font-black uppercase px-4 py-1 rounded-full tracking-widest text-[10px]">Visual Vibe</Badge>
                        <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase leading-none">Inside <span className="text-premium-gradient">RAMNA CAFÉ</span></h2>
                    </div>
                    <Button size="lg" className="h-12 md:h-14 rounded-full px-8 md:px-10 font-black uppercase tracking-widest flex gap-2 shadow-xl shadow-primary/10 text-xs">
                        <Instagram className="w-4 h-4 md:w-5 md:h-5" /> Explore Instagram
                    </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 h-auto md:h-[600px]">
                    {[
                        { src: "/cafe_interior_1769890221754.png", span: "md:col-span-2 md:row-span-2" },
                        { src: "/hero_chai_1769890121689.png", span: "" },
                        { src: "/pizza_item_1769890138202.png", span: "" },
                        { src: "/burger_item_1769890168386.png", span: "md:row-span-2" },
                        { src: "/shake_item_1769890182811.png", span: "" },
                        { src: "/mocktail_item_1769890153436.png", span: "" },
                        { src: "/chai_varieties_1769890257667.png", span: "md:col-span-2" },
                    ].map((img, idx) => (
                        <div key={idx} className={`relative overflow-hidden rounded-xl md:rounded-[2rem] group ${img.span} min-h-[150px]`}>
                            <Image
                                src={img.src}
                                alt={`Gallery ${idx}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
