import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/features/navbar";
import InfoSection from "@/components/features/info";
import { Toaster } from "react-hot-toast";

const iranSans = localFont({
  src: "./fonts/IRANSans.woff2",
  variable: "--font-iran-sans",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "عرفان مزیدآبادی | Portfolio",
  description: "Generated by create next app",
  icons: {
    icon: "/Portfolio/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`font-iranSans ${iranSans.variable} h-screen antialiased bg-smoky-black p-5 `}
      >
        <Toaster position="top-center" />
        <Navbar />
        <div className="xl:flex xl:justify-center xl:items-start xl:p-6 xl:gap-7">
          <InfoSection />
          <main className="mb-24 xl:mb-0">{children}</main>
        </div>
      </body>
    </html>
  );
}
