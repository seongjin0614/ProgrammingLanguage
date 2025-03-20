// 타입 단언

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  bread: "진도",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 함
let num1 = 10 as never;
let num2 = 10 as unknown;


// const 단언
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// 모든 프로퍼티를 리드온리로 만들수 있음


//Non Null 단언
