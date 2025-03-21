// 인터페이스 확장

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
}

// 인터페이스 다중 확장
// interface DogCat extends Dog, Cat {}
