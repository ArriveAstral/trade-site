import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductCard } from "@/components/product/ProductCard";
import { company } from "@/data/company";
import { products, featuredProducts } from "@/data/products";

const categoryBanners = (() => {
  const map = new Map<string, { name: string; count: number; image: string }>();
  for (const p of products) {
    if (!map.has(p.category)) {
      const dir = p.category.toLowerCase().replace(/\s+/g, "-");
      map.set(p.category, {
        name: p.category,
        count: 1,
        image: `/images/products/${dir}/${p.slug}.svg`,
      });
    } else {
      map.get(p.category)!.count++;
    }
  }
  return Array.from(map.values());
})();

export default function Home() {
  return (
    <>
      <section className="border-b border-gray-200 bg-white">
        <Container className="grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Export-ready product showcase
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Small home appliances for overseas buyers and distributors.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
              {company.englishName} supplies bread toasters, breakfast makers,
              coffee machines, and microwave ovens for export appliance
              programs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-white transition hover:bg-accent-hover"
              >
                View Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 px-5 text-sm font-semibold text-gray-900 transition hover:border-gray-400 hover:bg-surface"
              >
                Contact Sales
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-surface p-6">
            <p className="text-sm font-medium text-gray-400">
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
                  <dt className="text-sm text-gray-400">{label}</dt>
                  <dd className="mt-2 text-2xl font-semibold text-gray-900">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="border-b border-gray-200 bg-surface">
        <Container className="py-8 sm:py-10">
          <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
            {categoryBanners.map((cat) => (
              <Link
                key={cat.name}
                href="/products"
                className="group flex flex-col items-center rounded-lg bg-white p-2 transition hover:shadow-md sm:p-4"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-md bg-gray-50">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-contain p-1 sm:p-3"
                    sizes="(max-width: 640px) 25vw, 25vw"
                  />
                </div>
                <span className="mt-2 text-center text-[11px] font-semibold leading-tight text-gray-900 sm:text-sm">
                  {cat.name}
                </span>
                <span className="mt-0.5 hidden text-xs text-gray-400 sm:inline">
                  {cat.count} products
                </span>
                <span className="mt-0.5 hidden text-xs font-medium text-accent sm:inline">
                  View all →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
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
            <div key={item} className="border-t border-gray-200 pt-5">
              <h2 className="text-lg font-semibold text-gray-900">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-gray-500">
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
