// フォームから遅れてきたJSONファイルとデータベースを比較して登録の是非を確認する。
// 問題なければ登録完了
// 重複などの問題があればエラーをリターン

import DB from "@/app/lib/dbcontrol";
import hashpass from "@/app/lib/hash";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
	const res = {
		message: '',
		competitor: false,
		subscribe: false
	}
	const db = new DB()
	const adminsData = db.getAdmins()
	const admins = JSON.parse(adminsData)
	const body = await req.json()
	
	// メールアドレスの競合を検索
	admins.forEach((admin: { mail: string; }) => {
		if(admin.mail == body.email){
			res.message = "このメールアドレスは登録されています。"
			res.competitor = true
			return
		}
	})
	if(!res.competitor){
		// パスワードのハッシュ化
		hashpass(body.password)
		res.subscribe = true
	}

	return NextResponse.json(res)
}