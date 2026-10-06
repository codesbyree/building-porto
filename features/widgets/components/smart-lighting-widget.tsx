import { WidgetGrid, WidgetContent, WidgetStat } from "@/components/ui/widget";

export function SmartLightingWidget() {
  return (
    <WidgetGrid>
      <WidgetContent className="col-span-12" title="Smart Lighting Overview">
        <section className="grid grid-cols-2 gap-2 flex-1">
          <WidgetStat title="Lighting power" value="622" unit="kWh" className="col-span-2" />
          <WidgetStat title="Status" value="ON" />
          <WidgetStat title="Lux level" value="420" unit="lx" />
          <WidgetStat title="Dimming" value="85" unit="%" className="col-span-2" />
        </section>
      </WidgetContent>
    </WidgetGrid>
  );
}
