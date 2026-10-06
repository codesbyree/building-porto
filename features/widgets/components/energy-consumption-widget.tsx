import { WidgetGrid, WidgetContent, WidgetStat } from "@/components/ui/widget";

export function EnergyConsumptionWidget() {
  return (
    <WidgetGrid>
      <WidgetContent className="col-span-12" title="Energy Consumption Overview">
        <section className="grid grid-cols-2 gap-2 flex-1">
          <WidgetStat title="Total energy" value="220.00" unit="kWh" className="col-span-2" />
          <WidgetStat title="Voltage" value="227.4" unit="V" />
          <WidgetStat title="Current" value="0.53" unit="A" />
          <WidgetStat title="Active load" value="0.024" unit="kW" />
          <WidgetStat title="Power factor" value="0.96" />
        </section>
      </WidgetContent>
    </WidgetGrid>
  );
}
