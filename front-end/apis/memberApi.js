// 모듈 안 정의된 함수, 클래스 등을 다른 컴포넌트에 쓴다.
import api from "./axios";

export function memberJoin(joinForm) {
  //body에  raw형식으로 json 형태로 들어감
  return api.post("/database/join-member", joinForm);
}


export function memberLogin(loginForm) {
  //body에  raw형식으로 json 형태로 들어감
  return api.post("/database/login-member", loginForm);

}
