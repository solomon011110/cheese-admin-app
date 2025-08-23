"use server"
import { NextRequest, NextResponse } from "next/server";
import hash from '@/app/lib/hash';
import fs from 'fs'
import path from "path";

// GET通信用
// const searchParams = req.nextUrl.searchParams

export async function POST(req: NextRequest){
    const body = await req.json()
    const filePath = path.join(process.cwd(), 'src', 'data', 'admins.json')
    const adminsData = fs.readFileSync(filePath, 'utf-8')
    const admins = JSON.parse(adminsData)
    const res = {
        message: "メールアドレスまたはパスワードが違います。",
        login: false
    }
    // DBからメールアドレスを検索
    // 見つかったらパスワード比較
    admins.forEach((admin: { mail: string; password: string; }) => {
        if(admin.mail == body.email){
            if (hash(body.password) == admin.password){
                res.message = "ログイン完了"
                res.login = true
            }
            return
        }
    });
    // 結果をリターン
    return NextResponse.json(res)
}