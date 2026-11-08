// 페이지: 부모의 이미지 state와 변경 함수를 props로 내려 자식에서 표시하고 호출한다.
"use client"

import { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function Exam05StateToProp() {
  // 상태 정의
  const [imgFile, setImgFile] = useState("photo1.jpg");

  // 함수 정의
  const changeImg = () => {
    if(imgFile === "photo1.jpg") {
      setImgFile("photo2.jpg");
    } else {
      setImgFile("photo1.jpg");
    }
  };

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam05StateToProp</h2>
      </header>
      <div className="p-4">

        <ChildComponent imgFile={imgFile} changeImg={changeImg}/>

      </div>
    </section>
  );
}
