// 대소문자 변화 : 대문자는 소문자로, 소문자는 대문자로

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();
console.log(input);

function solution(str) {
    let answer='';
    for (let s of str) {
        if (s === s.toUpperCase()) {
            answer += s.toLowerCase();
        } else {
            answer += s.toUpperCase();
        }
    }
    return answer;
};
console.log(solution(input));