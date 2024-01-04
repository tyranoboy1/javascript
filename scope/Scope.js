/** 예제 13-01번 */
function add(x, y) {
  // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
  // 즉, 매개변수의 스코프는 함수 몸체 내부이다.
  console.log(x, y);
  return x + y;
}
add(2, 5);
// 매개변수는 함수 몸체 내부에서만 참조 할수 있다.
console.log(x, y);

/** 예제 13-02번 */
var var1 = 1; // 코드의 가장 바깥 영역에서 선언한 변수

if (true) {
  var var2 = var2; // 코드 블록 내에서 선언한 변수
  if (true) {
    var var3 = var3; // 중첩된 코드 블록 내에서 선언한 변수
  }
}

function foo() {
  var var4 = 4; // 함수 내에서 선언한 변수

  function bar() {
    var var5 = 5; // 중첩된 함수 내에서 선언한 변수
  }
}

console.log(var1); // 1
console.log(var2); // 2
console.log(var3); // 3
console.log(var4); // ReferenceError: var4 is not defined
console.log(var5); // ReferenceError: var5 is not defined

/** 예제 13-03번 */

var x = "global";

function foo() {
  var x = "local";
  console.log(x);
}

foo();

console.log(x);

/** 예제 13-04번 */
function foo() {
  var x = 1;
  var x = 2;
  console.log(x); //2
}
foo();

/** 예제 13-05번 */
function bar() {
  let x = 1;
  // let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
  //   let x = 2;
}
bar();

/** 예제 13-06번 */
function foo() {
  console.log("global function foo");
}

function bar() {
  function foo() {
    console.log("local function foo");
  }
  foo();
}
bar();

/** 예제 13-07번 */
var x = 1;
if (true) {
  // var는 함수 스코프로 함수 블록만을 지역 스코프로 인정
  // 함수 밖에서 var 키워드로 선언된 변수는 코드 블럭 내에서 선언되었다 할지라도 모두 전역 변수
  // 따라서 x는 전역변수. x 변수는 중복 선언
  // 전역변수가 변경되는 부작용 발생
  var x = 10;
}

console.log(x);

/** 예제 13-08 */
var i = 10;

// for문 안에서 선언한 i는 전역 변수 위의 i와 중복 선언
for (var i = 0; i < 5, i++; ) {
  console.log(i);
}
// 의도치않게 값 변경
console.log(i); // 5

/** 예제 13-09번 */
var x = 1;

function foo() {
  var x = 10;
  bar();
}
function bar() {
  console.log(x);
}

foo();
bar();
