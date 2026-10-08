"use client";

import Link from "next/link";
import { cn } from "cn";
import { useParams } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { APP_ROUTES, FLOOR_NAVIGATION } from "@/config/routes";
import { ArrowLeftIcon } from "lucide-react";
import { useRef } from "react";

export default function FloorNavigationWidget() {
  const params = useParams();
  const floorSlug = params.floor;

  const container = useRef<HTMLElement>(null);
  const backButtonEl = useRef<HTMLAnchorElement>(null);
  const prevHasSlug = useRef<boolean>(!!floorSlug);

  useGSAP(
    () => {
      if (!backButtonEl.current) return;

      const hasSlug = !!floorSlug;

      if (hasSlug !== prevHasSlug.current) {
        if (hasSlug) {
          gsap.fromTo(
            backButtonEl.current,
            { opacity: 0, x: 12, filter: "blur(2px)", pointerEvents: "none" },
            {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              pointerEvents: "auto",
              duration: 0.35,
              ease: "back.out(1.5)",
            },
          );
        } else {
          gsap.to(backButtonEl.current, {
            opacity: 0,
            x: 12,
            filter: "blur(2px)",
            pointerEvents: "none",
            duration: 0.25,
            ease: "power2.in",
          });
        }

        prevHasSlug.current = hasSlug;
      }
    },
    { scope: container, dependencies: [floorSlug] },
  );

  return (
    <section ref={container} className="absolute bottom-0 left-1/2 -translate-x-1/2 p-4 w-max z-10">
      <ul className="flex items-center p-1 rounded-full bg-gray-950/50 dark:bg-gray-950/20 backdrop-blur-md">
        {FLOOR_NAVIGATION.map((floor) => {
          const isActive = floorSlug === floor.key;

          return (
            <li key={floor.key}>
              <Link
                href={floor.href}
                className={cn(
                  "flex w-7 h-7 items-center justify-center rounded-full px-2 text-xs font-medium text-gray-50/60 transition-colors hover:bg-gray-50/10 hover:text-gray-50 cursor-pointer",
                  isActive && "bg-primary text-gray-50 hover:bg-red-600",
                )}
                replace
              >
                {floor.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        ref={backButtonEl}
        href={APP_ROUTES.private.dashboard.monitoring.index}
        className="flex w-8 h-8 items-center justify-center rounded-full px-2 text-gray-50/60 transition-colors hover:bg-gray-950/40 dark:hover:bg-gray-950/10 hover:text-gray-50 cursor-pointer absolute -left-5 top-1/2 -translate-y-1/2 opacity-0 pointer-events-none bg-gray-950/50 dark:bg-gray-950/20 backdrop-blur-md"
      >
        <ArrowLeftIcon size={14} />
      </Link>
    </section>
  );
}
