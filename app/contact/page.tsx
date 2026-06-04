import { ContactConnectSection } from "@/components/ContactConnectSection";
import { PageIntro } from "@/components/PageIntro";

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        title="Contact Ascalify"
        description="Ready to start your website? Reach out and we'll help you pick the right package for your stage of growth."
      />
      <ContactConnectSection />
    </main>
  );
}
