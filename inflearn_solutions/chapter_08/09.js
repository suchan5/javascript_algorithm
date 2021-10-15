// 동전 교환

function solution (arr, m) {
    let answer=Number.MAX_SAFE_INTEGER; // 최소값을 구해야하니까 가장 큰 수를 넣어준다
    function dfsR(L, sum) {
        if (sum>m) { // sum이 m금액을 넘어가버리면 재귀 함수 자체를 바로 종료. 더 돌 필요 없다
            return;
        };
        if (L>=answer) { // Level이 answer보다 크면 재귀 함수 자체를 바로 종료. 더 돌 필요 없다... 이게 이해가 안가.. 근데 이 if문 없어도 정상 작동함
            return;
        };
        if (sum===m) {
            // console.log(L, sum);
            answer = Math.min(answer, L); // 여기서 L이 나타내는게 뭐지? sum이 거슬러줘야 할 금액인 m에 도달했을 때 , answer에 담긴 Max_SAFE_INTEGER랑 L(가지: 여기서는 1불, 2불, 5불) 들이랑 비교해서 가장 작은값은 반환?
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
