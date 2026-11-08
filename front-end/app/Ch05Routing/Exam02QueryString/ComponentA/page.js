"use client"

import { useSearchParams } from "next/navigation";

export default function ComponentA() {
  const queryString = useSearchParams();

  const key1 = queryString.get("key1");
  const key2 = queryString.get("key2");

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">ComponentA</h2>
      </header>
      <div className="p-4">
        <p>key1: {key1}</p>
        <p>key2: {key2}</p>
      </div>
    </section>
  );
}