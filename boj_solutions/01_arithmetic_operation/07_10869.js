const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);

function solution(A, B) {
    console.log(A+B);
    console.log(A-B);
    console.log(A*B);
    console.log(parseInt(A/B));
    console.log(A%B);
};
solution(input[0], input[1]);


// readFile없이 이렇게 하면 더 간단. 
// function solution(A, B) {
//     console.log(A+B);
//     console.log(A-B);
//     console.log(A*B);
//     console.log(parseInt(A/B)); // Math.floor(A/B);으로 해도 된다
//     console.log(A%B);
// }
// const input = [7, 3];
// solution(input[0], input[1]);