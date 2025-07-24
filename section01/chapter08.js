// 1. null 병합 연산자
// 존재하는 값을 추려내는 기능
// null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;

let var4 = var1 ?? var2;
console.log(var4); // 10, var1이 null이므로 var2의 값이 할당됨

let var5 = var2 ?? var3;
console.log(var5); // 10, var2가 null이 아니므로 앞의 값이 할당됨

// 2. typeof 연산자
// 변수의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = 1;
var7 = "hello";

let t1 = typeof var7; 
console.log(t1); // "string"

// 3. 삼항 연산자
// 조건에 따라 다른 값을 반환하는 연산자
let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res); // "짝수", var8가 짝수이므로 "짝수"가 반환됨
