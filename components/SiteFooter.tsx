"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  CONTACT_HASH,
  EMAIL,
  INSTAGRAM_URL,
  PHONE,
  PHONE_TEL,
  WHATSAPP_URL,
  X_URL,
} from "@/lib/contact";
import { motionTransition, viewportOnce } from "@/lib/motion";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/audience", label: "Audience" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const packageLinks = [
  { href: "/packages#stage-1", label: "Stage 1 — Start Online" },
  { href: "/packages#stage-2", label: "Stage 2 — Grow" },
  { href: "/packages#stage-3", label: "Stage 3 — Scale" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const socialLinks: {
  href: string;
  label: string;
  icon: LucideIcon | typeof InstagramIcon;
}[] = [
  { href: WHATSAPP_URL, label: "WhatsApp", icon: MessageCircle },
  { href: `mailto:${EMAIL}`, label: "Email", icon: Mail },
  { href: INSTAGRAM_URL, label: "Instagram", icon: InstagramIcon },
];

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "group inline-flex items-center text-sm text-white/75 transition hover:text-white";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-tint transition-all duration-300 group-hover:w-full" />
        </span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-tint transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#10062f] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] bg-[#2f147d] lg:block [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[42%] bg-[#6d3ff0]/50 lg:block [clip-path:polygon(60%_0,100%_0,100%_38%,78%_38%,100%_100%,55%_100%,18%_55%,50%_55%,18%_15%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={motionTransition(0, 0.45)}
          className="flex flex-col gap-6 border-b border-white/10 py-12 md:flex-row md:items-center md:justify-between md:py-14"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Ready to launch?
            </p>
            <p className="mt-2 text-xl font-black sm:text-2xl">
              Start at $99. Scale beyond limits.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/packages"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "w-full border-white bg-white text-[#10062f] hover:bg-brand-tint sm:w-auto",
              })}
            >
              View Packages
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href={CONTACT_HASH}
              className={buttonVariants({
                variant: "ghost",
                size: "lg",
                className:
                  "w-full border border-white/40 text-white hover:bg-white/10 hover:text-white sm:w-auto",
              })}
            >
              1 Click Connect
            </Link>
          </div>
        </motion.div>

        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={motionTransition(0.04, 0.4)}
            className="lg:col-span-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-2xl bg-white/5 px-3 py-2 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <Image
                src="/icon_trans_bg.png"
                alt="Ascalify logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full bg-brand-tint object-contain p-1"
              />
              <span className="text-left">
                <span className="block text-sm font-black">Ascalify</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-tint">
                  Scale Beyond Limits
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
              Website packages for freelancers, growing businesses, and
              enterprises — built to launch fast and scale with you.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:border-brand-tint/50 hover:bg-brand/30 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs font-bold text-white/80 transition hover:border-brand-tint/50 hover:bg-brand/30 hover:text-white"
              >
                X
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={motionTransition(0.08, 0.4)}
            className="lg:col-span-2 lg:col-start-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={motionTransition(0.12, 0.4)}
            className="lg:col-span-3"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
              Packages
            </p>
            <ul className="mt-4 space-y-2.5">
              {packageLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={motionTransition(0.16, 0.4)}
            className="lg:col-span-3"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
              Contact
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-white/75 transition hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/30">
                    <MessageCircle className="h-4 w-4 text-brand-tint" />
                  </span>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2.5 text-sm text-white/75 transition hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/30">
                    <Mail className="h-4 w-4 text-brand-tint" />
                  </span>
                  <span className="break-all">{EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={PHONE_TEL}
                  className="flex items-center gap-2.5 text-sm text-white/75 transition hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/30">
                    <Phone className="h-4 w-4 text-brand-tint" />
                  </span>
                  {PHONE}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Ascalify. All rights reserved.</p>
          <p className="font-medium text-white/55">
            Website packages · Start online · Grow · Scale
          </p>
        </div>
      </div>
    </footer>
  );
}
