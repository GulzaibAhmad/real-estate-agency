"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";

interface SectionTitleProps {
  badge: string;
  title: string;
  description: string;
  align?: "center" | "left";
  children?: ReactNode;
}

export default function SectionTitle({
  badge,
  title,
  description,
  align = "center",
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
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="inline-block rounded-full border border-secondary/20 bg-secondary/5 px-4 py-1.5 text-sm font-medium text-secondary">
        {badge}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
        {description}
      </p>
      {children}
    </motion.div>
  );
}
