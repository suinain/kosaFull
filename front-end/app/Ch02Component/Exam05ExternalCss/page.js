import ChildComponent from "./ChildComponent";
import styles from "./Exam05ExternalCss.module.css";

export default function Exam05ExternalCss() {
  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam05ExternalCss</h2>
      </header>
      <div className="p-4">
        <div className={styles.message}>외부 CSS 스타일 적용</div>
        <ChildComponent/>
      </div>
    </section>
  );
}
