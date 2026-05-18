"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/data/products";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  const [active, setActive] = useState("All");

  const categories = (() => {
    const seen = new Set<string>();
    for (const p of products) {
      seen.add(p.category);
    }
    return ["All", ...Array.from(seen)];
  })();

  const totalCount = products.length;

  const catCount = (cat: string) => {
    if (cat === "All") return totalCount;
    let n = 0;
    for (const p of products) {
      if (p.category === cat) n++;
    }
    return n;
  };

  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={
              active === cat
                ? "inline-flex h-10 items-center justify-center rounded-md bg-accent px-4 text-sm font-semibold text-white transition-all duration-300 active:scale-95 sm:w-auto"
                : "inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-4 text-sm font-medium text-gray-600 transition-all duration-300 hover:border-gray-400 hover:bg-surface active:scale-95 sm:w-auto"
            }
          >
            {cat}
            <span className="ml-1.5 text-xs opacity-70">
              ({catCount(cat)})
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product, i) => (
          <div
            key={product.slug}
            className="animate-fade-in-up"
            style={{
              animationDelay: `${i * 50}ms`,
              animationFillMode: "backwards",
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
