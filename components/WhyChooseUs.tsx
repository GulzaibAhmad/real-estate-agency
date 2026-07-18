"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { getIcon } from "@/lib/iconMapper";
import { whyChooseUs } from "@/data/whyChooseUs";
import SectionTitle from "./SectionTitle";

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="bg-white py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Why NexXaBase"
          title="Why Choose NexXaBase"
          description="We combine deep real estate expertise with cutting-edge AI technology to deliver automation systems that actually move the needle."
        />

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.2 },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyChooseUs.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-6 text-center shadow-sm transition-all hover:border-secondary/20 hover:shadow-lg hover:shadow-secondary/5"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 transition-colors group-hover:bg-secondary/15">
                  {Icon && (
                    <Icon className="h-7 w-7 text-secondary" />
                  )}
                </div>
                <h3 className="mb-2 text-base font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
