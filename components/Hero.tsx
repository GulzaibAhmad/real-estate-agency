"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Workflow,
  Calendar,
  MessageCircle,
  BarChart3,
  PhoneCall,
} from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary pt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-highlight/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-accent/10 blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary-accent/20 bg-secondary-accent/10 px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary-accent" />
              </span>
              <span className="text-sm font-medium text-secondary-accent">
                AI Automation for Real Estate
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              AI Automation Built Exclusively For{" "}
              <span className="text-secondary-accent">Real Estate Agencies</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-neutral sm:text-xl"
            >
              Automate lead response, client engagement, CRM workflows, and
              administrative tasks — so your agents focus on closing deals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-secondary-accent px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-secondary-accent/90"
              >
                Book Free Consultation
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
              >
                Explore Services
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/50"
            >
              {[
                "AI-first",
                "Built for Real Estate",
                "Faster Lead Response",
                "CRM Integrations",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4 text-secondary-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-accent/20">
                    <Workflow className="h-5 w-5 text-secondary-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Automation Dashboard
                    </p>
                    <p className="text-xs text-white/40">
                      7 workflows active
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { icon: Bot, title: "Lead AI Chatbot", status: "Active", color: "text-secondary-accent" },
                    { icon: Calendar, title: "Appointment Scheduler", status: "Active", color: "text-secondary-accent" },
                    { icon: MessageCircle, title: "WhatsApp Flow", status: "Active", color: "text-secondary-accent" },
                    { icon: BarChart3, title: "Lead Scoring", status: "Active", color: "text-secondary-accent" },
                    { icon: PhoneCall, title: "Voice AI Agent", status: "Active", color: "text-secondary-accent" },
                    { icon: Workflow, title: "CRM Pipeline", status: "Active", color: "text-secondary-accent" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary-accent/10">
                          <item.icon className="h-4 w-4 text-secondary-accent" />
                        </div>
                        <span className="text-sm font-medium text-white/80">
                          {item.title}
                        </span>
                      </div>
                      <span className={`text-xs font-medium ${item.color}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary-accent/20">
                    <BarChart3 className="h-4 w-4 text-secondary-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40">Leads today</p>
                    <p className="text-sm font-bold text-white">+47</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-6 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-highlight/20">
                    <Bot className="h-4 w-4 text-highlight" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40">Conversations</p>
                    <p className="text-sm font-bold text-white">1,284</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
