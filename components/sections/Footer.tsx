"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { navLinks } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="pt-16 md:pt-20 pb-8 md:pb-12 bg-foreground text-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-12 md:mb-20">
                    <div className="flex flex-col gap-6 md:gap-8 col-span-1 lg:col-span-2">
                        <a href="#home" className="flex items-center gap-3 md:gap-4 group">
                            <div className="bg-primary p-2.5 md:p-3 rounded-xl text-primary-foreground group-hover:rotate-12 transition-transform shadow-xl shadow-primary/20">
                                <span className="text-2xl md:text-3xl text-primary-foreground">☕</span>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-2xl md:text-3xl font-display font-black tracking-tighter uppercase leading-none">
                                    RAMNA <span className="text-primary">CAFÉ</span>
                                </span>
                                <span className="text-[9px] md:text-[10px] tracking-[0.3em] text-primary font-bold uppercase mt-1.5">Premium Experience Redefined</span>
                            </div>
                        </a>
                        <p className="text-background/50 text-sm md:text-base max-w-sm font-medium leading-relaxed">
                            Dedicated to rescuing the authentic heritage of Indian tea culture. Every cup crafted with tradition, served with love and flavor.
                        </p>
                        <div className="flex gap-3 md:gap-4">
                            {[
                                { icon: Facebook, name: "fb" },
                                { icon: Instagram, name: "ig" },
                                { icon: Twitter, name: "tw" }
                            ].map((social, i) => (
                                <Button
                                    key={i}
                                    variant="outline"
                                    size="icon"
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl border-white/10 bg-white/5 hover:bg-primary hover:border-primary text-background group transition-all h-auto"
                                >
                                    <social.icon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-6">
                        <h4 className="text-primary font-black uppercase text-[9px] md:text-[10px] tracking-[0.5em]">Internal Links</h4>
                        <div className="flex flex-col gap-3 md:gap-4">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-sm md:text-base font-bold uppercase tracking-widest hover:text-primary transition-colors w-fit">{link.name}</a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-6">
                        <h4 className="text-primary font-black uppercase text-[9px] md:text-[10px] tracking-[0.5em]">Join Our Club</h4>
                        <p className="text-background/40 text-[9px] md:text-[10px] font-black uppercase tracking-widest leading-loose">Subscribe for exclusive secret recipes and VIP event invites.</p>
                        <div className="flex flex-col gap-3">
                            <Input placeholder="Your best email address" className="h-12 md:h-14 rounded-xl bg-white/5 border-white/10 text-background placeholder:text-background/30 px-5 font-bold text-sm" />
                            <Button className="h-12 md:h-14 font-black uppercase tracking-[0.2em] rounded-xl shadow-xl shadow-primary/20 text-xs text-background">Subscribe Now</Button>
                        </div>
                    </div>
                </div>

                <Separator className="bg-white/5 mb-8 md:mb-12" />

                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-[7px] md:text-[9px] font-black uppercase tracking-[0.3em] text-background/30">
                    <span className="text-center lg:text-left">© 2024 RAMNA CAFÉ BRANDING • ALL RIGHTS RESERVED.</span>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Charter</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Experience</a>
                        <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
                    </div>
                    <span className="flex items-center gap-2">DESIGNED WITH <span className="text-primary animate-pulse">❤️</span> BY <a href="https://developerakky.vercel.app/" target="_blank" className="hover:text-primary transition-colors">AKASH.</a></span>
                </div>
            </div>
        </footer>
    );
}
