import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sebastian — Frontend Developer",
  description: "Portfolio profesional de Sebastian, frontend developer enfocado en React, interfaces accesibles y experiencias web modernas.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
