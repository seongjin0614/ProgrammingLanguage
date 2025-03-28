// 선언 합침

interface Person {
  name: string;

}

interface Person {
  age: number;
}
// type은 동일한 이름 정의시 에러 발생
// interface는 에러 발생하지 않음
// 결국 합쳐지기 때문에 -->> 선언 합침이라고 함

const person : Person = {
  name: "",
  age: 27,
}

// 동일한 프로퍼티 정의(타입을 다르게) 중복 발생으로 불가
// 라이브러리의 타입이 부족할때 사용

// 모듈 보강
interface Lib {
  a: number;
  b: number;
}
interface Lib {
  c: "hello"
}


const lib: Lib = {
  a:1,
  b:2,
  c: "hello"
}
