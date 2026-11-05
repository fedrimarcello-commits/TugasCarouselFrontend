import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
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
      <body className={fredoka.variable}>{children}</body>
    </html>
  );
}
