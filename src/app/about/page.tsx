import type { Metadata } from "next";
import { Container } from "@/components/common/Container";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our placeholder manufacturing capability, quality control, export markets, and product service.",
};

export default function AboutPage() {
  return (
    <Container className="py-12 lg:py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
        About
      </p>
      <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        Company profile placeholder
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-gray-500">
        This page is prepared for company introduction, factory capability,
        quality control, certificates, and export market information.
      </p>
    </Container>
  );
}
