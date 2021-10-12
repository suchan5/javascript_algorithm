// 재귀함수를 이용한 이진수 출력 : 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 단 재귀함수를 이용 해서 출력해야 합니다.

function solution (N) {
    let answer='';
    function DFS(N) {
        if (N===0) {
            return;
        } else {
            // console.log(N%2); // 1 1 0 1. 우리가 원하는 출력값은 1011 이므로 아래로 내려준다
            DFS(parseInt(N/2)); // 몫을 구하는 식. 나머지가 있으면 안되므로 parseInt()를 사용해서 정수로 바꿔줬다
            console.log(N%2); // 1 0 1 1
            answer += (N%2); // toString()이렇게 안해도 let answer=''; 이렇게 빈 문자열을 만들어줬으므로 string으로 누적된다
        }
        
    }
    DFS(N);
    return answer;
}
console.log(solution(11));








