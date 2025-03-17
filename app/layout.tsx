import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import HeaderContextProvider from "@/contexts/header-context";
import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "J.D. Exterior",
  description: "Building Quality Siding, Windows, Doors, & More.",
  keywords: [
    "Siding",
    "Windows",
    "Doors",
    "Roofing",
    "Service",
    "Construction",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div id="modal-root" />
        <HeaderContextProvider>
          <Header />
        </HeaderContextProvider>
        {children}

        <Toaster position="bottom-right" />
        <Footer />
      </body>
    </html>
  );
}
