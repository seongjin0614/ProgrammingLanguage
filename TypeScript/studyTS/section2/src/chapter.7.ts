// void
// -> 공허, 아무것도 없다
// -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}


// never
// -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while(true) {}
}

function func4(): never {
  throw new Error();
}
// 그 어떠한 값도 저장할수 없음