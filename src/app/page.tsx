"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import MapDate from "./compornents/mapDate";

type MapData = {
  title: string;
  mapLink: string;
};

export default function Page() {
  const [mapDataList, setMapDataList] = useState<MapData[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/mapData")
      .then((res) => res.json())
      .then((data) => setMapDataList(data))
      .catch(() => setError(true));
  }, []);

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
            {error ? (
              <p>データの取得に失敗しました。</p>
            ) : mapDataList.length === 0 ? (
              <p>読み込み中...</p>
            ) : (
              mapDataList.map((list) => (
                <MapDate
                  key={list.title}
                  title={list.title}
                  mapLink={list.mapLink}
                />
              ))
            )}
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