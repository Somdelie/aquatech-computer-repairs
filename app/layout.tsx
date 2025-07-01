import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: {
    default: "Aquatech Computer Repairs",
    template: "%s | Aquatech Computer Repairs",
  },
  description:
    "Affordable and reliable computer, laptop, and cellphone repair services. We also sell quality second-hand phones and computers.",
  keywords: [
    "Aquatech",
    "computer repairs",
    "laptop repair",
    "cellphone repair",
    "LCD replacement",
    "iPhone repair",
    "motherboard repair",
    "second-hand phones",
    "used computers",
    "IT support South Africa",
  ],
  authors: [{ name: "Aquatech", url: "https://aquatech.example.com" }],
  creator: "Aquatech Computer Repairs",
  metadataBase: new URL("https://aquatech.example.com"),
  openGraph: {
    title: "Aquatech Computer Repairs",
    description:
      "Top-rated repair services for laptops, phones, and more. Visit us for reliable fixes and affordable used devices.",
    url: "https://aquatech.example.com",
    siteName: "Aquatech Computer Repairs",
    images: [
      {
        url: "/aqua-logo.png", // Make sure this exists in /public
        width: 800,
        height: 900,
        alt: "Aquatech Computer Repairs Logo",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  icons: {
    icon: "/aqua-log-2.png", // or "/logo.png"
    shortcut: "/aqua-log-2.png",
    apple: "/aqua-logo.png",
  },
 robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
    <main>{children}</main>
    <Toaster />
      </body>
    </html>
  );
}
