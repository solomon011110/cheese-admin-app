import Link from "next/link"


export default function Home() {
    return (
        <div>
            <div className="content-main">
                <div className="user-main">
                    <p>ユーザ名</p>
                </div><br></br>
                {/* <a href="setting.html" className="user-main"><p>ユーザー名</p></a> */}
                <br></br>
                <div className="map-main">
                    <p>エリア情報</p>
                    <div>
                        <details>
                            <summary><p>地図データ1</p></summary>
                                <div className="container">
                                    <div className="itema">{/*<img src="img/" width="80" height="80">*/}<p>QRコード</p></div>
                                        <Link href="" className="itemb">地図を表示</Link>
                                        <Link href="" className="itemc">地図を削除</Link>
                                        <Link href="" className="itemd">更新</Link>
                                </div>
                        </details>
                    </div>
                    <div>
                        <details>
                            <summary><p>地図データ2</p></summary>
                                <div className="container">
                                    <div className="itema"><p>QRコード</p></div>
                                    <Link href="" className="itemb">地図を表示</Link>
                                    <Link href="" className="itemc">地図を削除</Link>
                                    <Link href="" className="itemd">更新</Link>
                                </div>
                        </details>
                    </div>
                    <div>
                        <Link href="add_new_area.html">
                            <div className="databtn"><p>＋新しいエリア</p></div>
                        </Link>
                    </div>
                </div><br></br>
                <Link href="setting.html" className="set-main"><p>設定</p></Link>
            </div>
        </div>
        
    // <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    // <script src="js/script.js"></script>
    );
}