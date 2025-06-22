import "./page.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Top-page</h1>
      <h2>Next.jsで作成中</h2>
      <Link href="test-page">ページ遷移</Link>
    </div>
  );
}
