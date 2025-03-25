// any -> 모든, 누구나
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;
// 런타임에 에러 발생 가능성
// 가급적 사용하지 않는것이 옳음



// unknown
let unknownVar:  unknown;
unknownVar ="";
unknownVar = 1;
unknownVar = () => {};

// 다른 변수에 할당 불가
// 정제해서 사용해야함 -> 타입 정제 typeof
// 타입 좁히기
if (typeof unknownVar === "number") {
  num = unknownVar;
}

