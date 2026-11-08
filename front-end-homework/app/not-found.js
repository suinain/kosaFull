// 일치하는 페이지가 없는 URL에 404 안내 화면을 표시한다.
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">NotFound</h2>
      </header>
      <div className="space-y-4 p-4">
        <h1 className="text-xl font-semibold">잘못된 URL을 입력하셨습니다.</h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          요청하신 페이지를 찾을 수 없습니다. 입력한 주소를 확인해 주세요.
        </p>
        <Link
          href="/"
          className="inline-block rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </section>
  );
}
