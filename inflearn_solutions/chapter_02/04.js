let input = '1 0 1 1 1 0 0 1 1 0'.split(' ').map((item) => +item);
// console.log(input);

function solution (arr) {
    let answer = [];
    let cnt = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i]===1) {
            cnt++;
            answer.push(cnt);
        } else {
            cnt = 0
            answer.push(cnt);
        }
    }
    answer = answer.reduce((a, b) => a+b);
    return answer;
}
console.log(solution(input));






// 강사님  코드
function solution (arr) {
    let answer = 0;
    let cnt = 0;
    for (let a of arr) {
        if (a===1) {
            cnt++;
            answer += cnt;
        } else {
            cnt = 0
            answer += cnt;
        }
    }
    return answer;
}
console.log(solution(input));