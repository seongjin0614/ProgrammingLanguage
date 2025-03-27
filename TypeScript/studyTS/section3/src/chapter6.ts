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

// let num3 = 10 as string;
// 에러 발생 -> number 와 string은 교집합이 없음
let num3 = 10 as unknown as string;
// -> 다중 단언시 에러를 피할수 있음



// const 단언
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// 모든 프로퍼티를 리드온리로 만들수 있음
// cat.name = "" -> 리드온리라 에러발생



//Non Null 단언
type Post = {
  title: string,
  author?: string,
}

let post: Post = {
  title: "게시글1",
  author: "이정환"
};

const len: number = post.author!.length;
