"use client";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/auth-store";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const router = useRouter();
  const userId = useAuthStore((state) => state.userId);
  const logout = useAuthStore((state) => state.logout);

  function handleLogout() {
    logout();
    router.replace("/auth");
  }

  return (
    <div className="p-6">
      <h1 className="text-lg font-semibold">Hello from dashboard page!</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Signed in as <span className="font-medium">{userId}</span>
      </p>
      <Button className="mt-4" variant="outline" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
}
