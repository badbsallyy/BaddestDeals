"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { deals, categories, type Deal } from "@/data/deals";
import { SpotlightCard } from "@/components/ui/animated-card";
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations";
import { AnimatedButton, GlassButton } from "@/components/ui/buttons";
import { 
  ShoppingBag, 
  Star, 
  Clock, 
  ArrowRight, 
  ExternalLink,
  Flame,
  BadgePercent
} from "lucide-react";

const DealCard = ({ deal, index }: { deal: Deal; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StaggerItem>
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <SpotlightCard className="h-full">
          {/* Image Container */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
            <motion.img
              src={deal.image}
              alt={deal.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Discount Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="absolute top-3 right-3"
            >
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white font-bold text-sm shadow-lg">
                <Flame className="w-4 h-4" />
                -{deal.discount}%
              </div>
            </motion.div>

            {/* Featured Badge */}
            {deal.featured && (
              <div className="absolute top-3 left-3">
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium border border-white/20">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  Featured
                </div>
              </div>
            )}

            {/* Store Badge */}
            <div className="absolute bottom-3 left-3">
              <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium border border-white/20">
                {deal.store}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            {/* Category */}
            <div className="text-xs text-violet-400 font-medium uppercase tracking-wider">
              {deal.category}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white line-clamp-2 leading-snug">
              {deal.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-white/50 line-clamp-2">
              {deal.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < Math.floor(deal.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-white/20"
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-white/40">{deal.rating}</span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3 pt-2">
              <div className="text-2xl font-bold text-white">
                {deal.discountedPrice.toFixed(2)}€
              </div>
              <div className="text-base text-white/40 line-through mb-0.5">
                {deal.originalPrice.toFixed(2)}€
              </div>
              <div className="ml-auto flex items-center gap-1 text-xs text-white/40">
                <Clock className="w-3 h-3" />
                Läuft ab
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href={deal.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium text-center flex items-center justify-center gap-2 hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/20">
                <ShoppingBag className="w-4 h-4" />
                Zum Deal
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          </div>
        </SpotlightCard>
      </motion.div>
    </StaggerItem>
  );
};

export const DealsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [showAll, setShowAll] = useState(false);

  const filteredDeals = activeCategory === "Alle" 
    ? deals 
    : deals.filter(deal => deal.category === activeCategory);

  const displayedDeals = showAll ? filteredDeals : filteredDeals.slice(0, 6);

  return (
    <section id="deals" className="relative py-20 sm:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-fuchsia-600/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInWhenVisible>
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
            >
              <BadgePercent className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-white/80">Aktuelle Angebote</span>
            </motion.div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Entdecke die{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                besten Deals
              </span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Handverlesene Angebote aus den beliebtesten Online-Shops, täglich aktualisiert für maximale Ersparnis.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Category Filter */}
        <FadeInWhenVisible delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                onClick={() => {
                  setActiveCategory(category.name);
                  setShowAll(false);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.name
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                )}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>
        </FadeInWhenVisible>

        {/* Deals Grid */}
        <AnimatePresence mode="wait">
          <StaggerContainer
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {displayedDeals.map((deal, index) => (
              <DealCard key={deal.id} deal={deal} index={index} />
            ))}
          </StaggerContainer>
        </AnimatePresence>

        {/* Show More Button */}
        {filteredDeals.length > 6 && !showAll && (
          <FadeInWhenVisible delay={0.4}>
            <div className="flex justify-center mt-12">
              <AnimatedButton
                onClick={() => setShowAll(true)}
                variant="secondary"
                size="lg"
              >
                Alle {filteredDeals.length} Deals anzeigen
                <ArrowRight className="w-5 h-5" />
              </AnimatedButton>
            </div>
          </FadeInWhenVisible>
        )}
      </div>
    </section>
  );
};
