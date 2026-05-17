import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/common/Container";
import { ContactPanel } from "@/components/contact/ContactPanel";
import { products } from "@/data/products";
import { getProductBySlug } from "@/lib/products";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      url: `/products/${product.slug}`,
      type: "website",
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <Container className="py-10 lg:py-14">
      <Link
        href="/products"
        className="text-sm font-medium text-blue-700 hover:underline"
      >
        Back to products
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_380px]">
        <article>
          <div className="aspect-[4/3] rounded-lg border border-slate-200 bg-slate-100" />
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-blue-700">
            {product.category}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            {product.description}
          </p>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-slate-950">
              Key Specifications
            </h2>
            <dl className="mt-4 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid gap-2 px-4 py-3 sm:grid-cols-3"
                >
                  <dt className="text-sm font-medium text-slate-500">
                    {spec.label}
                  </dt>
                  <dd className="text-sm text-slate-900 sm:col-span-2">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-slate-950">Features</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-md border border-slate-200 bg-white p-4 text-sm text-slate-700"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-slate-950">
              Applications
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.applications.map((application) => (
                <li
                  key={application}
                  className="rounded-md border border-slate-200 bg-white p-4 text-sm text-slate-700"
                >
                  {application}
                </li>
              ))}
            </ul>
          </section>
        </article>

        <aside>
          <ContactPanel productName={product.name} />
        </aside>
      </div>
    </Container>
  );
}
