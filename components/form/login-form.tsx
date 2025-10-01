"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import * as React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

import { cn } from "@/lib/utils";

import { login } from "@/app/actions/auth";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/ui/form-error";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import { PasswordInput } from "@/components/ui/password-input";
import { useSession } from "@/contexts/session-provider";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { refetch } = useSession();
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const signInSchema = z.object({
    username: z
      .string()
      .nonempty("userName is required")
      .min(6, "userName must be more than 8 characters"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
  });

  type LoginFormData = z.infer<typeof signInSchema>;

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setError("");

    try {
      const result = await login(data);
      if (result.success) {
        await refetch();
        router.push("/");
      } else {
        setError(result.error || "Login failed");
      }
    } catch {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 p-6 md:p-8 w-full"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Welcome back</h1>
                  <p className="text-muted-foreground text-balance">
                    Login to your Admin account
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          placeholder="Enter password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pb-6">
                  <LoadingButton
                    type="submit"
                    loading={form.formState.isSubmitting}
                    loadingText="Signing in..."
                    className="w-full"
                  >
                    Sign In
                  </LoadingButton>
                  <FormError message={error} />
                </div>
              </div>
            </form>
          </Form>

          <div className="bg-muted relative hidden md:block">
            <Image
              src="/login.jpg"
              alt="Login illustration"
              fill
              className="object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>

      <div className="text-muted-foreground text-center text-xs text-balance">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
