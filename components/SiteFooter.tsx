"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { contactPlatforms, CONTACT_HASH, EMAIL, PHONE } from "@/lib/contact";
import { motionTransition, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

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

const footerContactItems = contactPlatforms.filter((p) =>
  ["WhatsApp", "Email", "Phone"].includes(p.name),
);

function PlatformIcon({
  name,
  src,
  size = "sm",
}: {
  name: string;
  src: string;
  size?: "sm" | "md";
}) {
  const box =
    size === "md"
      ? "h-9 w-9"
      : "h-8 w-8";
  const img = size === "md" ? "h-5 w-5" : "h-4 w-4";

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full border border-border bg-white",
        box,
        name === "X" && "bg-surface-alt",
      )}
    >
      <Image
        src={src}
        alt=""
        width={20}
        height={20}
        className={cn(img, "object-contain")}
        aria-hidden
      />
    </span>
  );
}

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
    "group inline-flex items-center text-sm text-muted transition hover:text-brand";

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
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand/60 transition-all duration-300 group-hover:w-full" />
        </span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand/60 transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface-alt">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-brand-tint/50 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={motionTransition(0, 0.4)}
          className="mt-10 flex flex-col gap-5 rounded-2xl border border-border bg-white/80 p-5 shadow-sm shadow-brand/5 backdrop-blur-sm sm:p-6 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Ready to launch?
            </p>
            <p className="mt-1.5 text-lg font-bold text-foreground sm:text-xl">
              Start at $99. Scale beyond limits.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <Link
              href="/packages"
              className={buttonVariants({
                size: "default",
                className: "w-full sm:w-auto",
              })}
            >
              View Packages
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href={CONTACT_HASH}
              className={buttonVariants({
                variant: "outline",
                size: "default",
                className: "w-full sm:w-auto",
              })}
            >
              1 Click Connect
            </Link>
          </div>
        </motion.div>

        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={motionTransition(0.04, 0.35)}
            className="lg:col-span-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-2xl border border-border bg-white px-3 py-2 transition hover:border-brand/25 hover:shadow-sm hover:shadow-brand/5"
            >
              <Image
                src="/icon_trans_bg.png"
                alt="Ascalify logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full bg-brand-tint object-contain p-1"
              />
              <span className="text-left">
                <span className="block text-sm font-black text-foreground">
                  Ascalify
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-brand">
                  Scale Beyond Limits
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              Website packages for freelancers, growing businesses, and
              enterprises — built to launch fast and scale with you.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {contactPlatforms.map((platform) => {
                const isExternal = platform.href.startsWith("http");
                return (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={platform.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white transition hover:border-brand/30 hover:bg-brand-tint hover:shadow-sm hover:shadow-brand/10"
                  >
                    <Image
                      src={platform.icon}
                      alt={`${platform.name} logo`}
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={motionTransition(0.08, 0.35)}
            className="lg:col-span-2 lg:col-start-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={motionTransition(0.12, 0.35)}
            className="lg:col-span-3"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={motionTransition(0.16, 0.35)}
            className="lg:col-span-3"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Contact
            </p>
            <ul className="mt-4 space-y-3">
              {footerContactItems.map((platform) => {
                const isExternal = platform.href.startsWith("http");
                const label =
                  platform.name === "Email"
                    ? EMAIL
                    : platform.name === "Phone"
                      ? PHONE
                      : platform.name;

                return (
                  <li key={platform.name}>
                    <a
                      href={platform.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2.5 text-sm text-muted transition hover:text-brand"
                    >
                      <PlatformIcon
                        name={platform.name}
                        src={platform.icon}
                        size="md"
                      />
                      <span
                        className={cn(
                          platform.name === "Email" && "break-all",
                        )}
                      >
                        {label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Ascalify. All rights reserved.</p>
          <p>Website packages · Start online · Grow · Scale</p>
        </div>
      </div>
    </footer>
  );
}
