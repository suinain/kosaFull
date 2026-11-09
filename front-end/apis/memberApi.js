// 모듈 안 정의된 함수, 클래스 등을 다른 컴포넌트에 쓴다.
import api from "./axios";

export function memberJoin(joinForm) {
  return api.post("/database/join-member", joinForm);
}
