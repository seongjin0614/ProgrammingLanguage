// 클래스
// -> 객체를 만들어내는 틀





class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age){
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부")
  }

  introduce() {
    console.log("안녕!")
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// Student 인스턴스
let studentB = new Student("이정환", "A+", 27)
