"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { AnimateIn } from "@/components/AnimateIn";
import {
  contactPlatforms,
  EMAIL,
  PHONE,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/contact";
import { useViewportOnce } from "@/hooks/useViewportOnce";
import { motionTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

function SectionShell({
  id,
  index,
  children,
  className,
}: {
  id?: string;
  index: number;
  children: ReactNode;
  className?: string;
}) {
  const isFirst = index === 0;
  const viewport = useViewportOnce();

  return (
    <motion.section
      id={id}
      initial={isFirst ? { opacity: 0, y: 12 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: isFirst ? 0.5 : 0.65, ease: "easeOut" }}
      className={cn(
        "scroll-mt-28 overflow-hidden",
        isFirst ? "pt-8 pb-14 md:pt-10 md:pb-16" : "py-16 md:py-20",
        index % 2 === 0 ? "bg-white" : "bg-surface-alt",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">{children}</div>
    </motion.section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  index,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  index: number;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted md:text-base">
          {subtitle}
        </p>
      </div>
      <span className="text-4xl font-black leading-none text-brand/20 sm:text-5xl lg:text-6xl">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export function ContactConnectSection() {
  const viewport = useViewportOnce();

  return (
    <>
      <SectionShell index={0}>
        <AnimateIn variant="fadeUp">
          <h1 className="text-3xl font-black text-foreground md:text-4xl">
            Contact Ascalify
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg">
            Ready to start your website? Reach out and we will help you pick the
            right package for your stage of growth.
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" className="mt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/packages"
              className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}
            >
              View Packages
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/faq"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-full sm:w-auto",
              })}
            >
              Read FAQ
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "w-full sm:w-auto",
              })}
            >
              Quick WhatsApp Chat
            </a>
          </div>
        </AnimateIn>
      </SectionShell>

      <SectionShell id="connect" index={1}>
        <AnimateIn variant="fadeUp">
          <SectionHeader
            index={0}
            eyebrow="1 Click Connect"
            title="Pick your platform and start the conversation"
            subtitle="WhatsApp is best for quick package guidance. Email works well for detailed requirements, references, and business documents."
          />
        </AnimateIn>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {contactPlatforms.map((platform, index) => {
            const isExternal = platform.href.startsWith("http");

            return (
              <motion.a
                key={platform.name}
                href={platform.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={motionTransition(index * 0.05, 0.35)}
                whileHover={{ y: -4 }}
                whileTap={{ y: -2 }}
                className="flex min-h-44 flex-col rounded-2xl border border-border border-l-4 border-l-brand bg-white p-5 shadow-sm transition hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10 sm:min-h-52 sm:p-6"
              >
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl",
                    platform.name === "X"
                      ? "bg-surface-alt ring-1 ring-border"
                      : "bg-brand-tint/40",
                  )}
                >
                  <Image
                    src={platform.icon}
                    alt={`${platform.name} logo`}
                    width={48}
                    height={48}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {platform.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                  {platform.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand">
                  Connect now
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </motion.a>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell index={2}>
        <AnimateIn variant="fadeUp">
          <SectionHeader
            index={1}
            eyebrow="Direct contact"
            title="Reach us anytime"
            subtitle="Use the channel that fits you best. We typically respond on WhatsApp within a few hours on business days."
          />
        </AnimateIn>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Mail,
              label: "Email",
              value: EMAIL,
              href: `mailto:${EMAIL}`,
            },
            {
              icon: Phone,
              label: "Phone",
              value: PHONE,
              href: PHONE_TEL,
            },
            {
              icon: Clock,
              label: "Response time",
              value: "Same day on WhatsApp",
              href: WHATSAPP_URL,
              external: true,
            },
          ].map((item, index) => {
            const Icon = item.icon;
            const isExternal = item.external ?? item.href.startsWith("http");

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={motionTransition(index * 0.06, 0.35)}
                whileHover={{ y: -3 }}
                whileTap={{ y: -2 }}
                className="rounded-2xl border border-border border-l-4 border-l-brand bg-white p-5 transition hover:border-brand/35 hover:shadow-md hover:shadow-brand/5 sm:p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-tint text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-foreground">
                  {item.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        <AnimateIn variant="fadeIn" className="mt-8">
          <p className="inline-flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-brand" />
            Serving clients worldwide · Projects delivered remotely
          </p>
        </AnimateIn>
      </SectionShell>

      <SectionShell index={3}>
        <AnimateIn variant="fadeUp">
          <div className="rounded-2xl border border-border border-l-4 border-l-brand bg-white p-6 text-center sm:p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Package guidance
            </p>
            <p className="mt-3 text-xl font-bold text-foreground md:text-2xl">
              Not sure which website package fits your business?
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted md:text-base">
              Browse packages by stage or tell us your goals on WhatsApp — we
              will recommend the right plan before you commit.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/packages"
                className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}
              >
                Compare Packages
              </Link>
              <Link
                href="/audience"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "w-full sm:w-auto",
                })}
              >
                See Target Audience
              </Link>
            </div>
          </div>
        </AnimateIn>
      </SectionShell>
    </>
  );
}
