// 하위 페이지 렌더링 중 발생한 오류를 처리하고 홈으로 돌아가는 링크를 제공한다.
"use client";

import Link from "next/link";

export default function Error() {
  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Error</h2>
      </header>
      <div className="space-y-4 p-4" role="alert">
        <h1 className="text-xl font-semibold">페이지를 표시하는 중 오류가 발생했습니다.</h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          잠시 후 다시 시도하거나 홈으로 이동해 주세요.
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
