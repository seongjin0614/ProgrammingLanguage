// unknown 타입
// 전체 집합이라고 볼수 있음

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar; 불가능, 다운캐스팅 불가
  // let num: string = unknownVar;
}


// never 타입
// 공집합으로 이해할수 있음
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
}


// void 타입
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }
}


// any 타입
// 모든 타입의 슈퍼타입으로 위치하기도 하며, 모든 타입의 서브타입으로 위치하기도 한다(never 제외)
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  anyVar = unknownVar;

  undefinedVar = anyVar;

  // neverVar = 
}
