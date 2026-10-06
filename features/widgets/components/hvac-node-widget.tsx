import { WidgetGrid, WidgetContent, WidgetStat } from "@/components/ui/widget";

export function HvacNodeWidget() {
  return (
    <WidgetGrid>
      <WidgetContent className="col-span-12" title="HVAC Node Overview">
        <section className="grid grid-cols-2 gap-2 flex-1">
          <WidgetStat title="HVAC load" value="220.0" unit="kWh" className="col-span-2" />
          <WidgetStat title="AC status" value="ON" />
          <WidgetStat title="Room temp" value="23.5" unit="°C" />
          <WidgetStat title="Humidity" value="54.0" unit="%" />
          <WidgetStat title="Setpoint" value="22.0" unit="°C" />
        </section>
      </WidgetContent>
    </WidgetGrid>
  );
}
