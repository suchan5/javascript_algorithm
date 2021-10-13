// 바둑이 승차 
// 부분 집합 = 이진트로로 뻗어나가는 = 선택한다 선택하지 않는다 = 바둑이를 태운다 태우지 않는다

function solution(C, arr) {
    let answer = Number.MIN_SAFE_INTEGER; // 최대값 구하는거니까 가장 작은 숫자로 세팅하고
    function dfsR(L, sum) {
        if (sum > C) { // 누적된 합이 Ckg보다 크면 바로 재귀 함수 종료. 바로 아래에 재귀로 가지도 못하게 ..('if(L===arr.lengh){} else{}'으로 가지도 않는다).
            return;
        };
        if (L===arr.length) { // Level이 이진트리의 마지막까지 뻗어나가야 재귀함수가 멈춘다
            answer = Math.max(answer, sum); // answer랑 sum중에 더 큰게 있으면 그걸로 바꿔주는거다
        } else {
            dfsR(L+1, sum+arr[L]);
            dfsR(L+1, sum);
        };
    }
    dfsR(0,0);
    return answer;

}
let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));