import type { Metadata } from "next";
import "./globals.css";
import "./reset-min.css";
import Link from "next/link";

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
<<<<<<< HEAD
        <header></header>
=======
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
>>>>>>> 147d8a266fcaf20607e53ac917c64a9d18b059e6
        {children}
      </body>
    </html>
  );
}
