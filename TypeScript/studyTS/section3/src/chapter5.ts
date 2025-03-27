// 타입 추론
// 육안으로 코드를 추론할 수 있다면 타입스크립트도 가능
// 변수의 초기값을 가지고 타입을 추론
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정한",
  profile: {
    nickname: "winter",
  },
  urls: ["https://winterlood.com"]
};

let {id, name, profile} = c;

let [one, two, three] = [1, "hello", 3]

// 함수의 경우 return 값을 가지고 타입을 추론
function func() {
  return "hello";
}



// 암묵적 any
let d;
d = 10;
d.toFixed();

d = 'hello';
d.toUpperCase();  // -> 타입 변화



const num = 10;
// 리터럴 타입으로 추론 const = 상수 이기 때문에! 변하지 않음


let arr = [1, "string"];
// 최적의 공통타입으로 추론

