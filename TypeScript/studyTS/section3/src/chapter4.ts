// 대수 타입
// -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// -> 합집합 타입과 교집합 타입이 존재합니다

// 1. 합집합 - Union 타입
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr : (number| string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union = Dog | Person
// 타입 별칭을 통해서도 유니언타입 생성 가능

let union1: Union = {
  name: "",
  color:""
}

let union2: Union = {
  name: "",
  language:""
}

let union3: Union = {
  name: "",
  color:"",
  language:""
}

// let union4: Union = {
//   name: "",
// }
// 에러발생 -> 합집합, 교집합 범위에 포함되지 않음



// 교집합 타입 - Intersection 타입
let variable: number & string;

// 객체 타입에서 많이 사용

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color:"",
  language:""
}
