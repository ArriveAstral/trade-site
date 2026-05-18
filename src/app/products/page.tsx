import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductList } from "@/components/product/ProductList";
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
        description="Browse our product lines by category. Click a tab below to filter."
      />
      <div className="mt-8">
        <ProductList products={products} />
      </div>
    </Container>
  );
}
