// 함수 선언 ex1
function greeting() {
    console.log("안녕하세요!");
}

greeting(); // 함수 호출

// 함수 선언 ex2
function getArea(width, height) {
    area = width * height; // 매개변수로 받은 값을 이용해 넓이 계산
    console.log(`넓이는 ${area}입니다.`);
}

getArea(5, 10); // 함수 호출

// 함수 선언 ex3
function getSum(a, b) {
    return a + b; // 두 수의 합을 반환
}
let result = getSum(3, 4); // 함수 호출 후 결과를 변수에 저장
console.log(`합은 ${result}입니다.`); // 결과 출력

// 함수 선언 ex4
// 호이스팅 기능 -> 함수 선언은 코드 실행 전에 메모리에 올라감

getArea(5, 10); // 함수 호출

function getArea(width, height) {
    area = width * height; // 매개변수로 받은 값을 이용해 넓이 계산
    console.log(`넓이는 ${area}입니다.`);
}