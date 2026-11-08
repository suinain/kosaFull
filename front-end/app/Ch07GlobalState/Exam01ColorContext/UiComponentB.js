"use client"

import { ColorContext } from "@/contexts/ColorContext";
import { useContext } from "react";

export default function UiComponentB() {

  //ColorContext 전역 상태를 사용하겠다.
  const colorContext = useContext(ColorContext);

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">UiComponentB</h2>
      </header>
      <div className="p-4">
        <div role="alert" className="rounded border border-yellow-300 p-4 text-yellow-900" style={{ backgroundColor: colorContext.color }}>
          경고: 내용을 확인해 주세요.
        </div>
      </div>
    </section>
  );
}
