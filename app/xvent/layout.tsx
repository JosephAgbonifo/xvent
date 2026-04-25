import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// Injecting your Geist fonts as defined in your @theme inline
const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XVENT | POAP Ticketing & XMerch Templates",
  description:
    "The definitive event protocol built on the XRP Ledger. Mint tickets, issue POAPs, and deploy XMerch templates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground`}
      >
        {/* Scanline Overlay Effect - Global Brutalist Touch */}
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="relative flex flex-col min-h-screen">{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Technical Grid Background (Full Page) */}
        <div className="fixed inset-0 -z-50 pointer-events-none opacity-[0.015] [background-image:radial-gradient(var(--foreground)_1px,transparent_1px)] [background-size:40px_40px]" />
      </body>
    </html>
  );
}
