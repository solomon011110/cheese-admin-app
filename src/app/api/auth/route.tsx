"use client";

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // 仮のユーザー認証（DBなし）
        if (credentials?.username === "aaaaa" && credentials?.password === "1234") {
          return { id: "1", name: "aaaaa", email: "aaaaa@example.com" };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      // 一時的にDBがなくても処理
      if (token) {
        session.user = {
          ...session.user,
          id: token.sub ?? "guest",
        };
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };