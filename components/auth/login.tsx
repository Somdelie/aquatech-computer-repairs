"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// import { toast } from "sonner";
import { useRouter } from "next/navigation";

// import { loginUser } from "@/actions/users";
import SocialButtons from "./SocialButtons";

// Define the validation schema with Zod
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

// Type for the form values
export type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  // Initialize react-hook-form with zod validation
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Form submission handler
  async function onSubmit(values: LoginFormValues) {
    setIsLoading(true);
    console.log(values);
    // try {
    //   const result = await loginUser(values);
    //   if (result.success) {
    //     toast.success("Success!", {
    //       description: "Login Successfully",
    //     });
    //     // Optional: redirect to login page
    //     router.push("/dashboard");
    //   } else {
    //     if (result.status === "UNAUTHORIZED") {
    //       toast.error("Wrong Credentials", {
    //         description: result.error,
    //       });
    //     } else {
    //       toast.error("Error", {
    //         description: result.error,
    //       });
    //     }
    //   }
    // } catch (error) {
    //   toast.error("Error", {
    //     description: "Something went wrong. Please try again.",
    //   });
    //   console.log(error);
    // } finally {
    //   setIsLoading(false);
    // }
  }

  return (
    <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
      <div className="bg-card m-auto h-fit w-full max-w-md rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]">
        <div className="p-8 pb-6">
          <div>
            <Link href="/" aria-label="go home">

              {/* <AppLogoIcon className="h-10 fill-current text-black sm:h-12" / */}
            </Link>
            <h1 className="mb-1 mt-4 text-xl font-semibold">
              Sign In to Tailark
            </h1>
            <p className="text-sm">Welcome back! Sign in to continue</p>
          </div>

          <SocialButtons />

          <hr className="my-4 border-dashed" />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="block text-sm">Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-0.5">
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-title text-sm">
                        Password
                      </FormLabel>
                      <Button asChild variant="link" size="sm">
                        <Link
                          href="#"
                          className="link intent-info variant-ghost text-sm"
                        >
                          Forgot your Password?
                        </Link>
                      </Button>
                    </div>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </Form>
        </div>

        <div className="bg-muted rounded-(--radius) border p-3">
          <p className="text-accent-foreground text-center text-sm">
            Don&apos;t have an account?
            <Button asChild variant="link" className="ml-3 px-2">
              <Link href="/signup">Create account</Link>
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
}
