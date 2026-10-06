"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navigationLinks = [
  { href: "/dashboard/building", label: "Building", key: "building" },
  { href: "/dashboard/analytics/energy?selectedFloor=9", label: "Analytics", key: "analytics" },
  { href: "/dashboard/simulations", label: "Simulations", key: "simulations" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 p-4">
      <ul className="flex gap-2 bg-gray-950/30 outline-gray-950/50 outline p-1 rounded-md backdrop-blur-xs">
        {navigationLinks.map((link) => {
          const isActive = pathname.includes(link.key);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "p-1.5 px-3 rounded-sm block text-gray-50 hover:bg-gray-950/80 transition-colors",
                  isActive && "bg-gray-950/50 dark:bg-gray-600/50 shadow-sm hover:bg-gray-600/70 dark:hover:bg-gray-600/70",
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
