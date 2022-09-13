const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);

function solution(A, B) {
    let answer;
    answer = A - B;
    return answer;
};
console.log(solution(input[0], input[1]));



//readFile하지 않고 이 방법으로 하면 더 간단하다
// function solution(A, B) {
//     return A-B;
// }
// const input = [3, 2];
// console.log(solution(input[0], input[1]));