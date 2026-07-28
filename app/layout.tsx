import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  description: "Portfolio website showcasing web development and IoT projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${jetbrains.variable} antialiased`}>
      <body className="bg-background text-on-background selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
