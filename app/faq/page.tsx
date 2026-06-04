import { CtaBanner } from "@/components/CtaBanner";
import { FaqList } from "@/components/FaqList";
import { PageIntro } from "@/components/PageIntro";
import { faqs } from "@/lib/packages";

export default function FaqPage() {
  return (
    <main>
      <PageIntro
        title="Frequently Asked Questions"
        description="Answers about delivery timelines, support, upgrades, and getting started with your Ascalify website package."
      />

      <section className="bg-surface-alt pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBanner showSalesMessage={false} />
    </main>
  );
}
