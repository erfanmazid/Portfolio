import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/features/navbar";
import InfoSection from "@/components/features/info";

const iranSans = localFont({
  src: "./fonts/IRANSans.woff2",
  variable: "--font-iran-sans",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`font-iranSans ${iranSans.variable} h-screen antialiased bg-smoky-black p-5 xl:flex xl:justify-center xl:items-center xl:gap-7`}
      >
        <InfoSection />
        <Navbar />
        <main className="mb-16">{children}</main>
      </body>
    </html>
  );
}
