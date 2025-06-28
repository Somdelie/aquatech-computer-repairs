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
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AppLogoIcon } from "./AppLogoIcon";
import { SocialLoginButtons } from "./SocialLoginButtons";

// Define the validation schema with Zod
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

// Type for the form values
export type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
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

    console.log("Form submitted with values:", values);

    try {
      // const result = await loginUser(values);
      // if (result.success) {
      //   toast.success("Success!", {
      //     description: result.message,
      //   });
      //   // Optional: redirect to login page
      //   router.push("/dashboard");
      // } else {
      //   toast.error("Error", {
      //     description: result.message,
      //   });
      // }
    } catch (error) {
      toast.error("Error", {
        description: "Something went wrong. Please try again.",
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="flex bg-teal-50 dark:bg-transparent flex-col items-center justify-center min-h-screen w-full py-6">
      <div className=" w-full max-w-lg bg-white rounded shadow">
        <div className="flex flex-col p-4 items-center w-full">
          {" "}
          <AppLogoIcon />
          <h1 className="mb-1 text-xl font-semibold w-full text-center">
            Sign In to Aquatech Computers
          </h1>
          <p className="text-sm w-full text-center">
            Welcome back! Sign in to continue
          </p>
          <SocialLoginButtons />
          <hr className="my-4 border-dashed w-full border-amber-200" />
          <div className="w-full">
            {" "}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
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

                <Button className="w-full bg-teal-600 hover:bg-teal-700" type="submit" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        <div className="bg-muted border p-3">
          <p className="text-accent-foreground text-center text-sm">
            Don&apos;t have an account?
            <Button asChild variant="link" className="ml-3 px-2">
              <Link href="/register">Create account</Link>
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
}
