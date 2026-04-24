import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "판교 맛집 랜덤 추천기",
  description: "모두가 만들어가는 판교 맛집 리스트 - 랜덤 추천",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" style={{ height: '100%' }}>
      <body style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', margin: 0 }}>{children}</body>
    </html>
  );
}
