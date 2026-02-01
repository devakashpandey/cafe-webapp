"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Coffee, Heart, Zap } from "lucide-react";

export function Loyalty() {
    const perks = [
        {
            icon: <Coffee className="w-6 h-6 md:w-8 md:h-8" />,
            title: "5th Chai Free",
            desc: "Order 4 drinks and your 5th is on the house. Every time!",
            color: "text-primary",
            bg: "bg-primary/10"
        },
        {
            icon: <Gift className="w-6 h-6 md:w-8 md:h-8" />,
            title: "Birthday Treats",
            desc: "Celebrate your special day with a free dessert of your choice.",
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
            title: "VIP Early Access",
            desc: "Be the first to taste our limited edition seasonal blends.",
            color: "text-amber-500",
            bg: "bg-amber-500/10"
        },
        {
            icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
            title: "Family Discounts",
            desc: "Flat 10% off for families and groups above 5 members.",
            color: "text-rose-500",
            bg: "bg-rose-500/10"
        }
    ];

    return (
        <section id="loyalty" className="py-12 md:py-20 bg-background overflow-hidden relative">
            <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[100px] -ml-20 -mt-20" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-10 md:mb-16 flex flex-col items-center gap-3">
                    <Badge variant="outline" className="border-primary text-primary font-black uppercase px-4 py-1.5 rounded-full tracking-widest text-[10px]">The Regulars Club</Badge>
                    <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase leading-none">
                        Our <span className="text-premium-gradient">Loyalty Rewards</span>
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base max-w-xl mt-2 font-medium">
                        Being a "Ramna Regular" comes with its own set of delicious perks. Join our club today and start earning rewards.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {perks.map((perk, idx) => (
                        <Card key={idx} className="group p-6 md:p-8 rounded-[2rem] border-none bg-secondary/30 hover:bg-secondary transition-all duration-500 hover:-translate-y-2 flex flex-col gap-6">
                            <div className={`${perk.bg} ${perk.color} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                                {perk.icon}
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-xl font-bold tracking-tight">{perk.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{perk.desc}</p>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-foreground text-background font-black uppercase tracking-widest text-xs h-12 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all">
                        Join The Club Now
                    </button>
                </div>
            </div>
        </section>
    );
}
