"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimateIn } from "@/components/AnimateIn";
import { contactPlatforms, WHATSAPP_URL } from "@/lib/contact";
import { motionTransition, viewportOnce } from "@/lib/motion";

const platformIcons = {
  WhatsApp: MessageCircle,
  Instagram: MessageCircle,
  Email: Mail,
  X: MessageCircle,
  Phone,
};

export function ContactConnectSection() {
  return (
    <section id="connect" className="scroll-mt-28 bg-surface-alt pb-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <AnimateIn variant="scaleIn">
          <div className="mb-8 rounded-3xl bg-brand px-6 py-10 text-white shadow-2xl shadow-brand/20 md:px-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              1 Click Connect
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Pick your platform and start the conversation.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
              WhatsApp is best for quick package guidance. Email works well for
              detailed requirements, references, and business documents.
            </p>
          </div>
        </AnimateIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {contactPlatforms.map((platform, index) => {
            const Icon =
              platformIcons[platform.name as keyof typeof platformIcons];
            const isExternal = platform.href.startsWith("http");

            return (
              <motion.a
                key={platform.name}
                href={platform.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={motionTransition(index * 0.05, 0.35)}
                whileHover={{ y: -3 }}
                className="flex min-h-48 flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:border-brand hover:shadow-lg hover:shadow-brand/10 sm:min-h-56 sm:p-6"
              >
                <Icon className="h-8 w-8 text-brand" />
                <h3 className="mt-4 text-lg font-bold">{platform.name}</h3>
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

        <AnimateIn variant="fadeUp" delay={0.1} className="mt-12">
          <Card className="border-brand bg-brand-tint p-8 text-center">
            <p className="text-sm text-muted">Not sure which package fits?</p>
            <p className="mt-2 text-lg font-semibold text-foreground">
              Browse packages by stage or send us your goals directly.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/packages" className={buttonVariants({ size: "lg" })}>
                View Packages
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "border-brand text-brand",
                })}
              >
                Chat on WhatsApp
              </a>
            </div>
          </Card>
        </AnimateIn>
      </div>
    </section>
  );
}
