// 1. 묵시적 형 변환

let num = 10;
let str = "20";

const result = num + str;
console.log(result); // "1020" (문자열로 변환되어 연결됨)

// 2. 명시적 형 변환
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1); // 20 (문자열을 숫자로 변환)

let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2); // NaN (문자열이 숫자로 변환되지 않음)

let strToNum3 = parseInt(str2);
console.log(strToNum3); // 10 (문자열의 숫자 부분만 변환됨)
// 문자가 앞에 있으면 형변환이 실패하여 NaN이 됨

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1); // "20" (숫자를 문자열로 변환)