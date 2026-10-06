import { WidgetGrid, WidgetContent, WidgetStat } from "@/components/ui/widget";

export function BuildingComfortRateWidget() {
  return (
    <WidgetGrid>
      <WidgetContent className="col-span-12" title="Building Comfort Rate">
        <section className="grid grid-cols-2 gap-2 flex-1">
          <WidgetStat title="PMV" value="-0.2" unit="Mean Vote" />
          <WidgetStat title="Comfort index" value="97" unit="%" />
          <WidgetStat title="PPD" value="14" unit="% Dissatisfied" className="col-span-2" />
          <WidgetStat title="Live occupancy" value="0" unit="Persons" className="col-span-2" />
        </section>
      </WidgetContent>
    </WidgetGrid>
  );
}
