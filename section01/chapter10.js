for(let idx = 0; idx < 10; idx++) {
    console.log(`현재 인덱스: ${idx}`);

    if(idx %= 2 === 0) {
        continue;
    } // idx가 짝수면 다음 반복으로 넘어감

    if(idx >= 5) {
        break; // idx가 5 이상이면 반복문 종료
    }
}