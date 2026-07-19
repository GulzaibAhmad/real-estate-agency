import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NexXaBase | AI Automation Agency for Real Estate",
  description:
    "NexXaBase helps real estate agencies automate lead management, CRM workflows, client communication, document generation, AI voice agents, WhatsApp automation, and appointment scheduling to improve operational efficiency and close more deals.",
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
      "NexXaBase helps real estate agencies automate lead management, CRM workflows, client communication, document generation, AI voice agents, WhatsApp automation, and appointment scheduling to improve operational efficiency and close more deals.",
    type: "website",
    locale: "en_US",
    siteName: "NexXaBase",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexXaBase | AI Automation Agency for Real Estate",
    description:
      "NexXaBase helps real estate agencies automate lead management, CRM workflows, client communication, document generation, AI voice agents, WhatsApp automation, and appointment scheduling to improve operational efficiency and close more deals.",
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
      className={`${dmSans.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
