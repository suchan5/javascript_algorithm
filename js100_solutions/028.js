// 문제28 : 2-gram
// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 

// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

// 입력
// Javascript

// 출력
// J a  0 1
// a v  1 2 
// v a  2 3
// a s  3 4 
// s c  4 5
// c r  5 6
// r i  6 7
// i p  7 8
// p t  8 9

// 입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해 주세요.





let input = 'Javascript';

// 방법 1 : 반복문으로 별찍기 하던거 생각하면 쉽게 할 수 있다.
for (let i=0; i<input.length; i++) {
    if (input[i+1] !== undefined) {
        console.log(input[i], input[i+1]);
    }
}




// 방법 2 : 좀 더 간단하게 이렇게 작성할 수도 있다
for (let i=0; i<input.length-1; i++){
    console.log(input[i], input[i+1]);
  }