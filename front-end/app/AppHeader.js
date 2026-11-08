"use client"

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { redirect } from "next/navigation";

export default function AppHeader() {
  // AuthContext 전역 상태 가져오기
  const authContext = useContext(AuthContext);

  // 로그아웃 버튼 클릭 이벤트 처리
  const handleLogout = () => {
    // 전역 상태 값을 초기화
    authContext.setMemberId("");
    authContext.setJwt("");
    localStorage.removeItem("memberId");
    localStorage.removeItem("jwt");
    // 홈으로 이동
    redirect("/")
  };

  return (
    <div className="flex items-center gap-2 bg-black px-4 py-1 text-white">
      <Image src="/logo512.png" alt="React 로고" width={28} height={28} />
      React
      {!authContext.isInitialized ? (
        <span
          aria-hidden="true"
          className="ml-auto h-7 w-16 shrink-0"
        />
      ) : authContext.memberId ? (
        <button
          type="button"
          onClick={handleLogout}
          className="ml-auto rounded bg-green-600 px-[0.7rem] py-[0.35rem] text-[0.7rem] leading-[1.05rem] text-white hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          로그아웃
        </button>
      ) : (
        <Link
          href="/Ch07GlobalState/Exam02AuthContext/LoginComponent"
          className="ml-auto rounded bg-green-600 px-[0.7rem] py-[0.35rem] text-[0.7rem] leading-[1.05rem] text-white hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          로그인
        </Link>
      )}
    </div>
  );
}
