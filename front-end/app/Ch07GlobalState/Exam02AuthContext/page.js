"use client"

import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useContext } from "react";

export default function Exam02AuthContext() {
  const authContext = useContext(AuthContext);

  const handleLogout = () => {
    authContext.setMemberId("");
    authContext.setJwt("");
    localStorage.removeItem("memberId");
    localStorage.removeItem("jwt");
    redirect("/Ch07GlobalState/Exam02AuthContext/LoginComponent");
  };

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam02AuthContext</h2>
      </header>
      { authContext.memberId ? (
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="inline-flex items-center rounded bg-orange-500 px-2 py-1 text-sm text-white hover:bg-orange-600"
          >
            로그아웃
          </button>
        </div>
      ):(
        <div className="p-4">
          <Link
            href="/Ch07GlobalState/Exam02AuthContext/LoginComponent"
            className="inline-flex items-center rounded bg-orange-500 px-2 py-1 text-sm text-white hover:bg-orange-600"
          >
            로그인
          </Link>
        </div> 
      )}     
    </section>
  );
}
