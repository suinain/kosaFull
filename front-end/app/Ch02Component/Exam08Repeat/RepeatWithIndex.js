export default function RepeatWithIndex() {
  const fruits = ["사과", "바나나", "포도"];

  return (
    <section className="mb-4 w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">RepeatWithIndex</h2>
      </header>
      <div className="p-4">
        <ul className="max-w-md space-y-2">
          {fruits.map((fruit, index) => (
            <li key={index} className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 transition-colors hover:border-emerald-300 hover:bg-emerald-50 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-emerald-700 dark:hover:bg-emerald-950">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold tabular-nums text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200">
                {index + 1}
              </span>
              <span className="text-sm font-medium">{fruit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
