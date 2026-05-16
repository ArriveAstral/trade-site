import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="aspect-[4/3] rounded-t-lg bg-slate-100" />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
          {product.category}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-slate-950">
          {product.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {product.summary}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-5 text-sm font-semibold text-blue-700 hover:underline"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
