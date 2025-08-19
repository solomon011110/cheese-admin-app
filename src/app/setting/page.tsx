import Link from "next/link"


export default function Home() {
    return (
        <form action="">
            <div className="set-container">
                <div className="set-content">
                    <h1>ユーザー名</h1>
                    <div className="set">
                        <h2>メールアドレス</h2>
                        <div className="set-textbox">
                            <p>aaaa@aaa.com</p>
                        </div>
                        <h2>電話番号</h2>
                        <div className="set-textbox">
                            <p>xxx-yyyy-zzz</p>
                        </div>
                        <h2>生年月日</h2>
                        <div className="set-textbox">
                            <p>yyyy/mm/dd</p>
                        </div>
                        <h2>性別</h2>
                        <div className="set-textbox">
                            <p>gg</p>
                        </div>
                    </div>
                </div>
                <div className="setbtn">
                    <Link href="main-page">
                        <input type="submit" value="完了" className="btn"></input>
                    </Link>
                </div>
                

                

            </div>
        </form>
    )
}