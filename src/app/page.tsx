"use client";

import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { DealsSection } from "@/components/sections/DealsSection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgressBar } from "@/components/ui/scroll-animations";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <ScrollProgressBar />
      <Navbar />
      <HeroSection />
      <DealsSection />
      <FeaturedSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
