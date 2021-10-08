// 세 수 중 최솟값 구하기

'use strict';

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);
console.log(input);

function solution(A, B, C) {
    let smaller;
    if (A<B) {
        smaller = A;
    } else {
        smaller = B;
    }
    if (C<smaller) {
        smaller = C;
    }
    return smaller;
};
console.log(solution(input[0], input[1], input[2]));
