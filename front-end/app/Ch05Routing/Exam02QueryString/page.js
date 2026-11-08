"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Exam02QueryString() {
  const router = useRouter();
  
  // 상태 정의
  const [key1, setKey1] = useState("value1");
  const [key2, setKey2] = useState("value2");

  const handleClick = () => {
    router.push(`Exam02QueryString/ComponentA?key1=${key1}&key2=${key2}`);
  };

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam02QueryString</h2>
      </header>
      <div className="flex flex-wrap gap-2 p-4">
        <Link href={`/Ch05Routing/Exam02QueryString/ComponentA?key1=${key1}&key2=${key2}`} className="inline-flex items-center rounded bg-orange-500 px-2 py-1 text-sm text-white hover:bg-orange-600">ComponentA</Link>
        <Link href={`Exam02QueryString/ComponentA?key1=${key1}&key2=${key2}`} className="inline-flex items-center rounded bg-orange-500 px-2 py-1 text-sm text-white hover:bg-orange-600">ComponentA</Link>
        <button onClick={handleClick} type="button" className="inline-flex items-center rounded bg-orange-500 px-2 py-1 text-sm text-white hover:bg-orange-600">
          ComponentA
        </button>
      </div>
    </section>
  );
}
