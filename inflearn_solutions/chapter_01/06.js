// 주어진 수들 중 홀수를 찾아서 1)홀수들의 합을 구하고, 2)홀수들 중 최소값을 구하라

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);



function solution2 (arr) {
    let sum = 0;
    let min = 10000000000;
    for (let n of arr) {  // arr를 for문으로 돌면서
        if (n%2 !== 0) { // 2로 나눴을 때 딱 나누어 떨어지지 않으면 홀수
            sum += n // 홀수를 sum이란 변수에 누적하면 그게 홀수의 합
            if (min > n) { // min에 담아둔 값이랑 홀수n이랑 비교해서 더 작은 값이 min에 새로 담긴다
                min = n; 
            }
        }
    }
    console.log(sum);
    console.log(min);
}
solution2(input);



// Math.min()을 이용해서 최소값을 찾을 수도 있다
function solution(arr) {
    let answer = [];
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i=0; i<arr.length; i++) {
        if (arr[i]%2 !== 0) {
            sum += arr[i];
            min = Math.min(min, arr[i]);
        }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
    
    
}
let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));








// 맨 처음에는 이렇게 했었다. 위의 코드들이 더 좋은 코드임 물론
function solution1(arr) {
    let sum = 0;
    let min = 1000000000;
    let odd = [];
    for (let i=0; i<arr.length; i++) { // arr를 for문으로 돌면서
        if (arr[i]%2 !== 0) { // 2로 딱 나누어 떨어지는게 아니라면 홀수
            sum += arr[i]; // 홀수를 sum이란 변수에 누적하면 그게 홀수의 합
            odd.push(arr[i]); // 홀수들만 모아두는 array를 만들어서 거기에 넣는다
        }
    }
    for (let j=0; j<odd.length; j++) { // 이번엔 저 odd라는 배열을 for문으로 돌면서
        if (min > odd[j]) { //  min에 담아둔 값이랑 홀수랑 비교해서 더 작은 값이 min에 새로 담긴다
            min = odd[j];
        }
    }
    console.log(sum);
    console.log(min);
};
solution1(input);










