"use server"
import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from "next/server";

// GET通信用
// const searchParams = req.nextUrl.searchParams

export async function POST(req: NextRequest){
    const body = await req.json()
    let isSuccess = true
    let res = {
        message: "POST通信",
        login: isSuccess
    }

    // DBからメールアドレスを検索
    // 見つかったらパスワード比較
    // 結果をリターン

    if(isSuccess){
        res.message = "ログイン成功"
    }else{
        res.message = "メールアドレスまたはパスワードが違います。"
    }

    return NextResponse.json(res)
}