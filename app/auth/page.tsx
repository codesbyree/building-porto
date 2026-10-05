import { LoginForm } from "@/features/auth/components";

export default function AuthPage() {
  return (
    <main className="w-full h-dvh flex bg-background">
      <section className="flex-1 grid place-items-center">
        <LoginForm />
      </section>
    </main>
  );
}
