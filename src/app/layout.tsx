import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/common/JsonLd";
import { company } from "@/data/company";
import "./globals.css";

const siteUrl = "https://trade-site-2e8cnsy0m-wangxunyus-projects.vercel.app";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.englishName,
  url: siteUrl,
  description: company.description,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: company.email,
    telephone: company.whatsapp,
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shenzhen",
    addressCountry: "CN",
  },
  sameAs: [`https://wa.me/${company.whatsappNumber}`],
};

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://trade-site-2e8cnsy0m-wangxunyus-projects.vercel.app",
  ),
  title: {
    default: "Global Trade Products | Manufacturer & Export Supplier",
    template: "%s | Global Trade Products",
  },
  description:
    "Browse export-ready industrial products, compare core specifications, and contact our sales team by WhatsApp, email, or WeChat.",
  keywords: [
    "export products",
    "manufacturer",
    "supplier",
    "industrial products",
    "global trade",
  ],
  openGraph: {
    title: "Global Trade Products | Manufacturer & Export Supplier",
    description:
      "Export-ready products with clear specifications and direct sales contact.",
    url: "https://trade-site-2e8cnsy0m-wangxunyus-projects.vercel.app",
    siteName: "Global Trade Products",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <JsonLd data={organizationSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
