// 합이 같은 부분집합 (아마존 인터뷰)

function solution (arr) {
    let answer = 'NO';
    let total = arr.reduce((a, b) => a + b, 0); // 배열 전체의 합
    //let flag = 0; // 이 문제는 바둑이 문제처럼 무게 제한 같은게 없으므로 재귀 함수를 끝낼 조건을 플래그로 걸어준다.. 플래그 관련은 주석처리 해봤는데 여전히 잘된다. 선택사항으로 남겨두자 내 수준에서는
    function dfsR(L, sum) { // L은 level인데 여기서는 입력값으로 받은 배열의 index번호다(L이 0이면 =arr[L] = 1, L이 3이면 = arr[3] = 6), sum은 내가 재귀를 돌면서 만든 부분 집합의 합. 
        if (L===arr.length) { // Level이 이진트리의 마지막까지 뻗어나가야 재귀 함수가 멈춘다
            if ((total-sum) === sum) { // 집합의 모든 원소의 합에서, 재귀 함수로 뻗어나가면서 포함될 때(왼쪽)마다 sum으로 누적해 놓은거를 빼면, 포함이 안된(오른쪽)남은 원소의 합이 나온다. 그 둘의 합이 같으면 출력값이 YES가 되는거임
                answer = 'YES';
                //flag = 1;
            }
            // if (flag) {
            //     return;
            // }
        } else {
            dfsR(L+1, sum+arr[L]); // 왼쪽(=포함된다). L은 index다. 왼쪽일 때 하나씩 뻗어나가고(L+1), 그 원소를 sum에 누적한다
            dfsR(L+1, sum); // 오른쪽 (=포함 안된다). L은 오른쪽일 때도 마찬가지로 하나씩 뻗어나가고(L+1), sum에는 포함시키지 않았으니 누적될 값도 없다
        }
    }
    dfsR(0, 0);
    return answer;
}
let arr = [1, 3, 5, 6, 7, 10]
console.log(solution(arr));

