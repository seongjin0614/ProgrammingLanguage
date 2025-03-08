// object
let user: {
  id?: number;
  name: string;   // 객체 리터럴 타입
} = {
  id: 1,
  name: "서성진"
};

let dog: {
  name: string;
  color: string;
} = {
  name: "연두",
  color: "white",
};

// 구조적 타입 시스템

user = {
  name: "홍길동",
}
// ? 선택적프로퍼티, 옵셔널프로퍼티 -> 있어도 되고, 없어도 상관 없음


let config: {
  readonly apikey: string;
} = {
  apikey: "My API key",
}

// config.apikey = "hacked"
// 읽기 전용 속성이므로 'apikey'에 할당할 수 없음