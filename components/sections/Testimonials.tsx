"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
    return (
        <section className="py-12 md:py-20 bg-foreground text-background overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-primary/5 rounded-full blur-[80px] md:blur-[120px]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-8 md:mb-12 flex flex-col items-center gap-3">
                    <Badge className="bg-background/10 text-primary border-none px-4 py-1 uppercase font-black tracking-widest rounded-full text-[10px] backdrop-blur-md">Reviews</Badge>
                    <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter">Voice of Our <span className="text-premium-gradient">Soulmates</span></h2>
                </div>

                <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-6xl mx-auto">
                    <CarouselContent className="-ml-3 md:-ml-6">
                        {testimonials.map((t) => (
                            <CarouselItem key={t.id} className="pl-3 md:pl-6 md:basis-1/2 lg:basis-1/3">
                                <Card className="bg-white/5 backdrop-blur-xl p-5 md:p-7 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 h-full flex flex-col gap-4 md:gap-6 hover:bg-white/10 transition-all group">
                                    <div className="text-primary text-4xl md:text-5xl font-serif leading-none h-4 md:h-6 group-hover:rotate-12 transition-transform">“</div>
                                    <p className="text-base md:text-lg font-medium leading-relaxed italic text-background/80 flex-grow">
                                        {t.text}
                                    </p>
                                    <div className="flex items-center gap-3 md:gap-4 pt-4 border-t border-white/5">
                                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-primary flex items-center justify-center text-primary-foreground text-lg md:text-xl font-black shadow-lg shrink-0">
                                            {t.avatar}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-sm md:text-base uppercase tracking-wider">{t.name}</span>
                                            <span className="text-primary font-bold uppercase text-[9px] md:text-[10px] tracking-widest">{t.role}</span>
                                        </div>
                                    </div>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex gap-3 md:gap-4 justify-center mt-8 md:mt-12">
                        <CarouselPrevious className="static translate-x-0 translate-y-0 bg-white/5 border-white/10 text-white w-10 h-10 md:w-14 md:h-14 hover:bg-primary transition-all rounded-full p-2 md:p-3" />
                        <CarouselNext className="static translate-x-0 translate-y-0 bg-white/5 border-white/10 text-white w-10 h-10 md:w-14 md:h-14 hover:bg-primary transition-all rounded-full p-2 md:p-3" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
