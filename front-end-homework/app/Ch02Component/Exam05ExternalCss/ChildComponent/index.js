// 컴포넌트: CSS Module을 가져와 컴포넌트별로 격리된 스타일을 적용한다.
import styles from "./ChildComponent.module.css";

export default function ChildComponent() {
  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">ChildComponent</h2>
      </header>
      <div className="p-4">
        <div className={styles.message}>외부 CSS 스타일 적용</div>
      </div>
    </section>
  );
}
