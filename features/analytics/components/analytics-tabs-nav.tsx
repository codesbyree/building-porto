"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { analyticsCategories } from "@/features/analytics/data";

export function AnalyticsTabsNav() {
  const pathname = usePathname();

  return (
    <div className="inline-flex w-fit items-center gap-0.75 rounded-lg bg-muted p-0.75">
      {analyticsCategories.map((category) => {
        const href = `/dashboard/analytics/${category.slug}`;
        const isActive = pathname === href;

        return (
          <Link
            key={category.slug}
            href={href}
            className={cn(
              "inline-flex h-7 items-center justify-center rounded-md px-3 text-xs font-medium whitespace-nowrap text-foreground/60 transition-all hover:text-foreground",
              isActive && "bg-background text-foreground shadow-sm",
            )}
          >
            {category.label}
          </Link>
        );
      })}
    </div>
  );
}
