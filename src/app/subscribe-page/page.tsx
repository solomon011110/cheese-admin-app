"use client"

import Link from "next/link"
import { useState } from "react"


export default function Home() {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [password, setPassword] = useState("")
  const [c_pass, setC_pass] = useState("")

  const subscribe = () => {
    // バリデーションチェック
    // ユーザ名
      // 1文字目が数字ではいけない
      // 使用可能な記号を[- , _]に限定する
      // 5文字以上
    // メールアドレス
      // 利用可能なメールアドレスかどうか
    // 電話番号
      // すべて数字であること
    // 生年月日
      // 今日を超えてないかどうか
      // 年/月/日のフォーマットがあるかどうか
    // 性別
      // 選択肢のため不要
    // パスワード
      // 8文字以上
      // 1文字以上大文字を使用する
      // 1文字以上数字を使用する
      // 1文字以上記号を使用する
      // 英数字記号以外使用不可
      console.log(userName, email, tel, birthDate, password, c_pass)
  }
  return (
    <form action="success.html">
        <div className="content">
            <div className="form-items">
                <h1>会員登録</h1>
                <p>ユーザー名<span className="required"></span></p>
                <input type="text" placeholder="ユーザー名を入力してください" className="textbox" required onChange={
                  (e) => {setUserName(e.target.value)}
                }></input>

                <p>メールアドレス<span className="required"></span></p>
                <input type="email" placeholder="メールアドレスを入力してください" className="textbox" required onChange={
                  (e) => {setEmail(e.target.value)}
                }></input>

                <p>電話番号<span className="required"></span></p>
                <input type="tel" placeholder="電話番号を入力してください" className="textbox" required onChange={
                  (e) => {setTel(e.target.value)}
                }></input>

                <p>生年月日</p>
                <input type="birthDate" placeholder="生年月日を入力してください" className="textbox" onChange={
                  (e) => {setBirthDate(e.target.value)}
                }></input>

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
                <input type="password" placeholder="パスワードを入力してください" className="textbox" required onChange={
                  (e) => {setPassword(e.target.value)}
                }></input>

                <p>パスワード(確認用)<span className="required"></span></p>
                <input type="password" placeholder="パスワードを入力してください" className="textbox" required onChange={
                  (e) => {setC_pass(e.target.value)}
                }></input>

                <div className="submit">
                    <input type="submit" value="会員登録" className="btn" onClick={subscribe}></input>
                </div>
                <div className="link">
                    <Link href="//">既に会員登録済みの方はこちら</Link>
                </div>
            </div>
        </div>
    </form>
  );
}