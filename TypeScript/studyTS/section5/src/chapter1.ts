// 인터페이스 확장

interface Animal {
  name: string;
  color: string;
}


interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal{
  isFly: boolean;
}

interface Dog extends Animal {
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
}
// 원본 타입의 서브타입이라면 재정의 가능



// 인터페이스 다중 확장
interface DogCat extends Dog, Cat {

}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true
}
