import type { Metadata } from "next";
import "./globals.css";
import { Glysa, LexendDeca } from "@/fonts";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact management page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Glysa.variable} ${LexendDeca.variable}`}>
        {children}
      </body>
    </html>
  );
}
