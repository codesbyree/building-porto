import { WidgetGrid, WidgetContent, WidgetStat } from "@/components/ui/widget";

export function BuildingTotalCostWidget() {
  return (
    <WidgetGrid>
      <WidgetContent className="col-span-12" title="Building Total Cost">
        <section className="grid grid-cols-2 gap-2 flex-1">
          <WidgetStat title="Total cost" value="Rp 3.880,00" unit="Today" className="col-span-2" />
          <WidgetStat title="HVAC Chiller" value="58" unit="%" />
          <WidgetStat title="Lighting LED" value="24" unit="%" />
          <WidgetStat title="Water Hydro" value="18" unit="%" />
        </section>
      </WidgetContent>
    </WidgetGrid>
  );
}
