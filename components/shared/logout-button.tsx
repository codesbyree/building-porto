"use client";

import { useRouter } from "next/navigation";
import { LogOutIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { APP_ROUTES } from "@/config/routes";

import { useAuthStore } from "@/store/auth-store";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverHeader, PopoverTitle, PopoverTrigger, PopoverDescription } from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function LogoutButton(props: React.ComponentProps<typeof Button>) {
  const { className, ...rest } = props;

  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);
  const userId = useAuthStore((state) => state.userId);

  function handleLogout() {
    logout();
    router.replace(APP_ROUTES.public.auth);
  }

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="ghost" className="text-gray-50" size="icon" />}>
        <Avatar size="sm">
          <AvatarImage sizes="sm" src="https://github.com/shadcn.png" alt="@shadcn" className="grayscale" />
          <AvatarFallback>{userId?.slice(0, 1)}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>

      <PopoverContent align="end" className="bg-gray-950/60 outline-gray-600/20 outline rounded-md backdrop-blur-sm w-50">
        <PopoverHeader>
          <PopoverTitle className="text-gray-50">{userId}</PopoverTitle>
          <PopoverDescription className="text-gray-50/60">Guest</PopoverDescription>
        </PopoverHeader>

        <div className="flex flex-col gap-2">
          <Button className="text-gray-50 w-full" onClick={handleLogout} {...rest}>
            <LogOutIcon data-icon="inline-start" />
            Log out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
