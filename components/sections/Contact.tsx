"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-12 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto bg-background rounded-2xl md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-muted relative">
                    <div className="grid lg:grid-cols-2">
                        {/* Form Side */}
                        <div className="p-6 md:p-10 lg:p-14 flex flex-col gap-6 md:gap-10">
                            <div className="flex flex-col gap-2 md:gap-4">
                                <Badge variant="secondary" className="w-fit text-primary font-black uppercase px-4 py-1 rounded-full tracking-widest text-[10px]">Contact Us</Badge>
                                <h2 className="text-3xl md:text-5xl font-display font-black leading-tight tracking-tighter">
                                    Got A Question? <br /><span className="text-premium-gradient uppercase">Connect With Us!</span>
                                </h2>
                            </div>

                            <div className="grid gap-4 md:gap-6">
                                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-3">Full Name</label>
                                        <Input placeholder="Enter your name" className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-secondary border-none px-6 font-bold text-base focus-visible:ring-primary shadow-inner" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-3">Email Address</label>
                                        <Input placeholder="Enter your email" className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-secondary border-none px-6 font-bold text-base focus-visible:ring-primary shadow-inner" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-3">How can we help?</label>
                                    <Textarea placeholder="Tell us what's on your mind..." className="min-h-[100px] md:min-h-[140px] rounded-2xl md:rounded-3xl bg-secondary border-none p-6 font-bold text-base focus-visible:ring-primary shadow-inner" />
                                </div>
                                <Button size="lg" className="h-12 md:h-16 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-base md:text-lg shadow-xl shadow-primary/20 mt-2">
                                    Send Message <Mail className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div>

                        {/* Info Side */}
                        <div className="bg-background p-6 md:p-10 lg:p-14 text-foreground flex flex-col gap-10 md:gap-14 relative border-l border-border">
                            <div className="absolute inset-0 bg-primary/5" />
                            <div className="relative z-10 flex flex-col gap-10 md:gap-14">
                                <div className="flex flex-col gap-4 md:gap-6">
                                    <h3 className="text-xl md:text-3xl font-display font-black uppercase tracking-[0.2em] text-primary">Visit Our Hub</h3>
                                    <div className="flex items-start gap-4 group">
                                        <div className="bg-primary p-2 md:p-3 rounded-lg md:rounded-xl text-primary-foreground group-hover:rotate-12 transition-transform shadow-lg shadow-primary/30 shrink-0">
                                            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <p className="text-lg md:text-xl font-medium leading-relaxed">123 Chai Street, Connaught Place, <br />New Delhi, India - 110001</p>
                                    </div>
                                </div>

                                <div className="grid gap-6 md:gap-8">
                                    <div className="flex items-center gap-4 group">
                                        <div className="bg-primary/20 p-2 md:p-3 rounded-lg md:rounded-xl text-primary group-hover:scale-110 transition-transform">
                                            <Phone className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[9px] md:text-[10px] uppercase font-black tracking-widest text-primary mb-0.5">Call Anytime</span>
                                            <span className="text-lg md:text-xl font-black tracking-tight">+91 98765 43210</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="bg-primary/20 p-2 md:p-3 rounded-lg md:rounded-xl text-primary group-hover:scale-110 transition-transform">
                                            <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[9px] md:text-[10px] uppercase font-black tracking-widest text-primary mb-0.5">Email Queries</span>
                                            <span className="text-lg md:text-xl font-black tracking-tight">hello@ramnacafe.com</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 md:p-6 rounded-2xl border border-border bg-secondary/30 flex items-center justify-between shadow-xl backdrop-blur-sm group hover:border-primary/50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary p-2 rounded-lg text-primary-foreground">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-primary font-black text-[9px] md:text-[10px] uppercase tracking-widest mb-0.5">Operating Hours</span>
                                            <span className="font-black text-sm md:text-base">Mon - Sun (8am - 12pm)</span>
                                        </div>
                                    </div>
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
