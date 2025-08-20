// src/app/api/mapData/route.ts
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'mapData.json');
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContents);

    return NextResponse.json(data);
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'データの取得に失敗' }, { status: 500 });
  }
}