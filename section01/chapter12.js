function funcA() {
    console.log("funcA");
}

let varA = funcA; // 함수 참조를 변수에 저장
varA(); // 변수에 저장된 함수를 호출

// 함수 표현식 ex1
let varB = function funcB() {
    console.log("funcB");
};

varB(); // 변수에 저장된 함수를 호출
funcB(); // funcB는 함수 표현식으로 선언되어 호출 불가

// 함수 표현식 ex2
let varC = function() {
    console.log("익명 함수");
}

varC(); // 익명 함수 호출

// 화살표 함수
// 함수 표현식을 간결하게 작성하는 방법
// 화살표 함수 ex1
let varD = () => {
    console.log("화살표 함수");
};

varD(); // 화살표 함수 호출

// 화살표 함수 ex2
let varE = (a, b) => a + b; // 매개변수가 2개인 화살표 함수
let sum = varE(3, 4);
console.log(`합은 ${sum}입니다.`); // 결과 출력