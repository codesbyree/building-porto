import { notFound } from "next/navigation";

import { AnalyticsDataTable } from "@/features/analytics/components";
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

  return <AnalyticsDataTable category={category} />;
}
