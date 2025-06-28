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
import { SVGAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AppLogoIcon } from "./AppLogoIcon";
import { SocialLoginButtons } from "./SocialLoginButtons";

// Define schema for form validation with Zod
const registerSchema = z.object({
  firstName: z.string().min(2, "Firstname must be at least 2 characters"),
  lastName: z.string().min(2, "Lastname must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Initialize form with React Hook Form and Zod validation
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: RegisterFormValues) => {
    console.log(data);
    setIsSubmitting(true);

    try {
      // const result = await registerUser(data);
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
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex bg-teal-50 dark:bg-transparent flex-col items-center justify-center min-h-screen w-full py-6">
      <div className=" w-full max-w-lg bg-white rounded shadow">
        <div className="flex flex-col p-4 px-6 items-center w-full">
          {" "}
          <AppLogoIcon />
          <h1 className="mb-1 text-xl font-semibold w-full text-center">
            Create Your Aquatech Account
          </h1>
          <p className="text-sm w-full text-center">
            Welcome! Create an account to get started
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
                <div className="grid grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="block text-sm">Firstname</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="block text-sm">Lastname</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

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
                      <FormLabel className="text-title text-sm">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="w-full bg-teal-600 hover:bg-teal-700" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        <div className="bg-muted border p-3">
          <p className="text-accent-foreground text-center text-sm">
            Already have an account?
            <Button asChild variant="link" className="ml-3 px-2">
              <Link href="/login">Sign In</Link>
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
}