// 문제9 : concat을 활용한 출력 방법
// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.
// 출력 : 2019/04/26 11:34:27

let year = '2019'; 
let month = '04';
let day = '26';
let hour = '11';
let minute = '34';
let second = '27';

let result = year.concat(`${month}/${day} ${hour}:${minute}:${second}`) // concat은 꼭 변수에 다시 assign해줘야한다

console.log(result);


