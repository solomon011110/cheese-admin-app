"use client"

import "./globals.css";
import "./reset-min.css";
import React from 'react';
import Header from "./compornets/header"

const handleClick = () => {
  alert("クリックされました")
}
export default function RootLayout({ children, }: Readonly <{children: React.ReactNode;}>) {
  return (
    <html lang="ja">
      <title>Cheese for Admin</title>
      <meta name="description" content="Cheese管理者用アプリケーション" />
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}

