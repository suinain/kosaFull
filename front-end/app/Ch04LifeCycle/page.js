"use client"

import { useEffect, useState } from "react";

export default function Ch04LifeCycle() {
  // 상태 정의
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(101);
  
  useEffect(() => {
    console.log("마우트 상태");
    return () => {
      console.log("언마우트 상태");
    }
  }, []);

  useEffect(() => {
    console.log("마우트 상태/count1 때문에 업데이트 후 실행");
    return () => {
      console.log("언마우트 상태/count1 때문에 업데이트 전 실행");
    }
  }, [count1]); 

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Ch04LifeCycle</h2>
      </header>
      <div className="flex flex-wrap gap-2 p-4">
        <button
          type="button"
          onClick={() => setCount1((prevCount) => prevCount + 1)}
          className="rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
        >
          count: {count1}
        </button>
        <button
          type="button"
          onClick={() => setCount2((prevCount) => prevCount + 1)}
          className="rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
        >
          count: {count2}
        </button>
      </div>
    </section>
  );
}
