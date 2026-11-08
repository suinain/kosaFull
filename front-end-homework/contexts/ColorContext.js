// 색상 state와 setter를 value prop으로 제공하며 children을 그대로 렌더링한다.
"use client"

import { createContext, useState } from "react";

// Context 객체 생성
export const ColorContext = createContext();

// 컴포넌트 정의
export default function ColorContextProvider({ children }) {
    // 상태 정의
    const [color, setColor] = useState("black");

    // 전역 상태 객체
    const value = {
        color,
        setColor
    };

    return (
        // children에 포함되는 모든 컴포넌트는 value 객체를 사용할 수 있다.
        <ColorContext.Provider value={value}>
            {children}
        </ColorContext.Provider>
    );
}