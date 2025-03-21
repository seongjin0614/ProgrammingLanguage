// 함수 타입 정의
// 함수를 설명하는 가장 좋은 방법
// -> 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// -> 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number,b: number) {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number) => a + b;


// 함수의 매개변수
function introduce(name='이정환', tall?:number) {
  console.log(`name: ${name}`);
  console.log(`tall: ${tall}`)
}
// -> 다른 타입의 매개변수 불가
// -> ? 활용하여 선택적 매개변수, 선택적 매개변수는 가장 뒤에 위치


// Rest 파라미터
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it)=> (sum += it));

  return sum;
}

getSum(1,2,3)
getSum(1,2,3,4,5)
