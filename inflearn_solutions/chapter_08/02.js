// 재귀함수를 이용한 이진수 출력 : 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 단 재귀함수를 이용 해서 출력해야 합니다.

function solution (N) {
    let answer='';
    function dfsR(N) {
        if (N===0) {
            return;
        } else {
            // console.log(N%2); // 1 1 0 1. 우리가 원하는 출력값은 1011 이므로 아래로 내려준다
            dfsR(parseInt(N/2)); // 몫을 구하는 식. 나머지가 있으면 안되므로 parseInt()를 사용해서 정수로 바꿔줬다
            console.log(N%2); // 1 0 1 1
            answer += (N%2); // toString()이렇게 안해도 let answer=''; 이렇게 빈 문자열을 만들어줬으므로 string으로 누적된다
        }  
    }
    dfsR(11);
    return answer;
}
console.log(solution(11));





// 재귀함수가 아닌 while을 사용해서 하는 방법 : N(몫)이 0이되면 함수를 종료 
function solution (N) {
    let answer='';
    while (N>0) {
        answer += (N%2); // 나머지를 answer라는 빈 스트링에 담아준다 1101. 그치만 우리가 원하는 출력값은 1011이므로...
        N = parseInt(N/2); // Math.floor(N/2);로 해도 괜찮다
    }
    answer = [...answer].reverse().join("");  // reverse()를 이용해서 뒤집어줄꺼다. reverse()는 배열에 쓰는 함수이므로, 문자열을 먼저 spread operator를 이용해 배열로 바꿔주고나서 사용. [ '1', '1', '0', '1' ] => [ '1', '0', '1', '1' ] => 1011
    // answer = answer.split("").reverse().join(""); 이렇게도 간단히 할 수 있지. split()을 이용해서 배열로 만들고, reverse()를 통해서 순서를 뒤집고, join()을 이용해서 다시 문자열로 만들고
    return answer;
}
console.log(solution(11));




