export default function Exam02Expressions() {
  // 변수 선언
  const myStyle = {
    backgroundColor: "yellow", 
    color: "red", 
    fontSize: "24px"
  };

  // 반환 값
  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam04InlineStyle</h2>
      </header>
      <div className="p-4">
        <div style={{backgroundColor: "yellow", color: "red", fontSize: "24px"}}>
          인라인 스타일 적용
        </div>
        <div style={myStyle}></div>
      </div>
    </section>
  );
}