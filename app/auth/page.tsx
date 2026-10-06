import { LoginForm } from "@/features/auth/components";

export default function AuthPage() {
  return (
    <main className="w-full h-dvh bg-gray-200 dark:bg-gray-700 flex">
      <section className="flex-1 grid place-items-center">
        <LoginForm />
      </section>
    </main>
  );
}
