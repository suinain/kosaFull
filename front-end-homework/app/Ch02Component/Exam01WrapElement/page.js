// 페이지: Fragment와 부모 요소로 JSX를 묶고 자식 컴포넌트를 배치한다.
import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";

export default function Exam01WrapElement() {
  return (
    <>
      <section className="mb-4 w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
        <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
          <h2 className="font-semibold">Exam01WrapElement</h2>
        </header>
        <div className="p-4">
        <div>
          <ChildComponentA/>
          <ChildComponentB/>
        </div>
        </div>
      </section>
    </>
  );
}
