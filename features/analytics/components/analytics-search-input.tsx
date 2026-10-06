"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { Input } from "@/components/ui/input";

export function AnalyticsSearchInput() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialKey = searchParams.get("logKey") ?? "";
  const [value, setValue] = useState(initialKey);

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (term) {
      params.set("logKey", term);
    } else {
      params.delete("logKey");
    }

    // Use replace instead of push to avoid cluttering history with intermediate search steps
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  function handleChange(newValue: string) {
    setValue(newValue);
    handleSearch(newValue);
  }

  return (
    <Input
      placeholder="Search logs..."
      value={value}
      onChange={(event) => handleChange(event.target.value)}
      className="max-w-56 bg-gray-950/50 dark:bg-gray-950/60 h-10 p-4! text-sm! placeholder:text-sm! border-none! outline! outline-gray-950/80 focus-visible:outline-primary! text-gray-50! placeholder:text-gray-50/70! rounded-md!"
    />
  );
}
