"use client"

import { useRef } from "react";

export default function Exam09DomRef() {

  const inputRef = useRef();

  const handleKeyDown = () => {
    inputRef.current.style.backgroundColor = "orange";
    const inputRef2 = document.querySelector("input[name='message']");
    console.log(inputRef2);
  };

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam09DomRef</h2>
      </header>
      <div className="space-y-3 p-4">
        <label className="block max-w-sm text-sm font-medium">
          텍스트 입력
          <input
            ref={inputRef}
            onKeyDown={handleKeyDown}
            type="text"
            name="message"
            placeholder="텍스트를 입력하세요"
            className="mt-2 block w-full rounded border border-zinc-300 px-3 py-2 focus:border-green-600 focus:outline-2 focus:outline-green-600 dark:border-zinc-600 dark:bg-zinc-800"
          />
        </label>
        <button
          type="button"
          onClick={handleClick}
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          확인
        </button>
      </div>
    </section>
  );
}
