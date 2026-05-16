import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse export-ready products with placeholder categories, specifications, and sales inquiry links.",
};

export default function ProductsPage() {
  return (
    <Container className="py-12 lg:py-16">
      <SectionHeading
        eyebrow="Product catalog"
        title="Products"
        description="A clean product list page prepared for future filters, categories, and backend content management."
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </Container>
  );
}
