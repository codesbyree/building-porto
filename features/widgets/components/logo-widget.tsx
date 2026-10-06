import { WidgetGrid, WidgetContent } from "@/components/ui/widget";

export function LogoWidget() {
  return (
    <WidgetGrid>
      <WidgetContent className="col-span-12">
        <section className="flex-1 flex items-center">
          <p className="text-sm text-gray-50 font-semibold">Urbansolv Building Monitoring</p>
        </section>
      </WidgetContent>
    </WidgetGrid>
  );
}
