const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(item => +item);
console.log(input);

function solution(x, y) {
    let answer;
    if (x>0 && y>0) {
        answer = '1';
    } else if (x<0 && y>0) {
        answer = '2';
    } else if (x<0 && y<0) {
        answer = '3';
    } else {
        answer = '4';
    }
    return answer;
};
console.log(solution(input[0], input[1]));