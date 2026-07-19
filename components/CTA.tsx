"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Send, CheckCircle } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = "Name is required";
    if (!formData.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = "Enter a valid email";
    }
    if (!formData.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[e.target.name];
        return next;
      });
    }
  }

  return (
    <section id="contact" className="bg-primary py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-primary-accent p-12 sm:p-16 lg:p-20"
        >
          <div className="absolute inset-0">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-secondary-accent/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-highlight/5 blur-3xl" />
          </div>

          <div className="relative text-center">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
            >
              Ready to Automate Your{" "}
              <span className="text-secondary-accent">
                Brokerage?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-neutral/70"
            >
              Book a free 30-minute strategy call. We will analyze your brokerage
              operations and show you exactly how AI can save time and increase
              conversions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-secondary-accent px-8 py-4 text-sm font-semibold text-primary transition-all hover:bg-secondary-accent/90"
              >
                Book Free Strategy Call
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <button
                onClick={() => {
                  setFormOpen((v) => !v);
                  if (submitted) {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5"
              >
                <Mail size={16} />
                {formOpen ? "Close Form" : "Or Email Us"}
              </button>
            </motion.div>

            <AnimatePresence>
              {formOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mx-auto mt-10 max-w-lg text-left">
                    {submitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
                      >
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary-accent/20">
                          <CheckCircle className="h-7 w-7 text-secondary-accent" />
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          Message Sent
                        </h3>
                        <p className="mt-2 text-sm text-neutral/70">
                          We will get back to you within 24 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
                      >
                        <h3 className="mb-6 text-center text-lg font-semibold text-white">
                          Send Us a Message
                        </h3>

                        <div className="space-y-4">
                          <div>
                            <label
                              htmlFor="cta-name"
                              className="mb-1.5 block text-sm font-medium text-neutral/70"
                            >
                              Full Name
                            </label>
                            <input
                              id="cta-name"
                              name="name"
                              type="text"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-secondary-accent focus:ring-1 focus:ring-secondary-accent ${
                                errors.name ? "border-red-400" : "border-white/10"
                              }`}
                            />
                            {errors.name && (
                              <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="cta-email"
                              className="mb-1.5 block text-sm font-medium text-neutral/70"
                            >
                              Email Address
                            </label>
                            <input
                              id="cta-email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@brokerage.com"
                              className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-secondary-accent focus:ring-1 focus:ring-secondary-accent ${
                                errors.email ? "border-red-400" : "border-white/10"
                              }`}
                            />
                            {errors.email && (
                              <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="cta-message"
                              className="mb-1.5 block text-sm font-medium text-neutral/70"
                            >
                              Message
                            </label>
                            <textarea
                              id="cta-message"
                              name="message"
                              rows={4}
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Tell us about your brokerage and automation goals..."
                              className={`w-full resize-none rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-secondary-accent focus:ring-1 focus:ring-secondary-accent ${
                                errors.message ? "border-red-400" : "border-white/10"
                              }`}
                            />
                            {errors.message && (
                              <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                            )}
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-secondary-accent py-3 text-sm font-semibold text-primary transition-all hover:bg-secondary-accent/90"
                        >
                          <Send size={16} />
                          Send Message
                        </button>
                      </form>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
