import Link from "next/link"


export default function Home() {
  return (
    <form action="success.html">
        <div className="content">
            <div className="form-items">
                <h1>会員登録</h1>
                <p>ユーザー名<span className="required"></span></p>
                <input type="text" placeholder="ユーザー名を入力してください" className="textbox" required></input>

                <p>メールアドレス<span className="required"></span></p>
                <input type="email" placeholder="メールアドレスを入力してください" className="textbox" required></input>

                <p>電話番号<span className="required"></span></p>
                <input type="tel" placeholder="電話番号を入力してください" className="textbox" required></input>

                <p>年齢</p>
                <input type="number" placeholder="年齢を入力してください" className="textbox"></input>

                <p>性別</p>
                <fieldset>
                    <div className="radiobtn">
                      <input type="radio" id="man" name="gender"></input>
                      <label htmlFor="man">男性</label><br></br>
                      <input type="radio" id="woman" name="gender"></input>
                      <label htmlFor="woman">女性</label><br></br>
                      <input type="radio" id="else" name="gender"></input>
                      <label htmlFor="else">回答しない</label>
                    </div>
                </fieldset>

                <p>パスワード<span className="required"></span></p>
                <input type="password" placeholder="パスワードを入力してください" className="textbox" required></input>

                <p>パスワード(確認用)<span className="required"></span></p>
                <input type="password" placeholder="パスワードを入力してください" className="textbox" required></input>

                <div className="submit">
                    <input type="submit" value="会員登録" className="btn"></input>
                </div>
                <div className="link">
                    <Link href="/">既に会員登録済みの方はこちら</Link>
                </div>
            </div>
        </div>
    </form>
  );
}