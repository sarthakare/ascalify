import Link from "next/link";
import { ClientShowcase } from "@/components/ClientShowcase";
import { ConnectBanner } from "@/components/ConnectBanner";
import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/Hero";
import { PackageFitSection } from "@/components/PackageFitSection";
import { StageCard } from "@/components/StageCard";
import { TrustStrip } from "@/components/TrustStrip";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SALES_MESSAGE, stages } from "@/lib/packages";

export default function Home() {
  return (
    <main>
      <Hero
        title="Website Packages"
        highlight="Scale Beyond Limits"
        description={SALES_MESSAGE}
        primaryHref="/packages"
        primaryLabel="View Packages from $99"
        secondaryHref="/contact"
        secondaryLabel="Talk to Us"
      />
      <TrustStrip />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Choose Your Stage of Growth
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Three stages designed for where you are today - and where you want
            to go next.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stages.map((stage) => (
              <StageCard key={stage.id} stage={stage} />
            ))}
          </div>
        </div>
      </section>

      <ClientShowcase />

      <section className="bg-surface-alt py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            From freelancer to enterprise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Nine packages across three stages. Pick the tier that fits your
            goals, or explore who each stage is built for.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/packages"
              className={buttonVariants({ size: "lg" })}
            >
              Compare All Packages
            </Link>
            <Link
              href="/audience"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Who We Serve
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Starting From", value: "$99" },
              { label: "Packages Available", value: "9" },
              { label: "Growth Stages", value: "3" },
            ].map((metric) => (
              <Card
                key={metric.label}
                className="p-5"
              >
                <p className="text-2xl font-bold text-brand">{metric.value}</p>
                <p className="mt-1 text-sm text-muted">{metric.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PackageFitSection />

      <ConnectBanner />

      <CtaBanner />
    </main>
  );
}
