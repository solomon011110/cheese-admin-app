import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cheese for Admin",
  description: "管理者用アプリ",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <header></header>
        {children}
      </body>
    </html>
  );
}
