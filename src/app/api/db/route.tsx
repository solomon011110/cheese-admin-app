import prisma from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
	const users = prisma()
	return NextResponse.json(users)
	
}