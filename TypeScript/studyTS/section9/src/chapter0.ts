// 조건부 타입

// 조건부 타입은 타입을 조건문처럼 사용하여 특정 조건에 따라 다른 타입을 반환하는 기능입니다.

type A = number extends string ? string : number; // number
type B = string extends number ? string : number; // number
type C = string extends string ? string : number; // string
type D = string extends any ? string : number; // string
type E = string extends unknown ? string : number; // string

type ObjA = {
  a: number;
}

type ObjB = {
  a: number;
  b: number;
}

type BB = ObjB extends ObjA ? number : string;

// 조건부 타입은 제네릭과 함께 사용하여 더욱 유용하게 활용할 수 있습니다. 예를 들어, 다음과 같이 제네릭을 사용하여 조건부 타입을 정의할 수 있습니다.
type ConditionalType<T> = T extends string ? string : number;
type ConditionalType2<T> = T extends string ? string : number; 