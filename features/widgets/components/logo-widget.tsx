import { WidgetGrid, WidgetContent } from "@/components/ui/widget";
import { FloorIndicator } from "@/components/ui/floor-indicator";

export function LogoWidget() {
  return (
    <WidgetGrid>
      <WidgetContent className="col-span-12">
        <section className="flex-1 flex items-center justify-between">
          <p className="text-sm text-gray-50 font-semibold">
            UBM <FloorIndicator />
          </p>
        </section>
      </WidgetContent>
    </WidgetGrid>
  );
}
