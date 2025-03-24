// 제네릭 인터페이스와 제네릭 타입 별칭

// 제네릭 인터페이스

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair : KeyPair<string, number> = {
  key: "key",
  value: 0
}
// -> 변수에 할당할 타입을 <> 안에 정의

let keyPair2 : KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"]
}



// 인덱스 시그니처
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123,
}








// 제네릭 타입 별칭
