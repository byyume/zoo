import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Win98 Roulette",
  description: "Windows 98 Style Animated Roulette",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
