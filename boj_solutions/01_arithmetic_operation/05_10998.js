const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);

function solution(A, B) {
    let answer;
    answer = A * B;
    return answer;
};
console.log(solution(input[0], input[1]));



// readFile안하고 이렇게 하면 간단
// function solution(A, B) {
//     return A*B;
// }
// const input = [3, 4];
// console.log(solution(input[0], input[1]));