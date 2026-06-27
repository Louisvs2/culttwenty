"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { workCategories, workItems } from "@/lib/data/work";
import type { ServiceCategory } from "@/types";
import { cn } from "@/lib/utils";

export function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? workItems
      : workItems.filter((item) =>
          item.categories.includes(activeCategory as ServiceCategory),
        );

  return (
    <div>
      <div
        role="tablist"
        aria-label="Projekte filtern"
        className="flex flex-wrap gap-3 border-b border-line pb-10"
      >
        {workCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === category.id}
            data-cursor="pointer"
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "rounded-full border px-5 py-2.5 font-mono text-sm uppercase tracking-wide transition-colors duration-300",
              activeCategory === category.id
                ? "border-ink bg-ink text-paper"
                : "border-ink/15 text-ink/60 hover:border-ink/40 hover:text-ink",
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-x-gutter gap-y-16 md:grid-cols-2">
        {filteredItems.map((item, index) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            data-cursor="pointer"
            className={cn(
              "group block",
              item.size === "lg" && index % 3 === 0 ? "md:col-span-2" : "",
            )}
          >
            <ImageReveal
              src={item.coverImage}
              alt={item.title}
              className={cn(
                "w-full rounded-md",
                item.size === "lg" && index % 3 === 0
                  ? "aspect-[16/9]"
                  : "aspect-[4/5]",
              )}
              imageClassName="transition-transform duration-700 ease-out-quart group-hover:scale-105"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-heading-2 font-medium text-ink">
                  {item.title}
                </h2>
                <p className="mt-2 font-mono text-sm text-mute">
                  {item.client} · {item.year}
                </p>
                <p className="mt-3 max-w-md text-sm text-ink/70">{item.summary}</p>
              </div>
              <ArrowUpRight
                className="mt-2 h-5 w-5 shrink-0 text-ink transition-transform duration-300 ease-out-quart group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
