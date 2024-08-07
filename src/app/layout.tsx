import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute:"",
    default:"Nextjs Tutorial - UmairJaffar",
    template:"%s | UmairJaffar"
  },
  description: "These tutorial is created by 'Me.com'.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
          <Header />
          <main className="bg-gray-50">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
