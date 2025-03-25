// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth?: string;
  bio?: string;
  location?: string;
};

let user: User = {
  id: 1,
  name: "서성진",
  nickname: "서성진",
  birth: "1995.06.14",
  bio: "안녕하세요",
  location: "한국"
}
// 주의점
// 타입 별칭을 선언할때는 같은 스코프 안에서 중복된 이름 사용 불가



// 인덱스 시그니처
type CountryCodes= {
  [key: string]: string;
}

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: 'uk',
}
// 규칙을 위반하지 않는다면 모두 허용 -> 빈 객체도 오류가 발생하지 않음
