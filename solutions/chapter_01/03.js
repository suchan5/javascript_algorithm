// 연필 개수
// 푸는 방법 : 인원수를 12자루로 나눈다 => 딱 안떨어지고 소수점이 나오면, 반올림 해준다

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
input = +input;
console.log(input);

function solution(N) {
    let answer;
    answer = Math.ceil(N/12);
    return answer;
};
console.log(solution(input));
