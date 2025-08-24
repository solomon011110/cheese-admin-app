import NextAuth from "next-auth"

export default NextAuth({
  callbacks: {
    async session({ session }) {
      session.admin = session.token
      return session
    }
  }
})
