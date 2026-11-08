// 페이지: 의도적인 렌더링 오류와 상위 error.js의 오류 화면을 실습한다.
export default function Exam11RuntimeErrorHandling() {

  // undefined의 length를 읽으면 오류가 발생한다. 아래 JSX 주석을 해제해 오류 화면을 실습한다.
  const name = undefined;

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam11RuntimeErrorHandling</h2>
      </header>
      <div className="p-4">
        런타임 오류 처리 예제
        {/* {name.length} */}
      </div>
    </section>
  );
}
