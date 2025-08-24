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
	const adminsData = await db.getAdmins()
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

		// 登録情報のフォーマット化
		await arrengeFormat(body)

		// DB登録
		db.addAdmins(body)
		res.subscribe = true
	}

	return NextResponse.json(res)
}

// フォーマット整理用関数
async function arrengeFormat(body: {
	password:string,
	tel:string,
	birthDate:string,
	gender: string | null }){

	// パスワードのハッシュ化
	body.password = hashpass(body.password)

	// 電話番号のハイフン追加
	const number = body.tel
	const numbers = [number.slice(0, 3), number.slice(3, 7), number.slice(7)]
	body.tel = numbers[0] + '-' + numbers[1] + '-' + numbers[2]

	// 生年月日のタイムスタンプ化
	body.birthDate = new Date(body.birthDate).toISOString()

	// 性別の空白をnullに変更する
	if(!body.gender){
		body.gender = null
	}
}