// 1부터 N까지 합 출력하기

'use strict';

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();
input = +input;
console.log(input);

function solution(N) {
    let answer = 0; // let answer;평소처럼 이렇게 하니까 NaN라고 뜬다. answer에다가 누적을 할거니까 let answer = 0;이런식으로 제일 처음 값은 꼭 숫자로 선언해줘야하나봐
    for (let i=1; i <= N; i++) { 
        answer += i;
    }
    return answer;
};
console.log(solution(input));