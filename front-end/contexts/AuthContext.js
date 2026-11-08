"use client"

import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
    //상태 정의
    const [memberId, setMemberId] = useState("");
    const [jwt, setJwt] = useState("");
    const [isInitialized, setIsInitialized] = useState(false);

    // 브라우저에 저장된 인증 정보를 최초 마운트 시 복원한다.
    useEffect(() => {
        /* eslint-disable react-hooks/set-state-in-effect -- 브라우저 저장소의 초기 값을 전역 상태에 복원한다. */
        setMemberId(localStorage.getItem("memberId") ?? "");
        setJwt(localStorage.getItem("jwt") ?? "");
        setIsInitialized(true);
        /* eslint-enable react-hooks/set-state-in-effect */
    }, []);

    // 전역 상태 객체
    const value = {
        memberId, setMemberId,
        jwt, setJwt,
        isInitialized
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
