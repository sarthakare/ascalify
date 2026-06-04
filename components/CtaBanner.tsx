import Link from "next/link";
import { CTA_TAGLINE, SALES_MESSAGE } from "@/lib/packages";
import { buttonVariants } from "@/components/ui/button";

type CtaBannerProps = {
  showSalesMessage?: boolean;
};

export function CtaBanner({ showSalesMessage = true }: CtaBannerProps) {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-6xl px-6 py-14 text-center text-white">
        {showSalesMessage ? (
          <p className="mx-auto max-w-2xl text-sm leading-7 text-white/90 md:text-base">
            {SALES_MESSAGE}
          </p>
        ) : null}
        <h2 className="mt-6 text-2xl font-bold md:text-3xl">{CTA_TAGLINE}</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/packages"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "border-white bg-white text-brand hover:bg-brand-tint",
            })}
          >
            View All Packages
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({
              variant: "ghost",
              size: "lg",
              className:
                "border border-white/60 text-white hover:bg-white/10 hover:text-white",
            })}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
