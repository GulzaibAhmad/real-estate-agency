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
    <section id="services" className="bg-slate-50 py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Our Services"
          title="Our AI Automation Services"
          description="End-to-end automation solutions designed specifically for the real estate industry. From lead capture to closing, we automate every step."
        />

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.06, delayChildren: 0.2 },
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
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-7 shadow-sm transition-all hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 transition-colors group-hover:bg-secondary/20">
                    {Icon && (
                      <Icon className="h-6 w-6 text-secondary" />
                    )}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
