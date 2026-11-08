// 컴포넌트: 이벤트 객체와 함수 props를 사용해 클릭 이벤트를 처리한다.
export default function ChildComponent({ onClick }) {
  return (
    <section className="mb-4 w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">ChildComponent</h2>
      </header>
      <div className="p-4">
        {/* 사용자 정의 컴포넌트가 받은 함수를 실제 DOM 버튼에 연결한다. */}
        <button type="button" onClick={onClick} className="rounded bg-green-600 px-4 py-2 text-white">버튼4</button>
      </div>
    </section>
  );
}
