// void
// -> 공허, 아무것도 없다
// -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
// a = 1;
// a = "hello";
// a = {};
// a = undefined
// -> void 타입은 undefined만 할당 가능



// never
// -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while(true) {}
}

function func4(): never {
  throw new Error();
}

let c: never;
// c = "1"
// c = 1
// c = null
// c = true
// c = undefined
// -> 그 어떠한 값도 저장할수 없음
