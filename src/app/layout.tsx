import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-questrial",
});

export const metadata: Metadata = {
  title: "GrowStore - Toko Item Growtopia",
  description: "Toko item Growtopia murah dan terpercaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={questrial.variable}>{children}</body>
    </html>
  );
}
