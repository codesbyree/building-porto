"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";

export function AnalyticsSearchInput() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const logKey = searchParams.get("logKey") ?? "";

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("logKey", value);
    } else {
      params.delete("logKey");
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <Input
      placeholder="Search logs..."
      value={logKey}
      onChange={(event) => handleChange(event.target.value)}
      className="max-w-56"
    />
  );
}
