"use client";

export function Marquee() {
    return (
        <div className="bg-foreground py-4 md:py-6 overflow-hidden border-y border-white/5 relative z-20 shadow-2xl">
            <div className="flex whitespace-nowrap animate-marquee">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-10 md:gap-20 px-5 md:px-10 items-center">
                        {["Masala Chai", "Stone Baked Pizza", "Kulhad Specials", "Gourmet Burgers", "Fresh Mocktails", "Exotic Shakes"].map((item, j) => (
                            <div key={j} className="flex items-center gap-3 md:gap-5">
                                <span className="text-primary text-xl md:text-2xl">✦</span>
                                <span className="text-background/40 text-xs md:text-sm font-black uppercase tracking-[0.4em]">{item}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
