const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);

function solution(A, B) {
    let answer;
    answer = A * B;
    return answer;
};
console.log(solution(input[0], input[1]));