"use client";

import { useRouter } from "next/navigation";
import { LogOutIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { APP_ROUTES } from "@/config/routes";

import { useAuthStore } from "@/store/auth-store";
import { Button } from "@/components/ui/button";

export default function LogoutButton(props: React.ComponentProps<typeof Button>) {
  const { className, ...rest } = props;

  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  function handleLogout() {
    logout();
    router.replace(APP_ROUTES.public.auth);
  }

  return (
    <Button variant="outline" className={cn("text-gray-50", className)} onClick={handleLogout} {...rest}>
      <LogOutIcon data-icon="inline-start" />
      Log out
    </Button>
  );
}
