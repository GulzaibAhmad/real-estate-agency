"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { trustedCompanies } from "@/data/trusted";

export default function Trusted() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="border-y border-slate-100 bg-white py-12">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium uppercase tracking-wider text-slate-400"
        >
          Trusted by forward-thinking real estate companies
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {trustedCompanies.map((company, i) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-2 text-slate-300 grayscale transition-all hover:grayscale-0 hover:text-slate-500"
            >
              <span className="text-2xl">{company.logo}</span>
              <span className="text-base font-semibold tracking-wide">
                {company.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
