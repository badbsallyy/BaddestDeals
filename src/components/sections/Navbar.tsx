"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { AnimatedButton, GlassButton } from "@/components/ui/buttons";
import { Menu, X, Zap } from "lucide-react";

const navItems = [
  { name: "Deals", href: "#deals" },
  { name: "Kategorien", href: "#categories" },
  { name: "Top Angebote", href: "#featured" },
  { name: "Newsletter", href: "#newsletter" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <motion.div
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(139, 92, 246, 0.4)",
                      "0 0 40px rgba(139, 92, 246, 0.6)",
                      "0 0 20px rgba(139, 92, 246, 0.4)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-5 h-5 text-white" />
                </motion.div>
              </div>
              <span className="text-xl font-bold text-white hidden sm:block">
                Baddest<span className="text-violet-400">Deals</span>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-white/5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <GlassButton className="text-sm">Anmelden</GlassButton>
              <AnimatedButton size="sm">
                <Zap className="w-4 h-4" />
                Jetzt sparen
              </AnimatedButton>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 pt-20 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-white"
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="flex flex-col gap-4 mt-6 w-full max-w-xs">
                <GlassButton className="w-full">Anmelden</GlassButton>
                <AnimatedButton className="w-full">
                  <Zap className="w-4 h-4" />
                  Jetzt sparen
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
