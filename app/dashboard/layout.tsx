import { Navigation } from "@/components/shared/navigation";
import { AuthGuard } from "@/components/shared/auth-guard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <div className="overflow-hidden relative">
        <Navigation />
        {children}
      </div>
    </AuthGuard>
  );
}
