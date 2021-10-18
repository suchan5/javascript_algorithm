// 문제2 : 배열의 내장함수
// <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
//출력 : [200, 100, 10000, 300]

// 방법 1
let arr = [200, 100, 300];
//pass
arr.pop();
arr.push(10000, 300);
console.log(arr);



// 방법 2
let arr = [200, 100, 300];
//pass
arr.splice(2, 0, 10000);
console.log(arr);

