// LIS(Longest increasing Subsequence) : 최장 증가 부분 수열 : 어떠한 수열에서 오름차순으로 증가하는 가장 긴 부분 수열을 의미한다. 이 때, 부분 수열의 각 수는 서로 연속할 필요는 없다.
// 길이를 출력하는 방법은 dynamic programming을 알면 쉽게 할 수 있다

function solution (arr) {
    let answer = 0;
    let dy = Array.from({length:arr.length}, ()=>0);
    dy[0] = 1; // dy[0]의 자리에는 무조건 1개겠지. 이건 초기화해준다
    for (let i=1; i<arr.length; i++){ 
        let max = 0;
        for (let j=i-1; j>=0; j--) { // 0번까지 역순으로 돌면서 dy배열을 훑으면서
            if (arr[j]<arr[i] && dy[j]>max) {
                max = dy[j];
            }
        }
        dy[i] = max + 1;
        answer = Math.max(answer, dy[i]);
    }
    return answer;
}
let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));