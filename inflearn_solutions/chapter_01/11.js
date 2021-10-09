// 대문자 찾기

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();
console.log(input);

function solution(str) {
    let count = 0;
    for (let s of str) {
        if (s === s.toUpperCase()) {
            count += 1;
        }
    }
    return count;
};
console.log(solution(input));






// charCodeAt()을 사용해서 하는 방법도 있다
function solution2(str) {
    let count = 0;
    for (let s of str) {
        let number = s.charCodeAt(); //이렇게 해서 콘솔창에 찍어보면 각 알파벳마다 코드 번호가 할당된걸 볼 수 있다
        if (number >= 65 && number <= 90) { // 대문자: 65~90, 소문자: 97~122  
            count += 1;
        }
    }
    return count;
};
console.log(solution2(input));