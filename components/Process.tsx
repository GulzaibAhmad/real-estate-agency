"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { getIcon } from "@/lib/iconMapper";
import { processSteps } from "@/data/process";
import SectionTitle from "./SectionTitle";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="bg-slate-50 py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Our Process"
          title="How We Work"
          description="A proven four-step process that transforms your real estate operations with AI automation — from discovery to continuous optimization."
        />

        <div className="relative mt-8">
          {/* Connection line - desktop only */}
          <div className="absolute top-24 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-secondary/20 to-transparent lg:block" />

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.3 },
              },
            }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((step) => {
              const Icon = getIcon(step.icon);
              return (
                <motion.div
                  key={step.id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                  className="relative text-center"
                >
                  <div className="relative mx-auto mb-6">
                    <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 shadow-xl shadow-secondary/20">
                      {Icon && (
                        <Icon className="h-8 w-8 text-white" />
                      )}
                    </div>
                    <span className="absolute -top-3 -right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-secondary shadow-lg">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-primary">
                    {step.title}
                  </h3>
                  <p className="mx-auto max-w-xs text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
