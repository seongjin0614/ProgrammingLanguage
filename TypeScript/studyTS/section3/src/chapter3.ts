// 기본 타입간의 호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;


// 객체 타입간의 호환성
// -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
}

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;
// dog = animal; // 'breed' 속성이 'animal' 형식에 없지만 'Dog' 형식에서 필수입니다.
// 프로퍼티를 가지고 슈퍼, 서브타입을 판단


type Book = {
  name: string,
  price: number,
};

type ProgrammingBook = {
  name: string,
  price: number,
  skill: string,
};

let book : Book;
let programmingBook: ProgrammingBook = {
  name: "한입",
  price: 33000,
  skill: "react"
}
