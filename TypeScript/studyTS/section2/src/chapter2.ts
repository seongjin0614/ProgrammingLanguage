// 배열
// 1
let numArr: number[] = [1,2,3];

let strArr: string[] = ["hello", "im"];

// 2
let boolArr: Array<boolean> = [true, false, true];
                // 제네릭 문법

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];
                // 유니언 타입

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4,5],
];

// 튜플 -> 자바스크립에는 없고, 타입스크립트에서만 제공
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1,2];

let tup2: [number, string, boolean] = [1,"2",true];

tup1.push(1);
tup1.pop();
// -> 튜플은 컴파일시 배열 그래서 배열메서드를 사용할때는 길이제한 적용 불가

const users: [string, number][] = [
  ["서성진", 1],
  ["서성", 2]
];
