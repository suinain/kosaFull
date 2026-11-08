// 페이지: 부모가 전달한 name, version과 children을 사용하며 version 기본값은 18이다.
import ChildComponent from "./ChildComponent";
import Image from "next/image";

export default function Exam01Props() {
  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam01Props</h2>
      </header>
      <div className="p-4">
        <ChildComponent name="React" version={19}>
          <Image src={'/images/photo1.jpg'} 
            alt="사진 1" 
            className="h-auto max-w-full" 
            width={705}
            height={444}
            style={{width: "200px", height: "auto"}}/>
        </ChildComponent>

        <ChildComponent name="React">
          <Image src={'/images/photo1.jpg'} 
            alt="사진 1" 
            className="h-auto max-w-full" 
            width={705}
            height={444}
            style={{width: "200px", height: "auto"}}/>
        </ChildComponent>        
      </div>
    </section>
  );
}

