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
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 md:mb-10">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            placeholder="Search for chai, burgers, shakes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="h-14 pl-14 pr-6 rounded-full bg-background border shadow-sm font-medium text-base"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant={dietFilter === "all" ? "default" : "outline"}
                            onClick={() => setDietFilter("all")}
                            className="h-12 rounded-full font-bold uppercase text-[10px] tracking-widest px-6"
                        >
                            All Items
                        </Button>
                        <Button
                            variant={dietFilter === "veg" ? "default" : "outline"}
                            onClick={() => setDietFilter("veg")}
                            className={`h-12 rounded-full font-bold uppercase text-[10px] tracking-widest px-6 ${dietFilter === "veg" ? "bg-green-600 hover:bg-green-700 text-white" : "border-green-600 text-green-600 hover:bg-green-600/10"}`}
                        >
                            <Leaf className="w-4 h-4 mr-1.5" /> Veg
                        </Button>
                        <Button
                            variant={dietFilter === "nonveg" ? "default" : "outline"}
                            onClick={() => setDietFilter("nonveg")}
                            className={`h-12 rounded-full font-bold uppercase text-[10px] tracking-widest px-6 ${dietFilter === "nonveg" ? "bg-red-600 hover:bg-red-700 text-white" : "border-red-600 text-red-600 hover:bg-red-600/10"}`}
                        >
                            <Flame className="w-4 h-4 mr-1.5" /> Non-Veg
                        </Button>
                    </div>
                </div>

                <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                    <div className="flex justify-center mb-8 md:mb-12">
                        <TabsList className="bg-foreground p-1.5 rounded-full h-auto flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full shadow-2xl mx-auto border-none">
                            {menuCategories.map((cat) => (
                                <TabsTrigger
                                    key={cat.id}
                                    value={cat.id}
                                    className="rounded-full px-5 md:px-8 py-2.5 md:py-3.5 font-black text-[10px] md:text-xs uppercase tracking-widest data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-lg transition-all shrink-0 flex items-center justify-center gap-2 flex-none h-auto border-none text-background/60 hover:text-background"
                                >
                                    <span className="text-lg md:text-xl leading-none shrink-0">{cat.icon}</span>
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                {filteredMenu.map((item) => (
                                    <Card key={item.id} className="overflow-hidden border-none shadow-md hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group rounded-[1.5rem] bg-background flex flex-col">
                                        <CardHeader className="p-0 relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            {item.badge && (
                                                <Badge className="absolute top-3 left-3 bg-primary/90 text-white font-black uppercase text-[7px] md:text-[9px] px-3 py-1 rounded-full tracking-widest shadow-lg backdrop-blur-sm">
                                                    {item.badge}
                                                </Badge>
                                            )}
                                        </CardHeader>
                                        <CardContent className="p-4 md:p-5 flex flex-col gap-2 md:gap-3 flex-grow">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex gap-0.5 text-primary scale-90 origin-left">
                                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                                </div>
                                                <h3 className="text-lg md:text-xl font-bold font-display tracking-tight group-hover:text-primary transition-colors uppercase leading-tight">{item.name}</h3>
                                            </div>
                                            <p className="text-[12px] md:text-sm text-muted-foreground font-medium line-clamp-2 leading-snug">
                                                {item.description}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="px-4 md:px-5 pb-4 md:pb-5 pt-0 flex items-center justify-between mt-auto">
                                            <span className="text-xl md:text-2xl font-black text-primary">{item.price}</span>
                                            <Button variant="outline" className="h-8 md:h-10 border-primary/20 text-primary hover:bg-primary hover:text-white rounded-xl font-black text-[9px] uppercase tracking-widest px-4 transition-all group-hover:scale-105">
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
