// 1. Number Type
let num1 = 27;
let num2 = 3.14;
let num3 = -20;

// 기본적인 사칙연산을 지원
console.log(num1 + num2); // 30.14
console.log(num1 - num2); // 23.86
console.log(num1 * num2); // 84.78
console.log(num1 / num2); // 8.607594936708861
console.log(num1 % num2); // 0.8599999999999994

let inf = Infinity; // 무한대
let mInf = -Infinity; // 음의 무한대
let nan = NaN; // Not a Number(수치 연산을 실패할때의 결과)

// 2. String Type
// 작은 따옴표, 큰 따옴표, 백틱을 사용하여 문자열을 정의
let myName = "John Doe";
let myLocation = 'New York';
let introduce = myName + " from " + myLocation;
let introduceTemplate = `${myName} from ${myLocation}`; // 템플릿 리터럴 사용
console.log(introduce); // John Doe from New York

// 3. Boolean Type
// true 또는 false 값을 가질 수 있는 논리형
let isActive = true;
let isLoggedIn = false;

// 4. Null Type
let empty = null; // 의도적으로 값이 없음을 나타내는 타입

// 5. Undefined Type
let notAssigned; // 변수는 선언되었지만 값이 할당되지 않은 상태