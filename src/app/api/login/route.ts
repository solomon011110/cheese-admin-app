"use server"
import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from "next/server";
import hash from '@/app/lib/hash';

// GET通信用
// const searchParams = req.nextUrl.searchParams

export async function POST(req: NextRequest){
    const body = await req.json()
    const hashPass = hash("aaaaa")
    let isSuccess = false
    let res = {
        message: "POST通信",
        login: false
    }
    if (body.password == hashPass){
        isSuccess = true
    }
    // DBからメールアドレスを検索
    // 見つかったらパスワード比較
    // 結果をリターン

    if(isSuccess){
        res.message = "ログイン成功"
        res.login = true
    }else{
        res.message = "メールアドレスまたはパスワードが違います。"
    }

    return NextResponse.json(res)
}