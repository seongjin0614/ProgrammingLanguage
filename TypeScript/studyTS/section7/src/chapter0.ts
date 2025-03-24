// 제네릭
// 일반적인 포괄적인 함수
// 모든 타입에 두루두루 사용할 수 있는 함수

function func<T>(value: T): T {
  return value;
}


let num = func(10);

if (typeof num === "number") {
  num.toFixed();
}

let bool = func(true);

let str = func("string");

let arr = func<[number, number, number]>([1,2,3]);