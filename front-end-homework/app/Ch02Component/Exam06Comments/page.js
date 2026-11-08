// 페이지: JavaScript와 JSX 영역에서 사용하는 주석 문법을 비교한다.
export default function Exam06Comments() {
  // JavaScript 영역의 한 줄 주석
  /* JavaScript 영역의 여러 줄 주석 */

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam06Comments</h2>
      </header>
      <div 
        //React에서는 class가 아니고 className으로 CSS 클래스를 지정
        className="p-4">
        {/* JSX 영역의 주석은 화면에 표시되지 않습니다. */}
        <p>JSX에서 주석 작성하기</p>
        <pre className="mt-2 overflow-x-auto rounded bg-zinc-100 p-3 dark:bg-zinc-800">
          <code>{"{/* 주석 내용 */}"}</code>
        </pre>
      </div>
    </section>
  );
}
