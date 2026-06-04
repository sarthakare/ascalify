import { CtaBanner } from "@/components/CtaBanner";
import { FaqGroupBlock } from "@/components/FaqGroupBlock";
import { FaqHelpSection } from "@/components/FaqHelpSection";
import { faqGroups } from "@/lib/packages";

export default function FaqPage() {
  return (
    <main className="overflow-x-hidden">
      {faqGroups.map((group, index) => (
        <FaqGroupBlock
          key={group.id}
          group={group}
          index={index}
          pageTitle={
            index === 0 ? "Frequently Asked Questions" : undefined
          }
        />
      ))}

      <FaqHelpSection />

      <CtaBanner showSalesMessage={false} />
    </main>
  );
}
