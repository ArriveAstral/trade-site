import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductCard } from "@/components/product/ProductCard";
import { featuredProducts } from "@/data/products";

export default function Home() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <Container className="grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Export-ready product showcase
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Industrial products for overseas buyers and distributors.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Placeholder company introduction for the first version. Present
              your core products, quality capability, and direct sales contact
              in one clear browsing experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex h-11 items-center justify-center rounded-md bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                View Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md border border-slate-300 px-5 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Contact Sales
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Company Snapshot
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4">
              {[
                ["12+", "Core products"],
                ["30+", "Export markets"],
                ["OEM", "Customization"],
                ["24h", "Sales response"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-md bg-white p-4">
                  <dt className="text-sm text-slate-500">{label}</dt>
                  <dd className="mt-2 text-2xl font-semibold text-slate-950">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Core products"
            title="Featured Products"
            description="Use this area to highlight the products that matter most for overseas inquiries."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid gap-8 py-14 md:grid-cols-3">
          {[
            "Clear product specifications",
            "Direct WhatsApp and email inquiry",
            "Mobile-first browsing experience",
          ].map((item) => (
            <div key={item} className="border-t border-slate-200 pt-5">
              <h2 className="text-lg font-semibold text-slate-950">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Placeholder copy for company strengths, quality control,
                packaging, delivery, and service capability.
              </p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
