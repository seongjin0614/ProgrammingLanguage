// 인덱스드 엑세스 타입

interface Post {
  title: string;
  content: string; 
  author: {
    id: number;
    name: string;
  };
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`ID: ${author.id}, Name: ${author.name}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 내용",
  author: {
    id: 1,
    name: "작성자 이름"
  },
};