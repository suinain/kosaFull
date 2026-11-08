// 페이지: 숫자와 색상 state를 갱신하면 변경된 값이 화면에 반영된다.
"use client";

import { useState } from "react";

export default function Exam02PrimitiveTypeState() {
  console.log("상태가 렌더링 또는 리렌더링됨");

  // 상태 정의
  const [number, setNumber] = useState(0); 
  const [color, setColor] = useState("red");

  // 이벤트 처리 함수
  const addNumber = () => {
    // 상태 변경 함수를 통해서 상태 변경
    setNumber(number + 1);
  };

  const changeColor = () => {
    const newColor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, "0");
    setColor(newColor);
  };

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam02PrimitiveTypeState</h2>
      </header>
      <div className="space-y-3 p-4">
        <h1 style={{color: color, fontSize: "3em"}}>{number}</h1>
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
