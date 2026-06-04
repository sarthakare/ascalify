import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { PageIntro } from "@/components/PageIntro";
import { PricingCard } from "@/components/PricingCard";
import { getPackagesByStage, packages, stages } from "@/lib/packages";

export default function PackagesPage() {
  return (
    <main>
      <PageIntro
        title="Website Packages"
        description="Explore all nine packages across three growth stages. Each stage links to full details, features, delivery, and support."
      />

      {stages.map((stage, index) => {
        const stagePackages = getPackagesByStage(stage.id);
        return (
          <section
            key={stage.id}
            id={stage.id}
            className={index % 2 === 0 ? "bg-white py-16" : "bg-surface-alt py-16"}
          >
            <div className="mx-auto max-w-6xl px-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                    Stage {stage.number}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
                    {stage.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-muted">{stage.subtitle}</p>
                </div>
                <Link
                  href={stage.href}
                  className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-dark"
                >
                  Full details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {stagePackages.map((pkg) => (
                  <PricingCard key={pkg.id} pkg={pkg} compact />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-sm text-muted">
            {packages.length} packages · 3 stages ·{" "}
            <Link href="/audience" className="font-semibold text-brand hover:underline">
              See target audience
            </Link>
          </p>
        </div>
      </section>

      <CtaBanner showSalesMessage={false} />
    </main>
  );
}
