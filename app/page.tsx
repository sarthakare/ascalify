"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Atom,
  Cloud,
  Container,
  Database,
  FileCode2,
  Gauge,
  Handshake,
  Layers3,
  Leaf,
  PlugZap,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const whatsappUrl = "https://wa.me/919970366428";
  const email = "sathakare12@gmail.com";
  const phone = "+91 99703 66428";
  const navItems = useMemo(
    () => [
      { id: "hero", label: "Home" },
      { id: "services", label: "Services" },
      { id: "why", label: "Why Us" },
      { id: "process", label: "Process" },
      { id: "tech", label: "Stack" },
      { id: "testimonials", label: "Reviews" },
      { id: "faq", label: "FAQ" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );

  const [activeSection, setActiveSection] = useState("hero");
  const reveal = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerWrap = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0.2, 0.45, 0.75], rootMargin: "-20% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navItems]);

  const services = [
    {
      title: "Custom SaaS Development",
      icon: Layers3,
      accent: "from-indigo-500 to-violet-500",
      description:
        "We design and build tailored SaaS platforms aligned with your exact business workflow.",
    },
    {
      title: "Web Application Development",
      icon: Sparkles,
      accent: "from-sky-500 to-cyan-500",
      description:
        "High-performance web apps with modern UI, scalable architecture, and secure APIs.",
    },
    {
      title: "Mobile App Development",
      icon: Smartphone,
      accent: "from-emerald-500 to-teal-500",
      description:
        "Cross-platform and native mobile apps that deliver smooth user experiences.",
    },
    {
      title: "System Integrations",
      icon: PlugZap,
      accent: "from-orange-500 to-amber-500",
      description:
        "Connect payments, CRMs, ERPs, analytics, and third-party services into one flow.",
    },
    {
      title: "Maintenance and Support",
      icon: Wrench,
      accent: "from-fuchsia-500 to-pink-500",
      description:
        "Ongoing improvements, monitoring, and support to keep your product stable and growing.",
    },
  ];

  const reasons = [
    "Built around your business, not generic templates.",
    "Transparent communication from planning to launch.",
    "Fast delivery with a quality-first engineering approach.",
    "Long-term support for updates, scaling, and optimization.",
  ];

  const process = [
    {
      title: "Discover",
      description: "Understand goals, users, and the business process in detail.",
    },
    {
      title: "Plan",
      description: "Define scope, milestones, architecture, and delivery timeline.",
    },
    {
      title: "Build",
      description: "Develop your product in iterative sprints with regular updates.",
    },
    {
      title: "Launch",
      description: "Deploy confidently with performance, security, and QA checks.",
    },
    {
      title: "Support",
      description: "Improve, scale, and maintain your application after go-live.",
    },
  ];

  const techStack = [
    { name: "React", icon: Atom, color: "text-sky-500" },
    { name: "Next.js", icon: Sparkles, color: "text-indigo-500" },
    { name: "Node.js", icon: Server, color: "text-emerald-500" },
    { name: "TypeScript", icon: FileCode2, color: "text-blue-500" },
    { name: "PostgreSQL", icon: Database, color: "text-cyan-600" },
    { name: "MongoDB", icon: Leaf, color: "text-green-600" },
    { name: "AWS", icon: Cloud, color: "text-orange-500" },
    { name: "Docker", icon: Container, color: "text-sky-600" },
  ];

  const testimonials = [
    {
      quote:
        "Ascalify delivered exactly what our team needed. The platform matched our workflow from day one.",
      author: "Operations Lead, Logistics Startup",
    },
    {
      quote:
        "Their team moved quickly and communicated clearly. We launched faster than expected.",
      author: "Founder, Education Platform",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to build a custom product?",
      answer:
        "Timelines depend on scope, but most MVPs are delivered in 6 to 12 weeks with phased rollouts.",
    },
    {
      question: "Do you work with existing systems and codebases?",
      answer:
        "Yes. We can extend existing products, integrate with third-party tools, and modernize legacy stacks.",
    },
    {
      question: "Can you support us after launch?",
      answer:
        "Yes. We provide ongoing support, maintenance, and roadmap-based feature development.",
    },
    {
      question: "Is every solution customizable?",
      answer:
        "Absolutely. Customization is core to our approach, from features and workflows to reporting.",
    },
  ];

  return (
    <main className="relative w-full overflow-hidden bg-linear-to-b from-fuchsia-50 via-cyan-50 to-amber-50 text-zinc-900 dark:from-slate-950 dark:via-indigo-950/70 dark:to-fuchsia-950/40 dark:text-zinc-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.26),transparent_55%),radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.28),transparent_45%),radial-gradient(circle_at_80%_25%,rgba(251,146,60,0.24),transparent_45%)] dark:bg-[radial-gradient(circle_at_top,rgba(232,121,249,0.35),transparent_55%),radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.3),transparent_45%),radial-gradient(circle_at_80%_25%,rgba(251,146,60,0.25),transparent_45%)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl dark:bg-fuchsia-500/25"
        animate={{ x: [0, 40, -20, 0], y: [0, -20, 20, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-80px] top-52 -z-10 h-80 w-80 rounded-full bg-cyan-400/30 blur-3xl dark:bg-cyan-500/25"
        animate={{ x: [0, -35, 15, 0], y: [0, 25, -15, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-24 left-1/3 -z-10 h-64 w-64 rounded-full bg-amber-300/30 blur-3xl dark:bg-amber-400/20"
        animate={{ x: [0, -25, 20, 0], y: [0, 20, -25, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 dark:opacity-50"
        animate={{
          background: [
            "linear-gradient(130deg, rgba(244,114,182,0.10) 0%, rgba(56,189,248,0.08) 45%, rgba(251,191,36,0.08) 100%)",
            "linear-gradient(160deg, rgba(56,189,248,0.12) 0%, rgba(244,114,182,0.10) 45%, rgba(251,191,36,0.10) 100%)",
            "linear-gradient(130deg, rgba(244,114,182,0.10) 0%, rgba(56,189,248,0.08) 45%, rgba(251,191,36,0.08) 100%)",
          ],
        }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <header className="sticky top-3 z-30 mx-auto mb-4 w-full max-w-6xl px-6">
        <nav className="rounded-2xl border border-zinc-200/70 bg-white/70 px-4 py-3 shadow-xl shadow-indigo-500/10 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-900/60">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <a href="#hero" className="inline-flex items-center gap-2 text-sm font-bold">
              <Image
                src="/icon_trans_bg.png"
                alt="Ascalify logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
                priority
              />
              Ascalify
            </a>
            <ul className="flex flex-wrap items-center gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                      activeSection === item.id
                        ? "bg-indigo-600 text-white"
                        : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <motion.section
        id="hero"
        initial="hidden"
        animate="visible"
        variants={staggerWrap}
        className="mx-auto max-w-6xl px-6 py-16 md:py-24"
      >
        <motion.p
          variants={reveal}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-700 dark:text-fuchsia-300"
        >
          Ascalify
        </motion.p>
        <motion.h1
          variants={reveal}
          transition={{ duration: 0.6 }}
          className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl"
        >
          Customizable{" "}
          <span className="bg-linear-to-r from-fuchsia-600 via-cyan-500 to-amber-500 bg-clip-text text-transparent">
            SaaS and Apps
          </span>{" "}
          with Enterprise-Grade Execution
        </motion.h1>
        <motion.p
          variants={reveal}
          transition={{ duration: 0.7 }}
          className="mt-5 max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300 md:text-lg"
        >
          We build custom SaaS platforms, web applications, and mobile products
          tailored to your operations, users, and growth goals.
        </motion.p>
        <motion.div
          variants={reveal}
          transition={{ duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-linear-to-r from-fuchsia-600 via-violet-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:from-fuchsia-500 hover:to-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Chat on WhatsApp
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>
          <motion.a
            href={`mailto:${email}`}
            className="inline-flex rounded-full border border-zinc-300 bg-white/90 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Email Us
          </motion.a>
        </motion.div>

        <motion.div
          variants={reveal}
          transition={{ duration: 0.9 }}
          className="mt-10 grid gap-4 sm:grid-cols-3"
        >
          {[
            { label: "Projects Delivered", value: "50+" },
            { label: "Average Launch Time", value: "8-12 Weeks" },
            { label: "Support Availability", value: "Ongoing" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-zinc-200/80 bg-white/85 p-4 shadow-md backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70"
            >
              <p className="text-2xl font-bold text-fuchsia-600 dark:text-fuchsia-400">
                {metric.value}
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <h2 className="text-2xl font-bold md:text-3xl">Services</h2>
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid gap-5 md:grid-cols-2"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={reveal}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-lg shadow-fuchsia-500/10 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80"
              >
                <span
                  className={`inline-flex rounded-xl bg-linear-to-r ${service.accent} p-2 text-white`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.section>

      <motion.section
        id="why"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <h2 className="text-2xl font-bold md:text-3xl">Why Ascalify</h2>
        <motion.ul
          variants={staggerWrap}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-6 grid gap-4 md:grid-cols-2"
        >
          {reasons.map((reason, idx) => {
            const icons = [ShieldCheck, Gauge, Rocket, Handshake];
            const Icon = icons[idx % icons.length];
            return (
              <motion.li
                key={reason}
                variants={reveal}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-white/70 bg-white/90 p-4 text-sm leading-6 shadow-md shadow-cyan-500/10 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80"
              >
                <Icon className="mb-3 h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400" />
                {reason}
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.section>

      <motion.section
        id="process"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <h2 className="text-2xl font-bold md:text-3xl">How We Work</h2>
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-8 grid gap-5 md:grid-cols-5"
        >
          {process.map((step) => (
            <motion.article
              key={step.title}
              variants={reveal}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -5 }}
                className="rounded-2xl border border-white/70 bg-white/90 p-5 shadow-md shadow-amber-500/10 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80"
            >
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                {step.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="tech"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={reveal}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <h2 className="text-2xl font-bold md:text-3xl">Tech Stack</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {techStack.map((item) => {
            const Icon = item.icon;
            return (
              <motion.span
                key={item.name}
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-linear-to-r from-white to-fuchsia-50/70 px-4 py-2 text-sm shadow-md shadow-fuchsia-500/10 dark:border-zinc-700 dark:from-zinc-900 dark:to-violet-900/30"
              >
                <Icon className={`h-4 w-4 ${item.color}`} />
                {item.name}
              </motion.span>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        id="testimonials"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <h2 className="text-2xl font-bold md:text-3xl">Testimonials</h2>
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid gap-5 md:grid-cols-2"
        >
          {testimonials.map((testimonial) => (
            <motion.blockquote
              key={testimonial.author}
              variants={reveal}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-lg shadow-cyan-500/10 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80"
            >
              <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                &quot;{testimonial.quote}&quot;
              </p>
              <footer className="mt-4 text-sm font-semibold">
                {testimonial.author}
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="faq"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <h2 className="text-2xl font-bold md:text-3xl">FAQ</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-zinc-200 bg-white/95 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <summary className="cursor-pointer text-base font-semibold">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={reveal}
        transition={{ duration: 0.55 }}
        className="border-t border-zinc-200/80 bg-white/75 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/90"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold md:text-3xl">
            Let&apos;s build your next product
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-700 dark:text-zinc-300 md:text-base">
            Ready to discuss your idea? Reach out directly and we can start with
            a short discovery conversation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-linear-to-r from-fuchsia-600 via-violet-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:from-fuchsia-500 hover:to-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Message on WhatsApp
            </motion.a>
            <motion.a
              href={`mailto:${email}`}
              className="inline-flex rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:border-zinc-700 dark:hover:bg-zinc-800"
              whileHover={{ y: -2 }}
            >
              {email}
            </motion.a>
            <motion.a
              href="tel:+919970366428"
              className="inline-flex rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:border-zinc-700 dark:hover:bg-zinc-800"
              whileHover={{ y: -2 }}
            >
              {phone}
            </motion.a>
          </div>
          <p className="mt-10 text-xs text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Ascalify. All rights reserved.
          </p>
        </div>
      </motion.section>
    </main>
  );
}
