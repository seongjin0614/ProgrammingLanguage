// object
let user: {
  id?: number;
  name: string;   // 객체 리터럴 타입
} = {
  id: 1,
  name: "서성진"
};

user.id; // 객체 리터럴 타입으로 점 표기법으로 접근 가능


let dog: {
  name: string;
  color: string;
} = {
  name: "연두",
  color: "white",
};

// 구조적 타입 시스템
// 구조를 기준으로 타입 정의
// 프로퍼티 베이스드 타입 시스템


user = {
  name: "홍길동",
}
// id? 선택적프로퍼티, 옵셔널프로퍼티 -> 있어도 되고, 없어도 상관 없음


let config: {
  readonly apiKey: string;
} = {
  apiKey: "My API key",
}
// config.apiKey = "hacked"
// readonly를 통해 읽기 전용으로 만들수 있음(변경 불가)
// 읽기 전용 속성이므로 'apiKey'에 할당할 수 없음
