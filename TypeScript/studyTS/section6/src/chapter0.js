// 클래스
// -> 객체를 만들어내는 틀
let studentA = {
  name: "서성진",
  grade: "A+",
  study() {
    console.log("열공");
  },
  introduce() {
    console.log("안녕");
  },
}

let studentD = {
  name: "이정환",
  grade: "A+",
  study() {
    console.log("열공");
  },
  introduce() {
    console.log("안녕");
  },
}


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

class StudentDeveloper {
  // 필드
  name;
  grade;
  age;
  programmingSkill;

  // 생성자
  constructor(name, grade, age, programmingSkill) {
    this.name = name;
    this.grade = grade;
    this.age = age;
    this.programmingSkill = programmingSkill;
  }

  // 메서드
  study() {
    console.log("열심히 공부")
  }
  introduce() {
    console.log("안녕!")
  }
  programming() {
    console.log(`${this.programmingSkill}로 프로그래밍 함`)
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// Student 인스턴스
let studentB = new Student("이정환", "A+", 27)
console.log(studentB);
studentB.study();
studentB.introduce();

const StudentDeveloper = new StudentDeveloper("서성진","AA",23,"JS");

// 클래스 상속을 통해 중복을 줄일수 있다
// extends 활용
