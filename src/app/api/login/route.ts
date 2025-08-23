import { NextRequest, NextResponse } from "next/server";
import getAdmins from "@/app/lib/dbcontrol";
import hashpass from "@/app/lib/hash";

// GET通信用
// const searchParams = req.nextUrl.searchParams

export async function POST(req: NextRequest){
    const res = {
        message: "メールアドレスまたはパスワードが違います。",
        login: false
    }

    const body = await req.json()
    const adminsData = await getAdmins()
    const admins = JSON.parse(adminsData)

    // DBからメールアドレスを検索
    // 見つかったらパスワード比較
    admins.forEach((admin: { mail: string; password: string; }) => {
        if(admin.mail == body.email){
            if (hashpass(body.password) == admin.password){
                res.message = "ログイン完了"
                res.login = true
            }
            return
        }
    });
    // 結果をリターン
    return NextResponse.json(res)
}