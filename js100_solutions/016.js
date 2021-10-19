// 문제16 : 로꾸거 
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입출력

// 입력 : 거꾸로
// 출력 : 로꾸거

let sentence = '거꾸로';
for (let i=sentence.length; i>0; i--) {
    console.log(sentence[i-1]);
}




let sentence = '거꾸로';
sentence = sentence.split('').reverse().join('');
console.log(sentence);


