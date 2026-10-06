"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { TAB_NAVIGATION } from "@/config/routes";

export function AnalyticsTabsNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <ul className="flex gap-2 bg-gray-950/30 outline-gray-950/50 outline p-1 rounded-md backdrop-blur-xs">
      {TAB_NAVIGATION.map((category) => {
        const newPathname = `/dashboard/analytics/${category.key}`;
        const currentParams = searchParams.toString();
        const newUrl = currentParams ? `${newPathname}?${currentParams}` : newPathname;
        const isActive = pathname === newPathname;

        return (
          <li key={category.key}>
            <Link
              href={newUrl}
              className={cn(
                "p-1.5 px-3 rounded-sm block text-gray-50 text-sm hover:bg-gray-950/20 transition-colors line-clamp-1",
                isActive && "bg-gray-950/50 dark:bg-gray-600/50 shadow-sm hover:bg-gray-600/70 dark:hover:bg-gray-600/70",
              )}
            >
              {category.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
