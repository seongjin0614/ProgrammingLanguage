// enum 타입
// 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 자바스크립트에는 없음


// enum 타입이 필요한 이유
enum Role {
  ADMIN=0,
  USER=1,
  GUEST=2,
}

enum Language {
  korean ="ko",
  english = "en"
}
// enum타입은 숫자를 할당하지 않아도 순서대로 할당
// 숫자형 enum, 문자형 enum

const user1 = {
  name: "서성진",
  // role: 0 // 0  -> 관리자
  role: Role.ADMIN,
  language: Language.korean
}

const user2 = {
  name: "나는유저",
  role: Role.USER // 1  -> 일반 유저
}

const user3 = {
  name: "나는게스트",
  role: Role.GUEST,
}

console.log(user1, user2, user3);
