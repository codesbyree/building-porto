"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { APP_ROUTES } from "@/config/routes";

import { useAuthStore } from "@/store/auth-store";
import { Spinner } from "@/components/ui/spinner";

/**
 * Wrap public-only routes (e.g. /auth) with this guard. Redirects to
 * /dashboard when the user is already authenticated.
 */
export function GuestGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const userId = useAuthStore((state) => state.userId);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  useEffect(() => {
    if (hasHydrated && userId) {
      router.replace(APP_ROUTES.private.dashboard.monitoring);
    }
  }, [hasHydrated, userId, router]);

  if (hasHydrated && userId) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <Spinner className="size-6" />
      </div>
    );
  }

  return <>{children}</>;
}
