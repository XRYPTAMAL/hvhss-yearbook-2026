import type { Metadata } from "next";
import { Poppins, Inter, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
  display: "swap"
});

export const metadata: Metadata = {
  title: "HVHSS Vellanad — Batch of 2026",
  description:
    "A digital yearbook for the Class 10 Batch of 2026, HVHSS Vellanad. Students, teachers, events, memories, and everything worth keeping.",
  keywords: ["HVHSS Vellanad", "Batch of 2026", "Digital Yearbook", "10B"],
  openGraph: {
    title: "HVHSS Vellanad — Batch of 2026",
    description: "A digital yearbook for the Class 10 Batch of 2026.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable} ${caveat.variable} font-body`}>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="pt-[64px]">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
