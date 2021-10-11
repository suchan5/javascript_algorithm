// 배열 : 중복 단어 제거
// 흰트 : 배열은 for문을 돌면서 쓸 수 있는 함수가 4가지 있다 : forEach(), map(), filter(), reduce()
// 푸는 방법 : 16번 문자열 풀 때와 원리는 같다. indexOf()를 이용

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n'); // '\n'을 기준으로 split을 이용해서 배열로 만들어줬다
console.log(input); // [ 'good', 'time', 'good', 'time ', 'student' ]

function solution(arr) {
    let answer;
    answer = arr.filter(function(v,i) {
        // console.log(v,i, arr.indexOf(v));
        return arr.indexOf(v)===i;
    });
    return answer;
};
console.log(solution(input));





// arrow function을 사용해보자
function solution(arr) {
    let answer;
    answer = arr.filter((v,i) => arr.indexOf(v)===i);
    return answer;
};
console.log(solution(input));






// arrow function 사용법 보강 : if문 등 더 복작합 로직을 추가하고 싶을 때는 아래같은 식으로 사용한다
function solution(arr) {
    let answer;
    answer = arr.filter((v,i) => {
        if (arr.indexOf(v)===i) {
            return v;
        }
    });
    return answer;
};
console.log(solution(input));


