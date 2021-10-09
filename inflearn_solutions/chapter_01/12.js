// 대문자로 통일

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();
console.log(input);

function solution(str) {
    let answer='';
    for (let s of str) {
        answer += s.toUpperCase();
    }
    return answer;
};
console.log(solution(input));