// 팩토리얼 : 다음 문제인 조합을 이해를 돕기 위하여 배치한 토픽 : 재귀 함수가 값을 리턴받는 형태에 대해 배워볼꺼다
// 공책에 그림 같이 보면서, 코드로 표현은 이렇게 하는구나하고 이해

function solution (N) {
    let answer;
    function dfsR(N) {
        if (N===1) {
            return 1;
        } else {
            return N*dfsR(N-1);
        };
    }
    answer = dfsR(5);
    return answer;
}
console.log(solution(5));

