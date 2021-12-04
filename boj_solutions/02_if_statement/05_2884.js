const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);
console.log(input);

function solution(H, M) {
    M -= 45;
    if (M<0) { // 45분을 뺐을 때 (-)값이면
        H -= 1;
        M += 60; 
    };
    if (H<0) { // specific하게 'H === 0'이라고 하면 안되나?
        H = 23;
    };
    console.log(H, M);
};
solution(input[0], input[1]);