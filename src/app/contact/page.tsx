import { Container } from "@/components/Container";
import { ContactContent } from "@/components/ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Samson Aderonmu",
  description:
    "Get in touch with Samson Aderonmu for collaboration opportunities, project inquiries, or just to say hello. I'll respond as quickly as possible.",
};

export default function ContactPage() {
  return (
    <Container className="relative overflow-x-hidden">
      <ContactContent />
    </Container>
  );
}
