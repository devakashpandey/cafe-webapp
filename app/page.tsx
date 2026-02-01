"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Promotions } from "@/components/sections/Promotions";
import { About } from "@/components/sections/About";
import { Menu } from "@/components/sections/Menu";
import { Loyalty } from "@/components/sections/Loyalty";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { MapSection } from "@/components/sections/Map";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/sections/FloatingActions";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Promotions />
        <About />
        <Menu />
        <Loyalty />
        <Gallery />
        <Testimonials />
        <MapSection />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
