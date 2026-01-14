"use client";

import { motion } from "framer-motion";
import React from "react";
import { FadeInWhenVisible } from "@/components/ui/scroll-animations";
import { Zap, Github, Twitter, Instagram, Mail, Heart, ArrowUpRight } from "lucide-react";

const footerLinks = {
  deals: [
    { name: "Alle Deals", href: "#deals" },
    { name: "Elektronik", href: "#" },
    { name: "Mode", href: "#" },
    { name: "Gaming", href: "#" },
    { name: "Haushalt", href: "#" },
  ],
  company: [
    { name: "Über uns", href: "#" },
    { name: "Karriere", href: "#" },
    { name: "Partner werden", href: "#" },
    { name: "Presse", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Kontakt", href: "#" },
    { name: "Datenschutz", href: "#" },
    { name: "Impressum", href: "#" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/5">
      {/* Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <FadeInWhenVisible className="col-span-2 md:col-span-1">
            <div className="space-y-4">
              <motion.a
                href="#"
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">
                  Baddest<span className="text-violet-400">Deals</span>
                </span>
              </motion.a>
              <p className="text-white/50 text-sm leading-relaxed">
                Die beste Plattform für Schnäppchenjäger. Täglich neue Deals aus den beliebtesten Online-Shops.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Links Columns */}
          <FadeInWhenVisible delay={0.1}>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Deals
              </h4>
              <ul className="space-y-3">
                {footerLinks.deals.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                      whileHover={{ x: 3 }}
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Unternehmen
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                      whileHover={{ x: 3 }}
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.3}>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Support
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                      whileHover={{ x: 3 }}
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInWhenVisible>
        </div>

        {/* Bottom Bar */}
        <FadeInWhenVisible delay={0.4}>
          <div className="pt-8 border-t border-white/5">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/40 text-sm text-center sm:text-left">
                © {new Date().getFullYear()} BaddestDeals. Alle Rechte vorbehalten.
              </p>
              <p className="text-white/40 text-sm flex items-center gap-1">
                Mit <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> gemacht in Deutschland
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </footer>
  );
};
