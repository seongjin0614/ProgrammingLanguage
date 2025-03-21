// 타입스크립트의 클래스

const employee = {
  name: "이정환",
  age: 27,
  position: "developer",
  work() {
    console.log("열일")
  }
}

class Employee {
  // 필드
  name:string;
  age:number;
  position:string;

  // 생성자
  constructor(name:string, age:number, position:string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("열일!")
  }
}

// 타입스크립트의 클래스는 타입으로도 활용 가능함