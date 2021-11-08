const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);

function solution(A, B) {
    console.log(A+B);
    console.log(A-B);
    console.log(A*B);
    console.log(parseInt(A/B));
    console.log(A%B);
};
solution(input[0], input[1]);