"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_HASH } from "@/lib/contact";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/audience", label: "Audience" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const menuSpring = { type: "spring" as const, stiffness: 420, damping: 32 };

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-30 bg-white/70 px-3 py-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 rounded-3xl border border-white/70 bg-white/90 px-3 py-3 shadow-xl shadow-brand/10 ring-1 ring-border/70 md:rounded-full md:px-4">
        <motion.div whileTap={{ scale: 0.97 }} className="shrink-0">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center gap-3 rounded-full pr-2 text-sm font-black text-foreground"
          >
            <Image
              src="/icon_trans_bg.png"
              alt="Ascalify logo"
              width={36}
              height={36}
              className="h-10 w-10 rounded-full bg-brand-tint object-contain p-1"
              priority
            />
            <span>
              Ascalify
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                Scale Beyond Limits
              </span>
            </span>
          </Link>
        </motion.div>

        <motion.button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          whileTap={{ scale: 0.9 }}
          className="order-2 ml-auto inline-flex h-11 w-11 min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition hover:bg-surface-alt md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        <nav className="order-2 mx-2 hidden items-center gap-1 rounded-full bg-surface-alt/80 p-1 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <motion.div key={item.href} whileTap={{ scale: 0.94 }}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative block min-w-max rounded-full px-3 py-2 text-xs font-semibold transition-colors",
                    active
                      ? "text-brand"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="desktop-nav-pill"
                      className="absolute inset-0 rounded-full bg-white shadow-sm ring-1 ring-border/60"
                      transition={menuSpring}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <nav className="order-3 ml-auto hidden items-center gap-2 md:flex">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
            <Link
              href={CONTACT_HASH}
              className={buttonVariants({
                size: "sm",
                className: "whitespace-nowrap py-2 shadow-brand/25",
              })}
            >
              1 Click Connect
            </Link>
          </motion.div>
        </nav>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.nav
              key="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="order-4 mt-1 flex basis-full flex-col gap-2 overflow-hidden rounded-2xl border border-border bg-white p-3 md:hidden"
            >
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "relative block overflow-hidden rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors",
                        active
                          ? "text-white"
                          : "text-foreground hover:bg-surface-alt",
                      )}
                    >
                      {active ? (
                        <motion.span
                          layoutId="mobile-nav-pill"
                          className="absolute inset-0 rounded-xl bg-brand"
                          transition={menuSpring}
                        />
                      ) : null}
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ delay: navItems.length * 0.05 + 0.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={CONTACT_HASH}
                  onClick={() => setMobileOpen(false)}
                  className={buttonVariants({
                    size: "default",
                    className: "mt-1 w-full",
                  })}
                >
                  1 Click Connect
                </Link>
              </motion.div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
