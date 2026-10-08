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
import { WidgetIsland } from "@/components/ui/widget";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
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
