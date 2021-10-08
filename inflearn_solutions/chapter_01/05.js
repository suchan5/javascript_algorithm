// 최소값 구하기

'use strict';

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);
console.log(input);

function solution(arr) {
    let min = Number.MAX_SAFE_INTEGER; // 일단 min을 최대한 큰 정수로 선언한다 (Number.Max_SAFE_INTEGER;를 사용하면 알아서 자바스크립트가 임의의 가장 큰 정수를 제공한다)
    console.log(min); // 9007199254740991

    for (let i=0; i < arr.length; i++) {
        if (arr[i] < min) { // arr에 있는 그 어떤 수랑 비교해도 가장 큰 정수보다는 작으므로, 제일 처음에는 min에 배열의 제일 첫번째 숫자가 담긴다
            min = arr[i]; // 계속 for문을 돌면서 배열의 숫자들이랑 min이랑 비교해서 더 작은 값을 찾는다
        }
    }
    return min;
};
console.log(solution(input));