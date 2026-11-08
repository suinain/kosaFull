// 페이지: URL 쿼리 매개변수를 전달하고 도착 페이지에서 useSearchParams로 읽는다.
"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Exam02QueryString() {
  const router = useRouter();
  
  // 상태 정의
  const key1 = "value1";
  const key2 = "value2";
  // URLSearchParams가 &, 공백, 한글 등을 안전한 쿼리 문자열로 인코딩한다.
  const query = new URLSearchParams({ key1, key2 }).toString();
  const destination = `/Ch05Routing/Exam02QueryString/ComponentA?${query}`;

  const handleClick = () => {
    router.push(destination);
  };

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam02QueryString</h2>
      </header>
      <div className="flex flex-wrap gap-2 p-4">
        <Link href={destination} className="inline-flex items-center rounded bg-orange-500 px-2 py-1 text-sm text-white hover:bg-orange-600">ComponentA</Link>
        <Link href={destination} className="inline-flex items-center rounded bg-orange-500 px-2 py-1 text-sm text-white hover:bg-orange-600">ComponentA</Link>
        <button onClick={handleClick} type="button" className="inline-flex items-center rounded bg-orange-500 px-2 py-1 text-sm text-white hover:bg-orange-600">
          ComponentA
        </button>
      </div>
    </section>
  );
}
