// 수들의 조합 : 예) 숫자 5개가 있고, 그 중 3개를 뽑기

function solution(N, K , arr, m) {
    let answer = 0;
    function dfsR(L, s, sum) { // L= Level, s = available한 가지들의 starting number(for문을 돌 때 0부터 셀지 1부터 셀지 s에다가 지정하란 소리. dfsR(0,0,0)이니까 우리는 0부터 셀꺼다) , sum = 3개를 뽑는 그 원소들의 합
        if (L===K) { // k번 뽑아야 깊이 들어가는 탐색을 멈춘다
            if (sum % m === 0) { // sum이 6의 배수인지 보는거다
                answer++;
            }
        } else {
            for (let i=s; i<N; i++) { // i는 index넘버다 0번부터 시작. 원소가 아니다. dfsR(0,0,0).
                dfsR(L+1, i+1, sum+arr[i]); // i뒷편부터 시작된다고 했어(다음 Level로 뻗으면 i 뒷숫자부터 available하다. 0,1,2,3,4가 있으면 L=1에서 0을 선택했다고 해봐, 그럼 L+1 에서는 0은 제외하고 1,2,3,4만 available한거다 )
            }                                // sum에는 arr[i]를 누적. 뽑은 숫자를 sum에 누적해주는거야
        }
    }
    dfsR(0, 0, 0);
    return answer;
}
let arr = [2, 4, 5, 8, 12]
console.log(solution(5, 3, arr, 6)); // 숫자 5개 중, 3개 뽑기, arr, 6의 배수





