import { PrismaClient } from "@/generated/prisma";
import fs from 'fs';
import path from "path";

const prisma = new PrismaClient()

export default async function getAdmins(){
  const filePath = path.join(process.cwd(), "src", "data", "admins.json")
  await prisma.users.findMany()
    .then((res) => JSON.stringify(res))
    .then((data) => fs.writeFileSync(filePath, data))
    .catch((error) => {
      if(error){
        console.log(error)
      }else{
        console.log('ファイル更新完了')
      }
    })
}