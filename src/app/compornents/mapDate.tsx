import Link from "next/link";
import React from "react";

type Props = {
  id: string;
  title: string;
  mapLink: string;
  onRefresh: () => void;
};

export default function MapDate({ id, title, mapLink, onRefresh }: Props) {
  const handleDelete = async () => {
    try {
      await fetch(`/api/mapData/${id}`, { method: "DELETE" });
      onRefresh();
    } catch (err) {
      console.error("削除に失敗しました", err);
    }
  };

  return (
    <div>
      <details>
        <summary>
          <p>{title}</p>
        </summary>
        <div className="container">
          <div className="itema">
            <p>QRコード</p>
          </div>
          <Link href={mapLink} className="itemb">
            地図を表示
          </Link>
          <button className="itemc" onClick={handleDelete}>
            地図を削除
          </button>
          <button className="itemd" onClick={onRefresh}>
            更新
          </button>
        </div>
      </details>
    </div>
  );
}