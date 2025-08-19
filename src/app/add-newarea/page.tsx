"use client"
import Link from "next/link"

export default function Home() {
    return (
        <form action="">
            <ol className="step-list">
                <li className="step-list__item step-list__item--current">
                    <span className="step-list__inner">
                        <span className="step-text">画像選択</span>
                    </span>
                </li>
                <li className="step-list__item">
                    <span className="step-list__inner">
                        <span className="step-text">Beacon設定</span>
                    </span>
                </li>
                <li className="step-list__item">
                    <span className="step-list__inner">
                        <span className="step-text">完了</span>
                    </span>
                </li>
            </ol>
            <div className="newarea-container">
                <div className="newarea-content">
                    {/* <img src="" alt="表示できません" /> */}
                </div>
            </div>
            <div className="deco-file">
                <label>地図画像を選択
                    <input type="file" id="img" accept=".png, .jpg, .jpeg"></input>
                </label>
                <Link href="add-newarea-beacon">
                    <div className="okbtn">完了</div>
                </Link>
            </div>
        </form>
    )
}