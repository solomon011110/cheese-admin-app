import { Prisma, PrismaClient } from "@/generated/prisma";

  const prisma = new PrismaClient()

export default class DBcontrol{
  today: Date;

  constructor(){
    this.today = new Date()

  }
  // ゲッター
  async getAdmins(){
    const adminsData = await prisma.admins.findMany()
      .then((res) => JSON.stringify(res))
      .then((data) => {
        return data
      })
    return adminsData
  }
  
  // 追加
  async addAdmins(body: {userName: string, 
    email: string,
    password: string,
    tel: string,
    gender?: string | null | undefined,
    birthDate?: string | Date | null | undefined}){

    const admin: Prisma.adminsCreateInput = {
      name: body.userName,
      mail: body.email,
      password: body.password,
      number: body.tel,
      gender: body.gender,
      age: body.birthDate,
      beacon_pieces: 0,
      start_date: this.today.toISOString(),
      end_date: null
    }

    await prisma.admins.create({data: admin})
    
  }
}