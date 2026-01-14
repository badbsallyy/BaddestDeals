"use client";

import { cn } from "@/lib/utils";
import { motion, MotionValue, useScroll, useTransform, useSpring } from "framer-motion";
import React, { useRef } from "react";

export const HeroParallax = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    springConfig
  );

  return (
    <motion.div
      ref={ref}
      style={{ y: translateY }}
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxSection = ({
  children,
  offset = 50,
  className,
}: {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={cn("", className)}>
      {children}
    </motion.div>
  );
};

export const FadeInWhenVisible = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({
  children,
  className,
  staggerChildren = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  className,
}: {
  items: Array<{ content: React.ReactNode }>;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}) => {
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 40;
      case "normal":
        return 20;
      case "fast":
        return 10;
    }
  };

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: getSpeed(),
            ease: "linear",
          },
        }}
      >
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex-shrink-0">
            {item.content}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
