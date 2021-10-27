// 문자열 : 중복 문자 제거
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();
console.log(input);

function solution(str) {
    let answer = ''; // 빈 문자열을 만들고
    for (let i=0; i<str.length; i++) { // 문자열을 for문으로 돌면서
        // console.log(str[i], i, str.indexOf(str[i])) // 이걸 돌려보면, arr.indexOf(arr[i])가 0 1 2 3 4 5 6 7 이렇게 순차적으로 가야하는데, 중복되는 것들때문에 순차적으로 가지를 못한다. 0 1 2 <0 0 1 2> 7 이런 식으로 간다 (중복 되는 것들은 알아보기 쉽게 가로(<>)쳐봤다ㅎ) . 이 중복되는 것들을 제거하면 되는거다
        if (str.indexOf(str[i]) === i) { // 중복되지 않는 것들, 그러니까 arr.indexOf(arr[i])와 index가 match되는 것들만 answer에 추가
            answer += str[i];
        }
    }
    return answer;
};
console.log(solution(input));





// 응용 문제 : 문자열 : 중복되는 '특정 문자' 제거
// 흰트: console.log(arr.indexOf('Z'));// indexOf('Z')를 예로 들면, 주어진 Z를 발견하지 못했을 시 -1을 return한다
function solution2(str) {
   let answer=0;
   let position = str.indexOf('k');
   while (position !== -1) {
        answer += 1;
        position = str.indexOf('k', position+1);
   }
   return answer;
};
console.log(solution2(input));