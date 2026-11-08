"use client";

import ChildComponent from "./ChildComponent";

export default function Exam07EventHandling() {

  function handleClick1(event) {
    console.log(event.target.name);
    if(event.target.name === "btn1") {
      // ...
    } else if(event.target.name === "btn2") {
      // ...
    }
  }

  function handleClick3(event, name) {
    console.log(event.target);
    console.log(name + "을 클릭함");
  }

  function handleClick4() {
    console.log("버튼4을 클릭함");
  }

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam07EventHandling</h2>
      </header>
      <div className="flex flex-wrap gap-3 p-4">
        <button name="btn1"
          type="button"
          onClick={handleClick1}
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          버튼1
        </button>

        <button name="btn2"
          type="button"
          onClick={handleClick1}
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          버튼2
        </button>

        <button
          type="button"
          onClick={ (event) => handleClick3(event, "버튼3") }
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          버튼3
        </button>

        <hr/>

        <div onClick={ () => handleClick3("컨테이너") }>
          컨네이너
        </div>

        <hr/>

        <ChildComponent onClick={handleClick4}/>

      </div>
    </section>
  );
}
