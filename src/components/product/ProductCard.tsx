import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

function getImagePath(category: string): string {
  const dirMap: Record<string, string> = {
    "Bread Toasters": "bread-toasters",
    "Breakfast Makers": "breakfast-makers",
    "Coffee Machines": "coffee-machines",
    "Microwave Ovens": "microwave-ovens",
  };
  return `/images/products/${dirMap[category] ?? category.toLowerCase().replace(/\s+/g, "-")}`;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-gray-200 bg-white transition hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg bg-surface">
        <Image
          src={`${getImagePath(product.category)}/${product.slug}.svg`}
          alt={product.name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
          {product.category}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-gray-900">
          {product.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-gray-500">
          {product.summary}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-5 text-sm font-semibold text-accent hover:underline"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
