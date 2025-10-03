import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";
import { Italiana, Courier_Prime } from "next/font/google";
import { Toaster } from "react-hot-toast";

//uppdate when we have a company/brand name
export const metadata: Metadata = {
  title: "[Brand name] fashion e-commerce",
  description:
    "Buy clothes online at [Brand Name]. Affordable fashion, fast shipping, and a wide selection of styles for every occasion.",
};

const italiana = Italiana({
  weight: "400",
  variable: "--font-italiana",
});
const courierPrime = Courier_Prime({
  weight: "400",
  variable: "--font-courier-prime",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${italiana.variable} ${courierPrime.variable}`}>
      <body>
        <Toaster />
        <Navigation />
        <main className="content-grid">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
