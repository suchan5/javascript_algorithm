// 경로 탐색 (DFS-인접리스트) : 노드 개수가 많을 때 적용
// 02.js랑 똑같은 문제인데 인접행렬이 아니라 인접리스트로 풀어볼꺼다. 그 코드 그래로 가져와서 살짝 바꿔주면 완성된다
// 정점 개수가 한 20개 정도로 작으면 인접 행렬로 풀어도 상관이 없지만, 정점 개수가 천개, 만개, 천만개 가버리면 인접행렬은 메모리 낭비에 시간복잡도도 확 올라가 버린다. 1번 정점과 연결된 edge가 5개밖에 없어도 for문을 천개 만개 천만개 돌면서 다 확인해야한다 


function solution (n, arr) { 
    let answer = 0;
    let graph = Array.from(Array(n+1), ()=>Array()); // 행은 N+1개만큼 필요하다 (1번부터 N번까지 정점 번호가 있으므로). 그리고 열은 빈 열을 하나 넣어주고 더이상 0으로 초기화 할 필요가 없다. 0: [], 1: [], 2: []이런식으로 6개가 생긴다(크롬 브라우저 콘솔창에 찍어보면 세로로 나열됨. 그래서 더 이차원 배열같이 보임 ㅋㅋ)
    let check = Array.from({length:n+1}, ()=>0); 

    for(let [a, b] of arr) { 
        graph[a].push(b); // a행에다가 b를 푸쉬해준다. 그러면 이제 인접리스트가 된거다!
    }
    console.log(graph);
    
    function dfsR(v) {  
        if (v===n) { // 종착점은 dfsR(5)지 이 문제에서. 5번 노드에 종착하면 탐색 끝난다. 그러므로 n은 5
            answer++; 
        } else {
            for (let i=0; i<graph[v].length; i++) { // 그래프의 행의 정점의 길이만큼 for문을 돈다. dfsR(1)로 시작했으니까 처음에는 1행의 길이만큼 돌고, 그 다음에 2행의 길이만큼 돌고 continue
                // if (graph[v][i] === 1 && check[i] === 0) {  // 필요없다. 이런걸 확인할 필요가 없다. 당연히 그 값들을 가는거다
                if (check[graph[v][i]] === 0) { // graph[v][i] 는 v행의 i인덱스 자리. 체크가 안되어있다면 다음줄,
                    check[graph[v][i]] = 1; // 체크가 안되어있다면 정점'graph[v][i]'에 체크걸고 (갈 수 있으니까 체크를 걸어야지)
                    dfsR(graph[v][i]); // 그 정점 호출
                    check[graph[v][i]] = 0; // 그리고 체크 풀어주고
                }
            }
        };
    }
    check[1] = 1; 
    dfsR(1);
    return answer;
}
let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]; 
console.log(solution(5, arr));







// // 이번에는 경로의 디테일도 출력해보자 : path라는 빈배열을 추가
// function solution (n, arr) { 
//     let answer = 0;
//     let graph = Array.from(Array(n+1), ()=>Array()); 
//     let check = Array.from({length:n+1}, ()=>0); 
//     let path = []; 

//     for(let [a, b] of arr) { 
//         graph[a].push(b); 
//     }

//     function dfsR(v) {  
//         if (v===n) { 
//             answer++; 
//             console.log(path);
//         } else {
//             for (let i=0; i<graph[v].length; i++) { 
//                 if (check[graph[v][i]] === 0) {
//                     check[graph[v][i]] = 1; 
//                     path.push(graph[v][i]);
//                     dfsR(graph[v][i]); 
//                     check[graph[v][i]] = 0; 
//                     path.pop();
//                 }
//             }
//         };
//     }
//     path.push(1); // 제일먼저 여기서 1번 정점 푸쉬 해줘야해. 출발점이니까
//     check[1] = 1; 
//     dfsR(1);
//     return answer;
// }
// let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]; 
// console.log(solution(5, arr));