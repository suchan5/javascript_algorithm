const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);

function solution(A, B) {
    let answer;
    answer = A + B;
    return answer;
};
console.log(solution(input[0], input[1]));




// Alternatively, readFile말고 이렇게 할 수도 있다. 이게 더 간편
// function solution(A, B) {
//     return A+B;
// }
// const input = [1, 2];
// console.log(solution(input[0], input[1]));
