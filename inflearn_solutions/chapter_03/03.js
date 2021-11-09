// 숫자만 추출 : 추출하는게 말이 추출이지 , 내가 빈 배열이나 빈 문자열 만들어서 거기에다가 추가해주는거다

let input = 'g0en2T0s8eSoft';

function solution (str) {
    let answer = '';
    for (let s of str) {
        if (!isNaN(s)) {
            answer += s;
        }
    }
    answer = parseInt(answer);
    return answer;
}
console.log(solution(input));





// Regular Expression사용해서 할 수도
function solution (str) {
    let answer = str.replace(/[a-z]/gi, '');
    answer = parseInt(Number(answer));
    return answer;
}
console.log(solution(input));
