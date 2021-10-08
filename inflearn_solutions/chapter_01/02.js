// 삼각형 판별하기
// 접근법 : 짧은 막대 두 개의 길이의 합이, 가장 큰 막대의 길이보다 커야지만 삼각형을 만들 수 있다
// 푸는 방법 : A,B,C중 가장 긴 막대를 구한다 => 막대 세 개의 합에서 가장 긴 막대를 빼면, 나머지 두 막대의 길이의 합을 알 수 있다 => 그 둘을 비교한다

'use strict';

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);
console.log(input);

function solution(A, B, C) {
    let answer = 'YES';
    let longest;
    const sum = A+B+C;
    if (A<B) {
        longest = B;
    } else {
        longest = A;
    }
    if (C>longest) {
        longest = C;
    }
    if ((sum-longest) < longest) {
        answer = 'NO';
    }
    return answer;
};
console.log(solution(input[0], input[1], input[2]));