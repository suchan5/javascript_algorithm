const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(item => +item);
console.log(input);

function solution(A, B) {
    let stringB = String(B);
    console.log(stringB); //  typeof(stringB) 해보면 string

    console.log(A*stringB[2]); // // typeof(A*stringB[2]) 해보면 number나옴.. 오..
    console.log(A*stringB[1]); 
    console.log(A*stringB[0]);
    console.log(A*B);
};
solution(input[0], input[1]);