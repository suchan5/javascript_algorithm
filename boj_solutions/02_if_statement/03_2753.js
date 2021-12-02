const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();
input = +input;
console.log(input);

function solution(year) {
    let answer;
    if (year%4===0 && (year%100!==0 || year%400===0)) {
        answer ='1';
    } else {
        answer = '0';
    }
    return answer;
};
console.log(solution(input));






function solution(year) {
    let answer = 0;
    if (year%4===0 && (year%100!==0 || year%400===0)) {
        answer = 1;
    }
    return answer;
}
console.log(solution(input));