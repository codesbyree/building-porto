"use client";

import { useRouter } from "next/navigation";
import { LogOutIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { useAuthStore } from "@/store/auth-store";
import { Button } from "@/components/ui/button";

export default function LogoutButton(props: React.ComponentProps<typeof Button>) {
  const { className, ...rest } = props;

  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  function handleLogout() {
    logout();
    router.replace("/auth");
  }

  return (
    <Button variant="outline" className={cn("text-gray-50", className)} onClick={handleLogout} {...rest}>
      <LogOutIcon data-icon="inline-start" />
      Log out
    </Button>
  );
}
