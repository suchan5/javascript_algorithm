// 문제36 : 구구단 출력하기
// 입출력
// 입력 : 2
// 출력 : 2 4 6 8 10 12 14 16 18

function solution (n) {
    let answer = '';
    for (let i=0; i<10; i++) {
        answer += n*i + ' ';
    }
    return answer;
}
console.log(solution(2));