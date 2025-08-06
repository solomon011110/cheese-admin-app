
import Link from 'next/link';
import React from 'react';


export default function MapDate ({ title, mapLink })  {
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
          <button className="itemc">
            地図を削除
          </button>
          <button className="itemd">
            更新
          </button>
        </div>
      </details>
    </div>
  );
};

