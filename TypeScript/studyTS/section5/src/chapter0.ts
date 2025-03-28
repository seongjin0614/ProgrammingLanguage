// 인터페이스
// 객체 타입의 구조 정의에 특화된 문법
// 상속, 합친 등의 특수한 기능을 제공

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a:number, b: number): void;
}

const person: Person = {
  name: "이정환",
  age: 12,
  sayHi: function () {
    console.log("hi")
  }
};


person.sayHi();
person.sayHi(1,2);
