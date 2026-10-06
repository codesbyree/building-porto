import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

import { ProgressIndicator, ProgressTrack } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

import { SelectedFloorWidget } from "./selected-floor-widget";

import type { AnalyticsCategory } from "@/features/analytics/data";

export function AnalyticsSummary({ category }: { category: AnalyticsCategory }) {
  const isNegativeTrend = category.primary.trend.trim().startsWith("-");

  return (
    <div className="flex flex-col gap-4">
      <SelectedFloorWidget />

      <div className="p-2 bg-gray-950/60 outline-gray-950/80 w-full rounded-md outline min-h-11">
        <h2 className="text-xs text-gray-50/60">Floor consumption</h2>

        <p className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-50">{category.primary.value}</span>
          {category.primary.unit && <span className="text-sm text-gray-50/50">{category.primary.unit}</span>}
        </p>

        <p className={cn("mt-2 text-xs font-medium", isNegativeTrend ? "text-green-400" : "text-red-400")}>{category.primary.trend}</p>
      </div>

      <div className="p-2 bg-gray-950/60 outline-gray-950/80 w-full rounded-md outline min-h-11">
        <h2 className="text-xs text-gray-50/60">{category.secondary.label}</h2>

        <div className="mt-2 flex items-center justify-between gap-2">
          <p className="font-semibold text-gray-50">{category.secondary.zone}</p>
          <span className="shrink-0 text-sm text-red-400">{category.secondary.value}</span>
        </div>

        <ProgressPrimitive.Root value={category.secondary.percent} className="mt-4">
          <ProgressTrack className="h-1 bg-gray-50">
            <ProgressIndicator className="bg-red-500" />
          </ProgressTrack>
        </ProgressPrimitive.Root>
      </div>
    </div>
  );
}
