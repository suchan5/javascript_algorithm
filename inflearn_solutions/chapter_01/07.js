// 자동차 10부제 
// 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다
// 날짜의 일의 자리 숫자가 주어지고, 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때, 자동차 10부제를 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');  // 배열 안의 데이터들은 일단 문자열의 형태로 둔다 (평소처럼 숫자로 변환하지 않는다. 왜냐하면 slice를 해서 자동차 번호판 일의 자리 숫자를 구해야한다)
console.log(input);


// 이렇게 간단하게 할 수 있다니
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item); // 여기서는 배열 안의 데이터들을 숫자로 평소처럼 바꿔주자. 문자열을 slice로 하는 것보다, 숫자로 했을 때 더 간단하게 하는 방법이 있다
console.log(input);

function solution2(date, arr){
    let count = 0;
    for(let x of arr){ 
        if(x % 10 === date) { // 바로 이렇게 10으로 나누어 버리면, 나머지가 곧 일의 자리 숫자이다. 오~~!!! 10진수의 수들은 10으로 나누었을 때, 어떤 수를 나누던 나머지는 곧 일의 자리 숫자이다
            count++; 
        }
    }
    return count;
}
console.log(solution2(0, input));






// 내 버전 코드 (그냥 이렇게  삽질할  수도  있구나  정도만ㅎㅎ)
function solution(date, arr) {
    let car; // 차의 번호판의 일의 자리 숫자를 담을 변수를 선언
    let count = 0;
    for (let i = 0; i < arr.length; i++) { // for문으로 배열을 돌면서
        car = Number(arr[i].slice(1)); // slice를 이용해서 각 자동자 번호판에서 일의 자리 숫자만 추출 (예. 12의 '2', 20의 '0') => 아직은 string형태일테니 숫자로 바꿔준다
        if (car === date) { // 차 번호판의 일의 자리 숫자가, 날짜의 일이 자리 숫자와 같으면
            count += 1; // 누적해준다
        }
    }
    return count;
};
console.log(solution(0, input));












