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
    <section id="why-us" className="bg-neutral py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Why NexXaBase"
          title="Why Agencies Choose NexXaBase"
          description="We combine deep real estate expertise with AI engineering to deliver automation systems that produce measurable business outcomes."
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
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyChooseUs.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                  },
                }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-transparent bg-white p-6 transition-all hover:border-secondary-accent/20 hover:shadow-lg hover:shadow-secondary-accent/5"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 transition-colors group-hover:bg-secondary-accent/10">
                  {Icon && (
                    <Icon className="h-7 w-7 text-primary-accent transition-colors group-hover:text-secondary-accent" />
                  )}
                </div>
                <h3 className="mb-2 text-base font-semibold text-primary text-center">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/60 text-center">
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
