"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [c_pass, setC_pass] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const newErrors: { [key: string]: string } = {};

    if (!userName) {
      newErrors.userName = "ユーザー名を入力してください。";
    } else if (!/^[^\d][\w-]{4,}$/.test(userName)) {
      newErrors.userName = "ユーザー名は5文字以上で、先頭に数字を使わず、記号は - と _ のみ使用してください。";
    }

    if (!email) {
      newErrors.email = "メールアドレスを入力してください。";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "有効なメールアドレスを入力してください。";
    }

    if (!tel) {
      newErrors.tel = "電話番号を入力してください。";
    } else if (!/^(070|080|090)\d{8}$/.test(tel)) {
      newErrors.tel = "携帯電話番号（例: 090xxxxxxxx）を入力してください。";
    }

    if (!birthDate) {
      newErrors.birthDate = "生年月日を入力してください。";
    } else {
      const today = new Date();
      const birth = new Date(birthDate);
      if (isNaN(birth.getTime()) || birth > today) {
        newErrors.birthDate = "未来の日付は使用できません。";
      }
    }

    if (!password) {
      newErrors.password = "パスワードを入力してください。";
    } else {
      const pwErrors = [];
      if (password.length < 8) pwErrors.push("8文字以上");
      if (!/[A-Z]/.test(password)) pwErrors.push("大文字を含む");
      if (!/[0-9]/.test(password)) pwErrors.push("数字を含む");
      if (!/[!@#$%^&*(),.?":{}|<>_\-]/.test(password)) pwErrors.push("記号を含む");
      if (/[^A-Za-z0-9!@#$%^&*(),.?":{}|<>_\-]/.test(password)) pwErrors.push("不正な文字を含まない");

      if (pwErrors.length > 0) {
        newErrors.password = `パスワードは ${pwErrors.join("・")} ことが必須です。`;
      }
    }

    if (!c_pass) {
      newErrors.c_pass = "確認用パスワードを入力してください。";
    } else if (password !== c_pass) {
      newErrors.c_pass = "パスワードが一致しません。";
    }

    setErrors(newErrors);
  }, [userName, email, tel, birthDate, password, c_pass]);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();

    const missingFields: string[] = [];
    if (!userName) missingFields.push("ユーザー名");
    if (!email) missingFields.push("メールアドレス");
    if (!tel) missingFields.push("電話番号");
    if (!birthDate) missingFields.push("生年月日");
    if (!password) missingFields.push("パスワード");
    if (!c_pass) missingFields.push("確認用パスワード");

    if (missingFields.length > 0) {
      alert(`以下の項目が未入力です：\n${missingFields.join("\n")}`);
      setSuccessMessage("");
      return;
    }

    if (Object.keys(errors).length === 0) {
      setSuccessMessage("登録が完了しました！");
      console.log("登録成功:", { userName, email, tel, birthDate, gender, password });
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <form onSubmit={subscribe}>
      <div className="content">
        <div className="form-items">
          <h1>会員登録</h1>

          <p>ユーザー名<span className="required"></span></p>
          <input
            type="text"
            placeholder="ユーザー名を入力してください"
            className="textbox"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {errors.userName && <p style={{ color: "red" }}>{errors.userName}</p>}

          <p>メールアドレス<span className="required"></span></p>
          <input
            type="email"
            placeholder="メールアドレスを入力してください"
            className="textbox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

          <p>電話番号<span className="required"></span></p>
          <input
            type="tel"
            placeholder="090xxxxxxxx"
            className="textbox"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          {errors.tel && <p style={{ color: "red" }}>{errors.tel}</p>}

          <p>生年月日</p>
          <input
            type="date"
            className="textbox"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          {errors.birthDate && <p style={{ color: "red" }}>{errors.birthDate}</p>}

          <p>性別</p>
          <fieldset>
            <div className="radiobtn">
              <input
                type="radio"
                id="man"
                name="gender"
                value="男性"
                checked={gender === "男性"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="man">男性</label><br />
              <input
                type="radio"
                id="woman"
                name="gender"
                value="女性"
                checked={gender === "女性"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="woman">女性</label><br />
              <input
                type="radio"
                id="else"
                name="gender"
                value="回答しない"
                checked={gender === "回答しない"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="else">回答しない</label>
            </div>
          </fieldset>

          <p>パスワード<span className="required"></span></p>
          <input
            type="password"
            placeholder="パスワードを入力してください"
            className="textbox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

          <p>パスワード(確認用)<span className="required"></span></p>
          <input
            type="password"
            placeholder="パスワードを入力してください"
            className="textbox"
            value={c_pass}
            onChange={(e) => setC_pass(e.target.value)}
          />
          {errors.c_pass && <p style={{ color: "red" }}>{errors.c_pass}</p>}

          <div className="submit">
            <input type="submit" value="会員登録" className="btn" />
          </div>

          {successMessage && (
            <div style={{
              marginTop: "1.5em",
              marginBottom: "1.5em",
              textAlign: "center",
              color: "green",
              fontWeight: "bold",
            }}>
              {successMessage}
            </div>
          )}

          <div className="link">
            <Link href="//">既に会員登録済みの方はこちら</Link>
          </div>
        </div>
      </div>
    </form>
  );
}