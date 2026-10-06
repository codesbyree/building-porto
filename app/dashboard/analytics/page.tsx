import { redirect } from "next/navigation";

import { analyticsCategories } from "@/features/analytics/data";

export default function AnalyticsPage() {
  redirect(`/dashboard/analytics/${analyticsCategories[0].slug}`);
}
