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
} from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-secondary/5 pt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-sm font-medium text-accent">
                AI-Powered Real Estate Automation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              AI Automation That Helps{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Close More Deals
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed text-slate-500 sm:text-xl"
            >
              NexXaBase automates lead generation, CRM management, follow-ups,
              customer engagement, and productivity — so your real estate team
              can focus on what matters most: closing deals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-secondary/25 transition-all hover:bg-secondary/90 hover:shadow-secondary/40"
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
              >
                Explore Services
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-6 text-sm text-slate-400"
            >
              <div className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Free 30-min strategy call
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="rounded-3xl border border-slate-200/60 bg-white/70 p-8 shadow-2xl shadow-slate-200/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
                    <Workflow className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      Automation Dashboard
                    </p>
                    <p className="text-xs text-slate-400">
                      12 workflows active
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      icon: Bot,
                      title: "AI Chatbot",
                      status: "Active",
                      color: "text-accent",
                      bg: "bg-accent/10",
                    },
                    {
                      icon: Calendar,
                      title: "Auto Scheduling",
                      status: "Active",
                      color: "text-secondary",
                      bg: "bg-secondary/10",
                    },
                    {
                      icon: MessageCircle,
                      title: "WhatsApp Flow",
                      status: "Active",
                      color: "text-accent",
                      bg: "bg-accent/10",
                    },
                    {
                      icon: BarChart3,
                      title: "Lead Scoring",
                      status: "Active",
                      color: "text-secondary",
                      bg: "bg-secondary/10",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between rounded-xl border border-slate-100 bg-white/80 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg ${item.bg}`}
                        >
                          <item.icon className={`h-4 w-4 ${item.color}`} />
                        </div>
                        <span className="text-sm font-medium text-slate-700">
                          {item.title}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-medium ${item.color}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 rounded-2xl border border-slate-200/60 bg-white p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                    <BarChart3 className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Leads today</p>
                    <p className="text-sm font-bold text-primary">+47</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-6 rounded-2xl border border-slate-200/60 bg-white p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10">
                    <Bot className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Conversations</p>
                    <p className="text-sm font-bold text-primary">1,284</p>
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
