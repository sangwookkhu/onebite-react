// 1. if문
// 조건에 따라 코드 블록을 실행하는 제어문
// if로 시작하고 else로 끝나는 구조

let num = 10;

if(num >= 10) {
    console.log("num은 10 이상입니다.");
} else if(num >= 5) { // else if는 개수의 상관이 없음
    console.log("num은 5 이상 10 미만입니다.");
} else {
    console.log("num은 10 미만입니다.");
}

// 2. switch문
// 여러 조건을 비교하여 해당하는 코드 블록을 실행하는 제어문
// 다수의 조건을 처리할 때 if보다 더 직관적

let animal = "cat";

switch(animal) {
    case "dog":
        console.log("강아지입니다.");
        break; // break로 switch문을 종료
    case "cat":
        console.log("고양이입니다.");
        break;
    case "bird":
        console.log("새입니다.");
        break;
    default:
        console.log("알 수 없는 동물입니다."); // 모든 case에 해당하지 않을 때 실행
}