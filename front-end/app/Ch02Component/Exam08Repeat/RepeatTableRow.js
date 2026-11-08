"use client"

export default function RepeatTableRow() {
  const boards = [
    {bno:1, btitle:"제목1", bwriter:"user1", bdate:"2026.11.03", bhitcount:0},
    {bno:2, btitle:"제목2", bwriter:"user2", bdate:"2026.11.03", bhitcount:0},
    {bno:3, btitle:"제목3", bwriter:"user3", bdate:"2026.11.03", bhitcount:0}
  ];

  return (
    <section className="mb-4 w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">RepeatTableRow</h2>
      </header>
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold">게시글 목록</h3>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">총 {boards.length}건</span>
        </div>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-700">
        <table className="w-full min-w-[540px] border-collapse text-left text-sm">
          <caption className="sr-only">게시글 번호, 제목, 작성자, 작성일 및 조회수 목록</caption>
          <thead className="bg-zinc-100 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            <tr>
              <th scope="col" className="w-20 px-4 py-3 text-center font-semibold">번호</th>
              <th scope="col" className="px-4 py-3 font-semibold">제목</th>
              <th scope="col" className="w-28 px-4 py-3 font-semibold">작성자</th>
              <th scope="col" className="w-32 px-4 py-3 font-semibold">작성일</th>
              <th scope="col" className="w-20 px-4 py-3 text-right font-semibold">조회수</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
            {boards.map((board)=>
                <tr key={board.bno} className="even:bg-zinc-50 hover:bg-emerald-50 dark:even:bg-zinc-800/40 dark:hover:bg-emerald-950/40">
                  <td className="px-4 py-3 text-center tabular-nums text-zinc-500 dark:text-zinc-400">{board.bno}</td>
                  <td className="px-4 py-3 font-medium">{board.btitle}</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">{board.bwriter}</td>
                  <td className="whitespace-nowrap px-4 py-3 tabular-nums text-zinc-500 dark:text-zinc-400">{board.bdate}</td>
                  <td className="px-4 py-3 text-right tabular-nums text-zinc-500 dark:text-zinc-400">{board.bhitcount}</td>
                </tr>
            )}
          </tbody>
        </table>
        </div>
      </div>
    </section>
  );
}
