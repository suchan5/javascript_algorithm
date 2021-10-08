// 세 수 중 최솟값 구하기

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);
console.log(input);

function solution(A, B, C) {
    let smaller;
    if (A<B) {
        smaller = A;
    } else {
        smaller = B;
    }
    if (C<smaller) {
        smaller = C;
    }
    return smaller;
};
console.log(solution(input[0], input[1], input[2]));








// Math.min()을 이용해서 더 간단하게 구할 수 있다
function solution2 (arr) {
    let minimum = Math.min(...arr); // Math.min()를 사용할 때는 괄호 안에 숫자들만 들어갈 수 있다. array는 못들어간다. 그럴때 ...arr 앞에 쩜쩜쩜을 찍어주면 (전개연산자 : spread operator라고 한다) arr[0], arr[1], arr[2]이런식으로 숫자의 형태로 배열이 퍼진다(?) 오. 
    return minimum;
}
console.log(solution2(input));
