import { Navigation } from "@/components/shared/navigation";
import FloorNavigationWidget from "@/features/widgets/components/floor-navigation-widget";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation />
      <FloorNavigationWidget />
      {children}
    </div>
  );
}
