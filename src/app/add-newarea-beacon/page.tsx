import Link from "next/link"


export default function Home() {
    return (
        <form action="">
            <ol className="step-list">
                <li className="step-list__item">
                    <span className="step-list__inner">
                        <span className="step-text">画像選択</span>
                    </span>
                </li>
                <li className="step-list__item step-list__item--current">
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
            <div className="beacon-container">
                <div className="beacon-content">beacon1</div>
                <div className="selectbox">
                    <select>
                        <option>id名</option>
                        <option>id名</option>
                        <option>id名</option>
                    </select>
                </div>
            </div>
            <div className="beacon-container">
                <div className="beacon-content">beacon2</div>
                <div className="selectbox">
                    <select>
                        <option>id名</option>
                        <option>id名</option>
                        <option>id名</option>
                    </select>
                </div>
            </div>
            <div className="beacon-container">
                <div className="beacon-content">beacon3</div>
                <div className="selectbox">
                    <select>
                        <option>id名</option>
                        <option>id名</option>
                        <option>id名</option>
                    </select>
                </div>
            </div>
            <div className="beacon-container">
                <div className="beacon-content">beacon4</div>
                <div className="selectbox">
                    <select>
                        <option>id名</option>
                        <option>id名</option>
                        <option>id名</option>
                    </select>
                </div>
            </div>

            <div className="newarea-btn">
                <Link href="">
                    <input type="submit" value="地図画像を選択" className="btn"></input>
                </Link>
            </div>
            
            

            
        </form>
    )
}