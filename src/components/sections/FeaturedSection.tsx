"use client";

import { motion } from "framer-motion";
import React from "react";
import { deals } from "@/data/deals";
import { SpotlightCard } from "@/components/ui/animated-card";
import { FadeInWhenVisible } from "@/components/ui/scroll-animations";
import { AnimatedButton } from "@/components/ui/buttons";
import { Crown, ArrowRight, Star, Flame, TrendingUp } from "lucide-react";

export const FeaturedSection = () => {
  const featuredDeals = deals.filter((deal) => deal.featured).slice(0, 3);

  return (
    <section id="featured" className="relative py-20 sm:py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[150px]" />
        <motion.div
          className="absolute top-0 right-0 w-[300px] h-[300px] bg-fuchsia-600/10 rounded-full blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInWhenVisible>
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-sm mb-6"
            >
              <Crown className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-yellow-400 font-medium">Premium Deals</span>
            </motion.div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Die{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                heißesten Angebote
              </span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Unsere handverlesenen Top-Deals mit den größten Rabatten - nur für kurze Zeit verfügbar.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredDeals.map((deal, index) => (
            <FadeInWhenVisible key={deal.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />
                
                <div className="relative rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-medium text-sm">{deal.rating}</span>
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white font-bold shadow-lg"
                      >
                        <Flame className="w-4 h-4" />
                        -{deal.discount}%
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-xs text-violet-400 font-medium uppercase tracking-wider">
                      <TrendingUp className="w-3 h-3" />
                      {deal.category} · {deal.store}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white line-clamp-2">
                      {deal.title}
                    </h3>
                    
                    <p className="text-white/50 text-sm line-clamp-2">
                      {deal.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-end gap-3">
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        {deal.discountedPrice.toFixed(2)}€
                      </div>
                      <div className="text-lg text-white/40 line-through mb-0.5">
                        {deal.originalPrice.toFixed(2)}€
                      </div>
                    </div>

                    {/* Savings */}
                    <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-green-500/10 border border-green-500/20">
                      <span className="text-green-400 font-medium">
                        Du sparst: {(deal.originalPrice - deal.discountedPrice).toFixed(2)}€
                      </span>
                    </div>

                    {/* CTA */}
                    <motion.a
                      href={deal.link}
                      className="block"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-center flex items-center justify-center gap-2 hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/25">
                        Jetzt zuschlagen
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* View All CTA */}
        <FadeInWhenVisible delay={0.4}>
          <div className="flex justify-center mt-12 sm:mt-16">
            <AnimatedButton size="lg" variant="outline">
              Alle Premium Deals ansehen
              <ArrowRight className="w-5 h-5" />
            </AnimatedButton>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};
