import { notFound } from "next/navigation";

import { AnalyticsDataTable, AnalyticsSearchInput, AnalyticsSummary, AnalyticsTabsNav } from "@/features/analytics/components";
import { analyticsCategories, getAnalyticsCategory } from "@/features/analytics/data";

export function generateStaticParams() {
  return analyticsCategories.map((category) => ({ category: category.slug }));
}

export default async function AnalyticsCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getAnalyticsCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="w-full grid grid-cols-[400px_1fr_400px] gap-y-5">
      <aside className="px-4">
        <AnalyticsSummary category={category} />
      </aside>

      <section className="flex flex-col gap-4 col-span-2 px-4">
        <div className="flex items-center justify-between gap-4">
          <AnalyticsTabsNav />
          <AnalyticsSearchInput />
        </div>
        <AnalyticsDataTable category={category} />
      </section>
    </div>
  );
}
