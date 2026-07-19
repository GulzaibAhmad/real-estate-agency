"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";

interface SectionTitleProps {
  badge: string;
  title: string;
  description: string;
  align?: "center" | "left";
  dark?: boolean;
  children?: ReactNode;
}

export default function SectionTitle({
  badge,
  title,
  description,
  align = "center",
  dark = false,
  children,
}: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span
        className={`inline-block rounded-full border px-4 py-1.5 text-sm font-medium ${
          dark
            ? "border-secondary-accent/20 bg-secondary-accent/10 text-secondary-accent"
            : "border-secondary-accent/30 bg-secondary-accent/10 text-primary-accent"
        }`}
      >
        {badge}
      </span>
      <h2
        className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mx-auto mt-4 max-w-2xl text-lg ${
          dark ? "text-neutral" : "text-foreground/60"
        }`}
      >
        {description}
      </p>
      {children}
    </motion.div>
  );
}
