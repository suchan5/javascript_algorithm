const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();
console.log(input);

function solution(str) {
    let count = 0;
    for (s of str) {
        if (s === s.toUpperCase()) {
            count += 1;
        }
    }
    return count;
};
console.log(solution(input));