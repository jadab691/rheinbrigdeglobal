import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactMethods } from "@/components/contact/ContactMethods";
import { ContactProcess } from "@/components/contact/ContactProcess";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with RheinBridge Global to discuss your plans for higher education in Germany and explore possible next steps.",
  openGraph: {
    title: "Contact | RheinBridge Global",
    description:
      "Start a conversation about your plans to study in Germany and the guidance that may suit your situation.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <ContactProcess />
    </main>
  );
}
