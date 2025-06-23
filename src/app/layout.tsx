import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./reset-min.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        <header>
                <nav className="nav">
                    <ul>
                        <li>Cheese for admin</li>
                    </ul>
                </nav>
            
                <nav className="menu">
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                    <li><Link href="#">設定</Link></li>
                    <li><Link href="#">ログアウト</Link></li>
                    </ul>
                </nav>
            </header>
        {children}
      </body>
    </html>
  );
}
