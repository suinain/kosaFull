// 페이지: 객체 state를 새 객체로 교체하면서 다른 속성은 유지한다.
"use client"

import { useState } from "react";

export default function Exam03ObjectTypeState() {
  // 상태 정의
  const [state, setState] = useState({
    number: 0,
    color: "black"
  });

  // 이벤트 처리 함수
  const addNumber = () => {
    // 객체를 직접 수정하지 않고 이전 상태를 복사해 number만 3 증가시킨다.
    setState((prev) => ({ ...prev, number: prev.number + 3 }));
  };

  const changeColor = () => {
    const newColor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, "0");
    setState((prev) => ({ ...prev, color: newColor }));
  };

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam03ObjectTypeState</h2>
      </header>
      <div className="space-y-3 p-4">
        <h1 style={{ color: state.color, fontSize: "3em" }}>{state.number}</h1>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={addNumber}
            className="group inline-flex items-center gap-1 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition duration-200 ease-out hover:bg-emerald-700 hover:shadow-md motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-105 motion-safe:active:translate-y-0 motion-safe:active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 motion-reduce:transition-none"
          >
            <span aria-hidden="true" className="text-sm leading-none transition-transform duration-200 motion-safe:group-hover:rotate-90 motion-reduce:transition-none">+</span>
            숫자 증가
          </button>

          <button
            type="button"
            onClick={changeColor}
            className="group inline-flex items-center gap-1 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition duration-200 ease-out hover:bg-emerald-700 hover:shadow-md motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-105 motion-safe:active:translate-y-0 motion-safe:active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 motion-reduce:transition-none"
          >
            <span aria-hidden="true" className="text-sm leading-none transition-transform duration-200 motion-safe:group-hover:rotate-12 motion-reduce:transition-none">🎨</span>
            색깔 변경
          </button>
        </div>
      </div>
    </section>
  );
}
