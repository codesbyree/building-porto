import { WidgetIsland } from "@/components/ui/widget";
import { Navigation } from "@/components/shared/navigation";
import {
  ToolsWidget,
  LogoWidget,
  EnergyConsumptionWidget,
  SmartLightingWidget,
  HvacNodeWidget,
  AirQualityWidget,
  BuildingTotalCostWidget,
  BuildingComfortRateWidget,
} from "@/features/widgets/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navigation />

      <WidgetIsland position="left">
        <LogoWidget />
        <EnergyConsumptionWidget />
        <SmartLightingWidget />
        <HvacNodeWidget />
      </WidgetIsland>

      <WidgetIsland position="right">
        <ToolsWidget />
        <BuildingTotalCostWidget />
        <BuildingComfortRateWidget />
        <AirQualityWidget />
      </WidgetIsland>

      {children}
    </main>
  );
}
