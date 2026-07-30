import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Adimus Ricky Faisal Sahri | Web Developer & IoT Enthusiast",
  description:
    "Portfolio of Adimus Ricky - Web Developer & IoT Enthusiast from Malang, Indonesia. Specializing in Laravel, React, ESP32, and industrial monitoring systems.",
  keywords: [
    "web developer",
    "IoT",
    "Laravel",
    "React",
    "ESP32",
    "portfolio",
    "Malang",
    "Indonesia",
    "SCADA",
    "Modbus",
  ],
  metadataBase: new URL("https://adimusricky.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Adimus Ricky Faisal Sahri | Web Developer & IoT Enthusiast",
    description:
      "Portfolio of Adimus Ricky - Web Developer & IoT Enthusiast from Malang, Indonesia.",
    url: "https://adimusricky.vercel.app",
    siteName: "Adimus Ricky Portfolio",
    images: [
      {
        url: "/assets/profile-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Adimus Ricky Faisal Sahri",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adimus Ricky Faisal Sahri | Web Developer & IoT Enthusiast",
    description:
      "Portfolio of Adimus Ricky - Web Developer & IoT Enthusiast from Malang, Indonesia.",
    images: ["/assets/profile-photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "google-site-verification": "ys745uZahX5ZFm-e88UeqxgYtQnlxPxJM6pLZ4y7Zf8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${jetbrains.variable} antialiased`} suppressHydrationWarning>
      <body className="selection:bg-white selection:text-black">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
