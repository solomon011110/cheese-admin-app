
import Link from "next/link";
import MapDate from "../compornets/mapDate"

const mapDataList = [
  {
    title: "地図データ1",
    mapLink: "/map-page",
  },
  {
    title: "地図データ2",
    mapLink: "/map-page",
  },
];

export default function Home() {
  // const handleDelete = (title: string) => {
  //   console.log(`${title} を削除します`);
  // };

  // const handleUpdate = (title: string) => {
  //   console.log(`${title} を更新します`);
  // };

  return (
    <div>
      <div className="content-main">
        <div className="user-main">
          <p>ユーザ名</p>
        </div>

        <br />

        <div className="map-main">
          <p>エリア情報</p>


          {mapDataList.map(list =>
              <MapDate
                key = {list.title}
                title = {list.title}
                mapLink = {list.mapLink}
              />)}
            

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