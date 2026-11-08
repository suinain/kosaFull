// 컴포넌트: 부모의 이미지 state와 변경 함수를 props로 내려 자식에서 표시하고 호출한다.
"use client"

import Image from "next/image";

export default function ChildComponent({
  imgFile,
  changeImg
}) {
  return (
    <section className="mb-4 w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">ChildComponent</h2>
      </header>
      <div className="p-4">
        <Image src={`/images/${imgFile}`} height={500} width={300} style={{width:"200px", height:"auto"}} alt=""/>
        <button
          type="button"
          onClick={changeImg}
          className="group mt-3 inline-flex items-center gap-1.5 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition duration-200 hover:bg-emerald-700 hover:shadow-md motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 motion-safe:active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 motion-reduce:transition-none"
        >
          <span aria-hidden="true" className="text-base leading-none transition-transform duration-200 motion-safe:group-hover:rotate-180 motion-reduce:transition-none">↻</span>
          이미지 변경
        </button>
      </div>
    </section>
  );
}
