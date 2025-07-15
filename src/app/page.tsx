"use client"
import Link from "next/link"
import { useState } from "react"
import hash  from "./lib/hash"
import { redirect } from "next/navigation"


export default function Home() {
    const [mail, setMail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const login = () => {
        const hashPassword: string = hash(password)
        console.log(hashPassword)
        fetch("./api/login", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                email: mail,
                password: hashPassword
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.message)
            if(data.login){
                redirect("./main-page")
            }else{
                alert(data.message)
            }
        })
    }
    return (
      <form action={login}>
        <div className="content-login">
            <div className="login-items">
                <h1>LOGIN</h1>
                <input type="email" placeholder="メールアドレス" className="textbox" required
                    onChange={(e) => {setMail(e.target.value)}}
                ></input>
                <input type="password" name="password" placeholder="パスワード" className="textbox" required
                    onChange={(e) => {setPassword(e.target.value)}}
                ></input>
                <div className="submit">
                    <input type="submit" value="ログイン" className="btn"></input>
                </div>
                <div className="link"> 
                    <Link href="">パスワードを忘れた方はこちら</Link><br></br>
                    <Link href="subscribe-page">新規会員登録の方はこちら</Link>
                </div>
            </div>        
        </div>
      </form>
  );
}
