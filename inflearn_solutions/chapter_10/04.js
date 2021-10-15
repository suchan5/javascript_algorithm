// 동전교환 (냅색 알고리즘 ) : 동전 교환 문제는 DFS배울 때 했었다. 재귀함수로 DFS를 이용한 완전탐색, 백트랙킹 하면서 해봤었다.
// dy[i] : i금액을 거슬러 주는데 사용된 최소 동전의 개수 예) dy[5] : 5불을 거슬러 주는데 사용된 동전의 갯수

function solution (m, coin) {
    let answer=0;
    let dy = Array.from({length:m+1}, ()=>1000); // m은 거슬러줘야할 금액이고, 엄청 큰 수(1000불)로 초기화해주고 시작할꺼다
    dy[0] = 0;
    for (let i=0; i<coin.length; i++) {
        for (let j=coin[i]; j<=m; j++) {
            dy[j] = Math.min(dy[j], dy[j-coin[i]] + 1);
        }
    }
    answer = dy[m];
    return answer;
}
let arr= [1,2,5];
console.log(solution(15, arr)); // 15불을 거슬러줘야한다.

