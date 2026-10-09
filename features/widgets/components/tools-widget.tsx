import ThemeToggle from "@/components/shared/theme-toggler";
import LogoutButton from "@/components/shared/logout-button";
import { WidgetGrid, WidgetContent } from "@/components/ui/widget";
import { NotificationPopover } from "@/components/shared/notification-popover";
import { SettingPopover } from "@/components/shared/setting-popover";

export function ToolsWidget() {
  return (
    <WidgetGrid>
      <WidgetContent className="col-span-12">
        <section className="flex gap-3 justify-between w-full">
          <div className="flex gap-2 pr-2 border-r border-gray-50/20">
            <ThemeToggle />
            <NotificationPopover />
            <SettingPopover />
          </div>

          <LogoutButton />
        </section>
      </WidgetContent>
    </WidgetGrid>
  );
}
