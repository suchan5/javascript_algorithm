// 삼각형 판별하기
// 접근법 : 짧은 막대 두 개의 길이의 합이, 가장 큰 막대의 길이보다 커야지만 삼각형을 만들 수 있다
// 푸는 방법 : A,B,C중 가장 긴 막대를 구한다 => 막대 세 개의 합에서 가장 긴 막대를 빼면, 나머지 두 막대의 길이의 합을 알 수 있다 => 그 둘을 비교한다

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);
// console.log(input);

// function solution(A, B, C) {
//     let answer = 'YES';
//     let longest;
//     const sum = A+B+C;
//     if (A<B) {
//         longest = B;
//     } else {
//         longest = A;
//     }
//     if (C>longest) {
//         longest = C;
//     }
//     if ((sum-longest) < longest) {
//         answer = 'NO';
//     }
//     return answer;
// };
// console.log(solution(input[0], input[1], input[2]));







// 푸드 판다 코테 끝나고 내가 새로 짜 본 코드. 새삼 많이 발전했구나! 강사님 코드보다 훨씬 좋다! 그치만 시간은 더 많이 걸리려나?
let input = '6 7 11'.split(' ').map(item => +item);

function solution (arr) {
    let answer='NO';
    let total = input.reduce((a, b) => a+b, 0);
    let longest = Math.max(...input);
    if ((total - longest) > longest) {
        answer = 'YES';
    }
    return answer;
}

console.log(solution(input));