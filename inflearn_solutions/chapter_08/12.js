// 조합의 경우의 수(Memoization)
// 공책에 그림 같이 보면서, 코드로 표현은 이렇게 하는구나하고 이해

// 5 Combination 3
function solution (n,r) {
    function dfsR (n,r) {
        if (r===0 || n===r) {
            return 1;
        } else {
            return dfsR(n-1, r-1) + dfsR(n-1, r);
        }
    }
    return dfsR(n,r);
}
console.log(solution(5,3)); // 만약 33,19이면? 재귀 돌리는데 시간 엄청 들어간다. 그래서 아래처럼 memoization을 쓴다





// memoization
function solution (n,r) {
    let dy=Array.from(Array(35), ()=>Array(35).fill(0)); // 1. 넉넉한 크기의 35열 35행의 2차원 배열을 만들었다
    function dfsR (n,r) {
        if (dy[n][r] > 0) { // 3. dy[n][r]이 0보다 크다는 소리는 2차원 배열에 뭔가가 기록이 되었다는 뜻. 초기값은 0이었다 
            return dy[n][r]; // 4. 그러면 return dy[n][r] 그 뭔가가 기록된걸 리턴하면 끝
        };
        if (r===0 || n===r) {
            return 1;
        } else {
            return dy[n][r] = dfsR(n-1, r-1) + dfsR(n-1, r); // 2. dy[n][r]에다 집어넣고
        }
    }
    return dfsR(n,r);
}
console.log(solution(33,19)); // 5. 계산하는데 시간 안걸리고 바로 나와버린다 답이. 오~ 그래서 메모이제이션 쓰는구나!