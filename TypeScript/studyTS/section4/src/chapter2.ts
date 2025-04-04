// 함수 타입의 호환성
// -> 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
//  1. 변환값의 타입이 호환되는가
//  2. 매개변수의 타입이 호환되는가

// 기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a;


// 기준 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;
d = c;

type Animal = {
  name: string;
}

type Dog = {
  name: string;
  color: string;
}




// 2-2. 매개변수의 개수가 다를 때
