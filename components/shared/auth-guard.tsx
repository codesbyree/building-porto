"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/auth-store";
import { Spinner } from "@/components/ui/spinner";
import { APP_ROUTES } from "@/config/routes";

/**
 * Wrap secure routes with this guard. Redirects to /auth when there is no
 * authenticated userId in the (localStorage-backed) auth store.
 */
export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const userId = useAuthStore((state) => state.userId);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  useEffect(() => {
    if (hasHydrated && !userId) {
      router.replace(APP_ROUTES.public.auth);
    }
  }, [hasHydrated, userId, router]);

  if (!hasHydrated || !userId) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <Spinner className="size-6" />
      </div>
    );
  }

  return <>{children}</>;
}
