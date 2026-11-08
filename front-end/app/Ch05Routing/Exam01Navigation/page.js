"use client"

import { redirect, useRouter } from "next/navigation";

export default function Exam01Navigation() {
  // Router 얻기
  const router = useRouter();

  const handleClick = () => {
    // 코드상에 어떤 조건이 될 경우, 자동 이동
    // 로그인 처리 후 자동 이동
    // 회원가입 처리 후 자동 이동
    // redirect("/");

    // 특정 경로로 이동을 할 경우(일반적인 경우)
    router.push("/Ch02Component");
  };

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam01Navigation</h2>
      </header>
      <div className="p-4">
        <button
          onClick={handleClick}
          type="button"
          className="rounded bg-orange-500 px-2 py-1 text-sm text-white hover:bg-orange-600"
        >
          버튼
        </button>
      </div>
    </section>
  );
}
