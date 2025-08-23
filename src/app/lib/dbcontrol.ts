import { Prisma, PrismaClient } from "@/generated/prisma";


const prisma = new PrismaClient()

export default class DBcontrol{
  admins: () => Promise<void>;
  constructor(){
      this.admins = async () => {
        await prisma.admins.findMany()
          .then((res) => JSON.stringify(res))
          .then((data) => {return data })
      }
  }
  // ゲッター
  getAdmins(){
    return JSON.stringify(this.admins)
  }
  
  // 追加
  async addAdmins(name: string, 
    mail: string,
    password: string,
    number: string,
    gender?: string | null | undefined,
    age?: string | Date | null | undefined){

    const admin: Prisma.adminsCreateInput = {
      name: name,
      mail: mail,
      password: password,
      number: number,
      gender: gender,
      age: age,
      beacon_pieces: 0,
      start_date: "",
      end_date: null
    }

    await prisma.admins.create({data: admin})
    
  }
}