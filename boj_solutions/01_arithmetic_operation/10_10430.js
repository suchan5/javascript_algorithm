const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);

function solution(A, B, C) {    
    console.log((A+B)%C);
    console.log(((A%C) + (B%C))%C);
    console.log((A*B)%C);
    console.log(((A%C) * (B%C))%C);
};
solution(input[0], input[1], input[2]);

