// // 부분집합 구하기 (DFS) : 자연수 N이 주어지면, 1부터 N까지의 원소를 갖는 집합의 부분집합을 작성하세요
// // 예. {1,2,3} => {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}, {공집합}. 2^3 = 총 8개
// // Binary Tree (DFS with Recursion)으로 코드짜서 구할 수 있다. 두 갈래로 뻗는거다. 호출된 수를 포함하거나 안하거나.

// function solution(N) {
//     let answer = [];
//     let check = Array.from({length:N+1}, ()=>0);
//     function dfsR(L) {
//         if (L === N+1) { // N은 arr.length와 같다. 1번 노드 'D(1)'부터 탐색 시작했으므로 'arr.length +1' 해준거다. 4면 탐색 트리의 종착점까지 가고 탐색을 종료 
//             let tmp='';
//             for (let i=1; i<=N; i++) {
//                 if (check[i] === 1) { // check배열을 돌면서 체크된게 있으면, 그 원소를 임시배열에 추가
//                     tmp += i + ' ';
//                 }
//             }
//             if (tmp.length > 0) { // 공집합은 문제에서 원하지 않았으므로 이렇게해준다
//                 answer.push(tmp.trim());
//             }
//         } else {
//             check[L] = 1;
//             dfsR(L+1);
//             check[L] = 0;
//             dfsR(L+1);
//         }
//     }
//     dfsR(1); // 1번 노드부터 시작해야한다. 평소처럼 0번부터 해주려고 위의 조건들도 바꿔주다보면 ,[ '0 1 2', '0 1', '0 2', '0', '1 2', '1', '2' ]이런 출력값이 나오므로
//     return answer;
// }
// console.log(solution(3)); 



// 어떤 학생은 이렇게 풀었더라. 와우!
// 섹션 8의 "4. 부분집합 구하기" 강의를 듣기 전 실습한 코드입니다.
// 놓치는 히든케이스나, 성능, 변수명(set1, set2) 등 선생님의 조언을 받고 싶어 질문 남깁니다. 감사합니다 !
function solution(n){
    function DFS(v, arr) {
        if (v > n) return ;
        else {
            let set1 = arr.slice(); // v가 있는 부분집합
            let set2 = arr.slice(); // v가 없는 부분집합
            set1.push(v);
            DFS(v+1, set1);
            console.log(set1.join(' '));
            DFS(v+1, set2);
        }
    }
    DFS(1, []);
}

solution(3);




