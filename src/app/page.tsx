import Link from "next/link"

export default function Home() {
  return (
      <form action="main-page">
        <div className="content-login">
            <div className="login-items">
                <h1>LOGIN</h1>
                <input type="email" placeholder="メールアドレス" className="textbox" required></input>
                <input type="password" placeholder="パスワード" className="textbox" required></input>
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
