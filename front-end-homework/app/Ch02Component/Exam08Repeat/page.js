// 페이지: map으로 배열을 JSX 목록으로 변환하고 key로 각 항목을 구분한다.
import RepeatTableRow from "./RepeatTableRow";
import RepeatWithIndex from "./RepeatWithIndex";

export default function Exam08Repeat() {
  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam08Repeat</h2>
      </header>
      <div className="p-4">
        <RepeatTableRow/>
        <RepeatWithIndex/>
      </div>
    </section>
  );
}
