"use client"

import { ColorContext } from "@/contexts/ColorContext";
import { useContext } from "react";

export default function UiComponentA() {
  //ColorContext 전역 상태를 사용하겠다.
  const colorContext = useContext(ColorContext);

  const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

  const handleClick = (color) => {
    colorContext.setColor(color);
  };

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">UiComponentA</h2>
      </header>
      <div className="flex p-4">
        {colors.map((color, index) => (
          <div onClick={() => handleClick(color)} key={index} style={{background: color, width: "24px", height: "24px", cursor: "pointer"}}>
          </div>
        ))}
      </div>
      <hr/>
      <p>color 전역 상태 값: {colorContext.color}</p>
    </section>
  );
}
