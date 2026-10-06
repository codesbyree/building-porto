import { WidgetGrid, WidgetContent, WidgetStat } from "@/components/ui/widget";

export function AirQualityWidget() {
  return (
    <WidgetGrid>
      <WidgetContent className="col-span-12" title="Air Quality Overview">
        <section className="grid grid-cols-2 gap-2 flex-1">
          <WidgetStat title="Air index" value="28" unit="AQI/ISPU" className="col-span-2" />
          <WidgetStat title="CO2 level" value="435" unit="ppm" />
          <WidgetStat title="PM2.5" value="8.0" unit="µg" />
          <WidgetStat title="Status" value="GOOD" className="col-span-2" />
        </section>
      </WidgetContent>
    </WidgetGrid>
  );
}
