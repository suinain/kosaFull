// 페이지: 삼항 연산자와 논리 연산자로 조건에 따라 JSX를 표시한다.
export default function Exam03Condition() {
  // 변수 선언
  const var1 = "리액트";

  // 반환 값
  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam03Condition</h2>
      </header>
      <div className="p-4">
      <div>
        {/* 삼항 연산자로 if문 대용 */}
        <div>{(var1 !== "리액트")? <p>true</p> : <p>false</p>}</div>  
        
        {/* &&와 || 연산자로 if문 대용 */}
        <div>{(var1 === "리액트") && <p>true(&&)</p>}</div>  {/* <p>true</p> */}
        <div>{(var1 !== "리액트") && <p>false(&&)</p>}</div> {/* 값없음 */}
        <div>{(var1 === "리액트") || <p>true(||)</p>}</div>  {/* 값없음 */}
        <div>{(var1 !== "리액트") || <p>false(||)</p>}</div> {/* <p>false</p> */}
      </div>
      </div>
    </section>
  );
}