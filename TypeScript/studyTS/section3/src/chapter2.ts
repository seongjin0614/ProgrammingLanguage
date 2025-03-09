// unknown 타입

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

}


// never 타입
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
}

// any 타입

