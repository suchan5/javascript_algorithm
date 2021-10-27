// 문자 찾기 : 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();
console.log(input);


function solution(str, spelling) {
    let count = 0;
    for (let s of str) {
        if (s === spelling) {
            count ++;
        }
    };
    return count;
};
console.log(solution(input, 'R'));




// 간단히 split()을 이용할 수도 있다
function solution2(str, spelling) {
    let answer = str.split(spelling).length; // 4. [ 'COMPUTE', 'P', 'OG', 'AMMING' ]이런식으로 배열이 4개로 쪼개짐. R을 가운데에 두고 4개로 쪼개졌으므로 R의 개수는 3개다
    return answer - 1;
};
console.log(solution2(input, 'R'));

