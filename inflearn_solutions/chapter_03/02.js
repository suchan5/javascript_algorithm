// 유효한 팰린드롬

let input ='found7, time: study; Yduts; emit, 7Dnuof';

function solution(str) {
    let answer='YES';
    str = str.replace(/[^a-z]/gi, ''); // a-z가 아닌것들을 대소문자 상관없이 global영역에서 찾아서, 빈 문자열로 바꿔라
    console.log(str); // foundtimestudyydutsemitdnuof
    if (str !== str.split('').reverse().join('')) {
        answer = 'NO';
    }
    return answer;
}
console.log(solution(input));