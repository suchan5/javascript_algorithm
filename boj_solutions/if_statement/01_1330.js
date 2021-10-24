const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);
console.log(input);

function solution(A, B) {
    let answer;
    if (A>B) {
        answer = '>';
    } else if (A===B) {
        answer = '==';
    } else {
        answer = '<';
    }
    return answer;
};
console.log(solution(input[0], input[1]));