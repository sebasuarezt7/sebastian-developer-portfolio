import type { Metadata } from "next";
import "./globals.css";
import "./profile.css";

// Keeping the main metadata here gives every portfolio page a clear title in search results and browser tabs.
export const metadata: Metadata = {
  title: "Sebastian Suarez — Junior Full-Stack Developer",
  description: "Sebastian Suarez is a bilingual Computer Programming graduate from Humber College and junior full-stack developer in the Toronto area.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
