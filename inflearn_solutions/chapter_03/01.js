// 회문 문자열

let str = 'gooG';


// 배열의 reverse함수 사용하지 않고 직접 문자열을 for문 돌면서 하는 법
function solution (str) {
    let answer = 'YES';
    let len = str.length;
    str = str.toLowerCase();
    for (let i=0; i< Math.floor(len/2); i++) { // 문자열 길이의 반만 돌면 된다
        if (str[i] !== str[len-i-1]) {
            answer = 'NO';
        }
    }
    return answer;
}

console.log(solution(str));





// 배열의 reverse함수를 이용하는 법
function solution (str) {
    let answer='YES';
    str = str.toLowerCase();
    if (str.split('').reverse().join('') !== str) {
        answer = 'NO';
    }
    return answer;
}

console.log(solution(str));