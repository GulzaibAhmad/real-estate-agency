"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { teamMembers } from "@/data/team";
import SectionTitle from "./SectionTitle";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="bg-white py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Our Team"
          title="Meet the Experts Behind NexXaBase"
          description="A focused team of AI engineers, real estate strategists, and automation specialists building the systems that help brokerages scale."
        />

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
          className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4 },
                },
              }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-2xl border border-neutral bg-white transition-all hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary-accent shadow-lg backdrop-blur-sm transition-all hover:bg-secondary-accent hover:text-primary opacity-0 group-hover:opacity-100"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-primary">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-secondary-accent">
                  {member.designation}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
