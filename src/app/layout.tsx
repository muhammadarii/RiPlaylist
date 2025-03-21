import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import LayoutClient from "./layout.client";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "R1estate",
  description: "Easy way to find a perfect property",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased mx-auto container`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
