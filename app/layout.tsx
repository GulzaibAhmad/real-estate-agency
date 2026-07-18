import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexXaBase | AI Automation Agency for Real Estate",
  description:
    "NexXaBase helps real estate companies automate lead generation, CRM, AI chatbots, WhatsApp automation, appointment scheduling, AI voice agents, SMS marketing, document generation, and more.",
  keywords: [
    "AI automation",
    "real estate",
    "lead generation",
    "CRM automation",
    "AI chatbots",
    "WhatsApp automation",
    "voice agents",
    "property listing",
  ],
  openGraph: {
    title: "NexXaBase | AI Automation Agency for Real Estate",
    description:
      "NexXaBase helps real estate companies automate lead generation, CRM, AI chatbots, WhatsApp automation, appointment scheduling, AI voice agents, SMS marketing, document generation, and more.",
    type: "website",
    locale: "en_US",
    siteName: "NexXaBase",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexXaBase | AI Automation Agency for Real Estate",
    description:
      "NexXaBase helps real estate companies automate lead generation, CRM, AI chatbots, WhatsApp automation, appointment scheduling, AI voice agents, SMS marketing, document generation, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
