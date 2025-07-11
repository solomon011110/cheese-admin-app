"use server"
import { NextRequest, NextResponse } from "next/server";

// const searchParams = req.nextUrl.searchParams

export async function POST(req: NextRequest){
    const res = await req.json()
    console.log(res.email)
    return NextResponse.json({
        message: "POST通信でログイン",
        email: res.email,
        password: res.password
    })
}