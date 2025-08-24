import NextAuth from "next-auth"

export default NextAuth({
  callbacks: {
    async session({ session, user, token }) {
      session.admin = session.token
      return session
    }
  }
})
