import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "POSTCRAFT",
  description: "LIFE OF POSTCRAFT ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-2 sm:p-4 md:p-8">

    <div className="w-full max-w-7xl mx-auto backdrop:blur-xl bg-white/30 border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">

    <header className="border-b-4 border-black p-4 sm:p-6 bg-white/40 backdrop-blur-md">
    <div className="flex justify-between items-center gap-4">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Button variant="outline" size="icon" className="rounded-xl border-2 border-black">

            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>

        <Link href="/">
          <Button variant="outline" size="icon" className="rounded-xl border-2 border-black">
            <Home className="h-5 w-5" />
          </Button>
        </Link>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">POSTCRAFT VISUAL</h1>
      </div>
    </div>
    </header>


    <div className="p-4 sm:p-6">{children}</div>
    </div>
   </div>
  );
}
