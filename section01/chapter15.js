// 1. 객체 생성
let obj1 = new Object() // 객체 생성자
let obj2 = {} // 객체 리터럴 (대부분 사용)

// 2. 객체 속성(프로퍼티)
let person = {
    // key: value
    // key는 문자열 또는 숫자, value는 모든 타입 가능
    name: "John",
    age: 30,
    hobby: "tennis",
    job: "FE Developer",
    extra: {},
    10: 20,
    "like cat": true,
};

// 3. 객체 속성 접근
// 3.1 점 표기법, 괄호 표기법
let name = person.name; // "John"
let age = person["age"]; // 30

// 3.2 동적 접근
// - 변수나 표현식을 사용하여 속성에 접근할 수 있음
let property = "hobby";
let hobby = person[property]; // "tennis"

// 4. 객체 속성 추가 및 수정
person.address = "123 Main St"; // 추가
person.job = "fe developer"; // 수정
person[20] = 40; // 추가
person["like cat"] = false; // 수정

// 5. 객체 속성 삭제 (delete 연산자)
delete person.age; // 삭제
delete person["like cat"]; // 삭제

// 6. 객체 유무 확인 (in 연산자)
console.log("name" in person); // true
console.log("age" in person); // false