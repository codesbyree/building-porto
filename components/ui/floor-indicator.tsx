"use client";

import { useSearchParams } from "next/navigation";

export function FloorIndicator() {
  const searchParams = useSearchParams();
  const floor = searchParams.get("level");

  if (!floor) return null;

  return <span className="text-gray-50/70 font-normal">{floor.startsWith("B") ? `/${floor}` : `/F${floor}`}</span>;
}
