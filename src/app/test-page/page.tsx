import Link from "next/link"


export default function Home() {
  return (
    <div>
      <h1>Test-page</h1>
      <h2>ページ遷移完了</h2>
      <Link href="../">戻る</Link>
    </div>
  );
}