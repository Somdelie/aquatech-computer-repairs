import Footer from "@/components/front/Footer";
import Navbar from "@/components/front/Navbar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import { ReactNode } from "react";

export default async function FrontLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar
        session={
          session?.user
            ? { ...session.user, image: session.user.image ?? undefined }
            : undefined
        }
      />
      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
