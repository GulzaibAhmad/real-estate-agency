"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { getIcon } from "@/lib/iconMapper";
import { services } from "@/data/services";
import SectionTitle from "./SectionTitle";

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Our Services"
          title="Automation That Drives Results"
          description="End-to-end AI automation built specifically for real estate agencies and brokerages — from lead capture to closed deals."
        />

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05, delayChildren: 0.2 },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                  },
                }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-neutral bg-white p-7 transition-all hover:border-secondary-accent/30 hover:shadow-lg hover:shadow-secondary-accent/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-secondary-accent/10">
                  {Icon && (
                    <Icon className="h-6 w-6 text-primary-accent transition-colors group-hover:text-secondary-accent" />
                  )}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/60">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
