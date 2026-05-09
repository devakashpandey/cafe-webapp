"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

export function MapSection() {
    return (
        <section className="py-12 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col gap-8 md:gap-12">
                    <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 text-center md:text-left">
                        <div className="flex flex-col gap-3">
                            <Badge variant="outline" className="w-fit mx-auto md:mx-0 border-primary text-primary font-black uppercase px-4 py-1.5 rounded-full tracking-widest text-[10px]">Location</Badge>
                            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase leading-none">Find Us <span className="text-premium-gradient">On The Map</span></h2>
                        </div>
                        <a 
                            href="https://www.google.com/maps/dir/25.5649333,84.6703658/CAFE+RAMNA,+HM57%2BVF3,+South+Ramna+Road,+Old+Judges+Compound,+Hari+Jee+Ka+Hata,+Nawada,+Arrah,+Bihar+802301/@25.5545769,84.6792921,15z" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Button className="rounded-full px-8 md:px-10 h-12 md:h-14 font-black uppercase tracking-widest text-xs flex gap-2">
                                <Navigation className="w-4 h-4" /> Get Directions
                            </Button>
                        </a>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
                        <div className="lg:col-span-2 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-background h-[300px] md:h-[500px]">
                            {/* Embedded Google Map - Location: Cafe Ramna, Arrah */}
                            <iframe
                                src="https://www.google.com/maps?q=CAFE%20RAMNA%20Arrah%20Bihar&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-1000"
                            ></iframe>
                        </div>

                        <div className="bg-background p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] text-foreground flex flex-col justify-center gap-8 md:gap-10 shadow-2xl relative overflow-hidden border border-border">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10" />

                            <div className="flex flex-col gap-6 relative z-10">
                                <div className="bg-primary/20 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-primary">
                                    <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tighter">Cafe Ramna</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                                        HM57+VF3, South Ramna Road,<br />
                                        Old Judges Compound, Nawada,<br />
                                        Arrah, Bihar - 802301
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10 border-t border-border pt-8">
                                <div className="flex items-center justify-between group">
                                    <span className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-[10px]">Location</span>
                                    <span className="text-primary font-black">Nawada, Arrah</span>
                                </div>
                                <div className="flex items-center justify-between group">
                                    <span className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-[10px]">Landmark</span>
                                    <span className="text-foreground font-black">Old Judges Compound</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
