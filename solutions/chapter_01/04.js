// 1부터 N까지 합 출력하기

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();
input = +input;
console.log(input);

function solution(N) {
    let answer = 0; // let answer;이렇게 하니까 NaN라고 뜬다. 숫자 계산할 때는 let answer = 0;이런식으로 꼭 숫자로 선언해줘야함 
    for (let i=1; i <= N; i++) { 
        answer += i;
    }
    return answer;
};
console.log(solution(input));