"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, disabled, type, onClick }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full overflow-hidden";

    const variants = {
      primary:
        "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40",
      secondary:
        "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border border-white/10",
      outline:
        "border-2 border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white",
      ghost: "text-white/70 hover:text-white hover:bg-white/10",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
      </motion.button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export const ShimmerButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white transition-all duration-300",
        "bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 bg-[length:200%_100%]",
        "shadow-[0_4px_30px_rgba(139,92,246,0.4)]",
        "hover:shadow-[0_4px_40px_rgba(139,92,246,0.6)]",
        "animate-shimmer",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export const GlassButton = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium",
        "bg-white/5 backdrop-blur-xl border border-white/10 text-white",
        "hover:bg-white/10 hover:border-white/20 transition-all duration-300",
        "shadow-lg shadow-black/20",
        className
      )}
    >
      {children}
    </motion.button>
  );
};

export const PulseButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white",
        "bg-gradient-to-r from-cyan-500 to-violet-500",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
