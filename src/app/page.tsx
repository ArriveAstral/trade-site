import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductCard } from "@/components/product/ProductCard";
import { StatsPanel } from "@/components/home/StatsPanel";
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
              We supply bread toasters, breakfast makers, coffee machines, and
              microwave ovens — practical small appliances ready for export,
              with flexible customization and responsive sales support.
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
          <StatsPanel />
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
            description="Our most-requested small appliances across four categories — each model supports export packaging, private labeling, and spec adjustments for target markets."
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
            {
              title: "Clear Product Specifications",
              desc: "Every product page lists key specs, features, and suggested applications — giving you the details needed for initial sourcing decisions without the back-and-forth.",
            },
            {
              title: "Direct WhatsApp & Email Inquiry",
              desc: "Reach our sales team directly via WhatsApp or email. We respond within 24 hours on business days with pricing, MOQ, and packaging options.",
            },
            {
              title: "Mobile-First Browsing Experience",
              desc: "Browse the full product range on any device. The site is optimized for mobile, so you can check specs and share product links with your team on the go.",
            },
          ].map((item) => (
            <div key={item.title} className="border-t border-gray-200 pt-5">
              <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
