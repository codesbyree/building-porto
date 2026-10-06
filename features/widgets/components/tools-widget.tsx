import ThemeToggle from "@/components/shared/theme-toggler";
import LogoutButton from "@/components/shared/logout-button";
import { WidgetGrid, WidgetContent } from "@/components/ui/widget";

export function ToolsWidget() {
  return (
    <WidgetGrid>
      <WidgetContent className="col-span-12">
        <section className="flex gap-3 justify-between w-full">
          <ThemeToggle />
          <LogoutButton />
        </section>
      </WidgetContent>
    </WidgetGrid>
  );
}
