import Link from "next/link";
import {useState} from "react"

export default function Header(){
    const [hamburger, setHamburger] = useState("hamburger")
    const [menu, setMenu] = useState("menu")
    const toggleClassName = () => {
        if(hamburger == "hamburger"){
            setHamburger("hamburger active")
        }else{
            setHamburger("hamburger")
        }
        if(menu == "menu"){
            setMenu("menu open")
        }else{
            setMenu("menu")
        }
    }
    return(
        <header>
            <nav className="nav">
                <ul>
                    <li>Cheese for admin</li>
                </ul>
            </nav>
            <nav className={menu}>
                <div className={hamburger} onClick={toggleClassName}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                <li><Link href="setting">設定</Link></li>
                <li><Link href="#">ログアウト</Link></li>
                </ul>
            </nav>
        </header>
    )
}
