import { ContactConnectSection } from "@/components/ContactConnectSection";
import { CtaBanner } from "@/components/CtaBanner";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <ContactConnectSection />
      <CtaBanner showSalesMessage={false} />
    </main>
  );
}
