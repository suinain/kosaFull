import Image from "next/image";

function fun() {
  return "fun()의 반환값";
}

export default function Exam02Expressions() {

  const name = "리액트";
  const imageFile = "photo1.jpg";
  const imageHeight = 130;

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam01WrapElement</h2>
      </header>
      <div className="p-4">
      <div>
        <p>표현식</p>
        <p>{name}</p>
        <p>{fun()}</p>
        <p>
          {
            <Image src={"/images/"+imageFile} width="300" height="130" alt="이미지" loading="eager"/>
          }
          <Image src={`/images/${imageFile}`} width={200} height={imageHeight} alt="이미지"/>
        </p>
      </div>
      </div>
    </section>
  );
}