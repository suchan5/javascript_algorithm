// 동전 교환 ㅠㅠ

function solution (arr, m) {
    let answer=Number.MAX_SAFE_INTEGER; // 최소값을 구해야하니까 가장 큰 수를 넣어준다
    function dfsR(L, sum) {
        if (sum>m) { // sum이 m금액을 넘어가버리면 재귀 함수 자체를 바로 종료. 더 돌 필요 없다
            return;
        };
        if (L>=answer) { // Level이 answer보다 크면 재귀 함수 자체를 바로 종료. 더 돌 필요 없다
            return;
        };
        if (sum===m) {
            console.log(L, sum);
            answer = Math.min(answer, L);
        } else {
            for (let i=0; i<=arr.length; i++) {
                dfsR(L+1, sum+arr[i]);
            }
        };
    }
    dfsR(0,0);
    return answer;
}
let arr = [1,2,5];
console.log(solution(arr, 15));
