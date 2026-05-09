"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Star, ArrowRight, Search, Leaf, Flame } from "lucide-react";
import { menuCategories, menuItems } from "@/lib/constants";

export function Menu() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [dietFilter, setDietFilter] = useState<"all" | "veg" | "nonveg">("all");

    const filteredMenu = useMemo(() => {
        let items = activeCategory === "all" ? menuItems : menuItems.filter((item) => item.category === activeCategory);

        // Search filter
        if (searchQuery.trim()) {
            items = items.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Dietary filter (assuming items have a 'veg' boolean property, defaulting to true if not specified)
        if (dietFilter !== "all") {
            items = items.filter((item) => {
                const isVeg = (item as { veg?: boolean }).veg !== false;
                return dietFilter === "veg" ? isVeg : !isVeg;
            });
        }

        return items;
    }, [activeCategory, searchQuery, dietFilter]);

    return (
        <section id="menu" className="py-12 md:py-20 bg-secondary/30 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center flex flex-col items-center gap-2 md:gap-4 mb-8 md:mb-12">
                    <Badge className="bg-primary text-primary-foreground font-black uppercase px-4 py-1 tracking-widest rounded-full text-[10px]">Signature Menu</Badge>
                    <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter">
                        Explore Our <span className="text-premium-gradient">Delights</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl font-medium text-sm md:text-base">
                        A curated symphony of aromatic spices and bold, modern global flavors.
                    </p>
                </div>

                {/* Search & Filter Bar */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-12 md:mb-16 w-full max-w-6xl mx-auto">
                    {/* Search Input */}
                    <div className="relative w-full lg:flex-1 group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40 group-focus-within:text-primary transition-colors" />
                        <Input
                            placeholder="What are you craving today?"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="h-16 pl-16 pr-8 rounded-[1.5rem] bg-background/50 backdrop-blur-xl border-border/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus-visible:ring-primary/20 font-bold text-base transition-all hover:bg-background/80"
                        />
                    </div>

                    {/* Diet Filters - Modern Toggle Group */}
                    <div className="flex p-1.5 bg-background/50 backdrop-blur-xl rounded-[1.5rem] border border-border/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-fit shrink-0">
                        {[
                            { id: "all", label: "All Items", icon: null },
                            { id: "veg", label: "Pure Veg", icon: Leaf, color: "text-green-500" },
                            { id: "nonveg", label: "Non-Veg", icon: Flame, color: "text-red-500" }
                        ].map((btn) => (
                            <button
                                key={btn.id}
                                onClick={() => setDietFilter(btn.id as any)}
                                className={`px-6 md:px-8 py-3.5 rounded-2xl font-black uppercase text-[9px] md:text-[10px] tracking-widest transition-all flex items-center gap-2 shrink-0 ${dietFilter === btn.id
                                    ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105 -translate-y-0.5"
                                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                                    }`}
                            >
                                {btn.icon && <btn.icon className={`w-3.5 h-3.5 ${dietFilter === btn.id ? "text-white" : btn.color}`} />}
                                {btn.label}
                            </button>
                        ))}
                    </div>
                </div>

                <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                    <div className="flex justify-center mb-10 md:mb-16">
                        <TabsList className="bg-transparent h-auto flex items-center justify-start md:justify-center gap-2 md:gap-4 overflow-x-auto no-scrollbar w-full border-none shadow-none px-4 md:px-0 py-2">
                            {menuCategories.map((cat) => (
                                <TabsTrigger
                                    key={cat.id}
                                    value={cat.id}
                                    className="rounded-full px-5 md:px-8 py-2.5 md:py-3 font-black text-[10px] md:text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 h-auto border-none text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-primary/20 hover:text-foreground"
                                >
                                    <span className="text-base md:text-xl leading-none shrink-0">{cat.icon}</span>
                                    <span className="leading-none">{cat.name}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    <TabsContent
                        value={activeCategory}
                        className="mt-0 focus-visible:outline-none animate-in fade-in-50 zoom-in-95 duration-500"
                    >
                        {filteredMenu.length === 0 ? (
                            <div className="text-center py-16">
                                <p className="text-muted-foreground text-lg">No items found matching your search.</p>
                                <Button variant="ghost" onClick={() => { setSearchQuery(""); setDietFilter("all"); }} className="mt-4 text-primary">
                                    Clear Filters
                                </Button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                                {filteredMenu.map((item) => (
                                    <Card key={item.id} className="overflow-hidden border border-border/40 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group rounded-[1.5rem] md:rounded-[2rem] bg-card/60 backdrop-blur-md flex flex-col h-full">
                                        <div className="relative aspect-[4/3] m-2 rounded-[1rem] md:rounded-[1.5rem] overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            {item.badge && (
                                                <Badge className="absolute top-2 left-2 bg-primary/90 text-white border-none px-2 py-0.5 uppercase font-black tracking-widest text-[7px] md:text-[8px] shadow-lg rounded-full">
                                                    {item.badge}
                                                </Badge>
                                            )}
                                        </div>
                                        <CardContent className="px-4 py-3 md:py-4 flex flex-col gap-1 flex-grow">
                                            <div className="flex items-center gap-1 mb-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-2.5 h-2.5 fill-primary text-primary opacity-80" />
                                                ))}
                                            </div>
                                            <h3 className="text-sm md:text-base font-display font-black tracking-tight group-hover:text-primary transition-colors line-clamp-1 uppercase leading-tight">{item.name}</h3>
                                            <p className="text-[9px] md:text-[11px] text-muted-foreground leading-snug font-medium line-clamp-2">
                                                {item.description}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="px-4 pb-4 md:pb-5 pt-0 flex items-center justify-between mt-auto">
                                            <span className="text-base md:text-lg font-black text-primary tracking-tighter">{item.price}</span>
                                            <Button size="sm" className="rounded-xl h-7 md:h-8 px-3 md:px-4 font-black uppercase text-[8px] md:text-[9px] tracking-widest bg-foreground text-background hover:bg-primary hover:text-white transition-all duration-300">
                                                Add
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </TabsContent>
                </Tabs>

                <div className="text-center mt-8 md:mt-12">
                    <Button variant="ghost" className="text-primary font-black uppercase tracking-[0.2em] hover:tracking-[0.3em] transition-all group flex items-center gap-2 mx-auto text-xs md:text-sm">
                        View Full Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
