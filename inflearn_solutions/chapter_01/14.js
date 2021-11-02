// 가장 긴 문자열 : N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요. 
// 'N개의 문자열이 입력되면'이라는 말은 배열(array)을 이용하라는 흰트나 마찬가지. 배열을 for문으로 돌때 필수로 배열의 길이(개수)가 필요하므로.

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n'); // split()을 이용해서 배열(array)로 만들어줬다
console.log(input);  // [ 'teacher', 'time', 'student', 'beautiful', 'good' ]
 
function solution(arr) {
    let answer;
    let max = Number.MIN_SAFE_INTEGER; // 최댓값을 구해야 할 때는 임의의 가장 작은 수를 이용한다
    for (let a of arr) {
        if (a.length > max) {
            max = a.length;
            answer = a;
        }
    }
    return answer;
};
console.log(solution(input));




// 이렇게도 가능
let input ='teacher time student beautiful good'.split(' ');
console.log(input);

function solution () {
    let answer;
    let max = 0;
    for (let i=0; i<input.length; i++) {
        if (max < input[i].length) {
            max = input[i].length;
            answer = input[i];
        }
    }
    return answer;
}
console.log(solution());