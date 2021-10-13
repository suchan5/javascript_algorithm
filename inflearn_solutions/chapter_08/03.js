// 부분집합 구하기 (DFS) : 자연수 N이 주어지면, 1부터 N까지의 원소를 갖는 집합의 부분집합을 작성하세요
// 예. {1,2,3} => {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}, {공집합}. 2^3 = 총 8개
// Binary Tree (DFS with Recursion)으로 코드짜서 구할 수 있다. 두 갈래로 뻗는거다. 호출된 수를 포함하거나 안하거나.

function solution(N) {
    let answer = [];
    let check = Array.from({length : N+1}, () => 0);
    function dfsR(v) {
        if (v === N+1) { // 4면 종료 
            let tmp='';
            for (let i=1; i<=N; i++) {
                if (check[i] === 1) {
                    tmp += i + ' ';
                }
            }
            if (tmp.length > 0) { // 공집합은 문제에서 원하지 않았으므로 이렇게해준다
                answer.push(tmp.trim());
            }
        } else {
            check[v] = 1;
            dfsR(v+1);
            check[v] = 0;
            dfsR(v+1);
        }
    }
    dfsR(1);
    return answer;
}
console.log(solution(3)); 