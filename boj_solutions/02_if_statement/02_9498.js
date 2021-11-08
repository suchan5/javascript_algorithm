const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();
input = +input;
console.log(input);

function solution(mark) {
    let answer;
    if (mark >= 90) {
        answer = 'A';
    } else if (mark >= 80) {
        answer = 'B';
    } else if (mark >= 70) {
        answer = 'C';
    } else if (mark >= 60) {
        answer = 'D';
    } else {
        answer ='F';
    }
    return answer;
};
console.log(solution(input));