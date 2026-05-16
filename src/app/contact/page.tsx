import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { ContactPanel } from "@/components/contact/ContactPanel";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact our sales team by WhatsApp, email, or WeChat for product inquiries and export cooperation.",
};

export default function ContactPage() {
  return (
    <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_420px] lg:py-16">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Contact
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Contact our sales team
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
          Placeholder contact page for overseas product inquiries. Add your
          business email, WhatsApp number, WeChat QR code, office address, and
          business hours here.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            ["Email", "sales@example.com"],
            ["WhatsApp", "+1 234 567 8900"],
            ["Address", "Export office address placeholder"],
            ["Response time", "Within 24 hours on business days"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-500">{label}</p>
              <p className="mt-2 text-sm font-semibold text-slate-950">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ContactPanel />
    </Container>
  );
}
