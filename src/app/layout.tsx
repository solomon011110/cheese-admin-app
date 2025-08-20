"use client";

import "./globals.css";
import "./reset-min.css";
import React from "react";
import Header from "./compornents/header";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        <title>Cheese for Admin</title>
        <meta name="description" content="Cheese管理者用アプリケーション" />
      </head>
      <body>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}