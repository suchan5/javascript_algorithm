# 자바스크립트로 푸는 알고리듬
<br />
<br />

### fs모듈로 입력 받는 방식
```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);

function solution() {
    return
};
console.log(solution());
```
<br />
<br />

### readline으로 입력 받는 방식
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
  /////////////////////////////////////////

  input = input.map(item => +item);

  function solution(x,y) {
    let quadrant;
    if (x>0 && y>0) {
        quadrant = 1;
    } else if (x<0 && y>0) {  
        quadrant = 2;
    } else if (x<0 && y<0) {
        quadrant = 3;
    } else {
        quadrant = 4;
    }
    return quadrant);
     
    };
    console.log(solution(input[0], input[1]));
   
    
  /////////////////////////////////////////
  process.exit();
});
```