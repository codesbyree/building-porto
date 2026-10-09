"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { FLOORS } from "@/config/building";

import { Badge } from "@/components/ui/badge";

const DEFAULT_FLOOR = "4";
const ACTIVE_FLOOR = ["4"];

export function SelectedFloorWidget() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeFloor = searchParams.get("selectedFloor") ?? DEFAULT_FLOOR;

  function handleSelect(floor: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("selectedFloor", floor);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="p-2 bg-gray-950/60 outline-gray-600/20 w-full rounded-md outline min-h-11">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-gray-50/60 text-xs">Selected Floor</h2>

        <Badge variant="outline" className="text-gray-50">
          Live Sensor Grid
        </Badge>
      </div>

      <div className="mt-2 grid grid-cols-6 gap-2 p-2 rounded-sm bg-gray-950/20">
        {FLOORS.map((floor) => {
          const isActive = floor === activeFloor;

          return (
            <button
              key={floor}
              type="button"
              onClick={() => handleSelect(floor)}
              disabled={!ACTIVE_FLOOR.includes(floor)}
              className={cn(
                "flex h-10 min-w-8 w-full items-center justify-center rounded-xs px-2 text-xs font-medium text-gray-50/60 transition-colors hover:bg-gray-50/10 hover:text-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-default",
                isActive && "bg-primary text-gray-50 hover:bg-red-600",
              )}
            >
              {floor}
            </button>
          );
        })}
      </div>
    </div>
  );
}
