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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
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
