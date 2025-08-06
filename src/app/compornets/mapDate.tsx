
import Link from 'next/link';
import React from 'react';

type MapDateProps = {
  title: string;
  mapLink: string;
  onDelete?: () => void;
  onUpdate?: () => void;
};

const MapDate: React.FC<MapDateProps> = ({ title, mapLink, onDelete, onUpdate }) => {
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
          <button className="itemc" onClick={onDelete}>
            地図を削除
          </button>
          <button className="itemd" onClick={onUpdate}>
            更新
          </button>
        </div>
      </details>
    </div>
  );
};

export default MapDate;