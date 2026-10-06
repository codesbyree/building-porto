import { Navigation } from "@/components/shared/navigation";
import { ToolsWidget, LogoWidget } from "@/features/widgets/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-gray-200 dark:bg-gray-700 h-dvh">
      <Navigation />

      <div className="grid grid-cols-[400px_1fr_400px] gap-y-10">
        <section className="row-start-2 col-start-1 col-span-3">{children}</section>

        <div className="p-4 pb-0">
          <LogoWidget />
        </div>

        <div className="col-start-3 p-4 pb-0">
          <ToolsWidget />
        </div>
      </div>
    </main>
  );
}
