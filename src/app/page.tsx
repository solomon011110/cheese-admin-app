"use client"
import Link from "next/link"
import { redirect } from "next/navigation";


export default function Home() {
    // ページが読み込まれたとき
    const login = false
    if (login) {
        console.log("ログイン済み")
    }else{
        console.log("未ログイン")
        redirect("./login")
    }
    return (
        <div>
            <div className="content-main">
                <div className="user-main">
                    <p>ユーザ名</p>
                </div>
                <br></br>
                <div className="map-main">
                    <p>エリア情報</p>
                    <div className="map-data">
                        <div>
                            <details>
                                <summary><p>地図データ1</p></summary>
                                    <div className="container">
                                        <div className="itema"><p>QRコード</p></div>
                                            <Link href="map-page" className="itemb">地図を表示</Link>
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
                                        <Link href="map-page" className="itemb">地図を表示</Link>
                                        <Link href="" className="itemc">地図を削除</Link>
                                        <Link href="" className="itemd">更新</Link>
                                    </div>
                            </details>
                        </div>
                    </div>
                    <div>
                        <Link href="add-newarea">
                            <div className="databtn"><p>＋新しいエリア</p></div>
                        </Link>
                    </div>
                </div><br></br>
                <Link href="setting" className="set-main"><p>設定</p></Link>
            </div>
        </div>
    );
}