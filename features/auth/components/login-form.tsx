"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { APP_ROUTES } from "@/config/routes";

import { useAuthStore } from "@/store/auth-store";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function LoginForm() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const [userId, setUserId] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = userId.trim();
    if (!trimmed) {
      setError("User ID is required.");
      return;
    }

    login(trimmed);
    router.replace(APP_ROUTES.private.dashboard.monitoring);
  }

  return (
    <Card className="w-full max-w-sm bg-gray-950/60 outline-gray-600/20 outline rounded-md">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Enter your user ID to continue.</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} id="login-form">
          <FieldSet className="w-full">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input
                  id="username"
                  type="text"
                  placeholder="Max Leiter"
                  value={userId}
                  onChange={(event) => {
                    setUserId(event.target.value);
                    setError(null);
                  }}
                  aria-invalid={error ? true : undefined}
                />
                <FieldDescription>Choose a unique username for your account.</FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>
          {error ? <p className="mt-2 text-xs text-destructive">{error}</p> : null}
        </form>
      </CardContent>

      <CardFooter>
        <Button type="submit" form="login-form" className="w-full">
          Continue
        </Button>
      </CardFooter>
    </Card>
  );
}
