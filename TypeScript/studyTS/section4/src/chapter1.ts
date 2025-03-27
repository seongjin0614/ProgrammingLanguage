// 함수 타입 표현식과 호출 시그니처

// 함수 타입 표현식
type Operation = (a: number, b:number) => number;
const add: Operation = (a, b) => a +b;

const add2 = (a:number, b:number): number => a+b;
// 함수 타입 표현식을 사용하면 중복된 코드를 줄일 수 있다.

const sub: Operation = (a, b) => a - b;
const multuply: Operation = (a, b) => a*b

// 호출 시그니처 (콜 시그니차)
type Operation2 = {
  (a: number, b:number): number;
  name: string
}

const add3: Operation2 = (a,b) => a+b;
