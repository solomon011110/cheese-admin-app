"use client"
import Link from "next/link";
import MapDate from "./compornents/mapDate"
import fs from 'fs/promises';
import path from 'path';

type MapData = {
  title: string;
  mapLink: string;
};

export default async function Page() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'mapData.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const mapDataList: MapData[] = JSON.parse(jsonData);

  return (
    <div>
      <div className="content-main">
        <div className="user-main">
          <p>ユーザ名</p>
        </div>

        <br />

        <div className="map-main">
          <p>エリア情報</p>

        
        <div className="map-data">
          {mapDataList.map(list =>
              <MapDate
                key = {list.title}
                title = {list.title}
                mapLink = {list.mapLink}
              />)}
        </div>
          

          <div>
            <Link href="/add-newarea">
              <div className="databtn">
                <p>＋新しいエリア</p>
              </div>
            </Link>
          </div>
        </div>


        <br />

        <Link href="/setting" className="set-main">
          <p>設定</p>
        </Link>
      </div>
    </div>
  );
}
