// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 차입을 말함
// ex) string <-> number ==> 서로소 관계에 있다

type Admin = {
  tag: "ADMIN"
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "Guest";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name} 님 현재까지 {kickCount} 명 강퇴했습니다.
// Member -> {name} 님 현재까지 {point} 모았습니다.
// Guest -> {name} 님 현재까지 {visitCount}번 오셨습니다.

function login(user: User) {
  if('kickCount' in user) {
    // admin
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if("point" in user) {
    // Member
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  } else if("visitCount" in user) {
    // Guest
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
  }
}
// -> 직관적으로 어드민? 게스트? 확인하기가 쉽지 않음


function login1(user: User) {
  if(user.tag === "ADMIN") {
    // admin
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if(user.tag === "MEMBER") {
    // Member
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  } else if(user.tag === "Guest") {
    // Guest
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
  }
}
// -> tag 프로퍼티 추가하여 직관적


function login2(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
      break;
    }
    case "Guest": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
      break;
    }
  }
}
// -> 조금 더 직관적


