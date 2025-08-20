import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient()

export default async function fecthUsers(){
  const allUsers = await prisma.users.findMany()
  console.log(allUsers)
}