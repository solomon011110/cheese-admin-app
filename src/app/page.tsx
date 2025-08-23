"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import MapDate from "./compornents/mapDate";
import { redirect } from "next/navigation";

type MapData = {
  id: string;
  title: string;
  mapLink: string;
};

export default function Page() {
  const [mapDataList, setMapDataList] = useState<MapData[]>([]);
  const [error, setError] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const login = false

  useEffect(() => {
    fetch("/api/mapData")
      .then((res) => res.json())
      .then((data) => setMapDataList(data))
      .catch(() => setError(true));
  }, [refreshKey]);

  if(login){
    console.log("ログイン済み")
  }else{
    redirect("./login")
  }


  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

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
                  key={list.id}
                  id={list.id}
                  title={list.title}
                  mapLink={list.mapLink}
                  onRefresh={handleRefresh}
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