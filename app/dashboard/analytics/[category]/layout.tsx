import { AnalyticsSearchInput, AnalyticsSummary, AnalyticsTabsNav } from "@/features/analytics/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full grid grid-cols-[400px_1fr_400px] gap-y-5">
      <aside className="px-4">
        <AnalyticsSummary />
      </aside>

      <section className="flex flex-col gap-4 col-span-2 px-4">
        <div className="flex items-center justify-between gap-4">
          <AnalyticsTabsNav />
          <AnalyticsSearchInput />
        </div>

        {children}
      </section>
    </div>
  );
}
