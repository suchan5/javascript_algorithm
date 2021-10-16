// 경로 탐색 (DFS-인접 행렬) : 노드 개수가 적을 때
// Tree(DFS)를 공책에 그린거 보고 먼저 이해를 해야 아래 코드가 이해가 된다

function solution (n, arr) { // n : 정점의 개수, arr : 간선 정보를 배열로 넣었다
    let answer = 0;
    let graph = Array.from(Array(n+1), ()=>Array(n+1).fill(0)); // 인접 행렬을 기록할 이차원 배열. 행도 (n+1)개, 열도 (n+1)개. 왜냐면 1번 노드부터 시작했으니까
    let check = Array.from({length:n+1}, ()=>0); // 그 노드를 방문 했냐 안했냐를 체크할 체크배열도 만든다
    
    for(let [a, b] of arr) { // 인접행렬을 만들어보자. for문 돌면서 인접행렬을 만들어
        console.log(a, b);
        graph[a][b]=1; // 이렇게하면 방향 그래프가 된다. 1로 체크하면 a ->b로 이동가능하다는 소리 예) graph[1][2]=1; 1행 2열에 체크되었다는 소리 (=인접행렬에서 체크되었다는 뜻은 노드 1에서 노드 2로 이동 가능한다는 소리). 
    }

    function dfsR(v) { // L대신 v사용. 그래프에서 정점에서 정점으로 이동하니까 
        if (v===n) { // 종착점은 dfsR(5)지 이 문제에서. 5번 노드에 종착하면 탐색 끝난다. 그러므로 n은 5
            answer++; // 종착점 5번 정점에 오면 쁠쁠해준다
        } else {
            for (let i=1; i<n+1; i++) { // n개의 가지 개수만큼 for문을 돌아준다. 1번부터입니다 정점 번호는. 
                if (graph[v][i] === 1 && check[i] === 0) { //  내가 지금 v에서 i로 갈 수 있느냐, 갈 수 있다면  체크(=1)이겠지 . 그리고(&&) 체크배열의 i갈래가 체크가 되지 않아야(=0) 갈 수 있다(방문한 놈은 체크되어서 못간다)
                    check[i] = 1; // 방문 했으니 체크 걸어주고
                    dfsR(i); // i정점으로 넘어가면 된다. dfsR(1)로 시작해서 dfsR(i)로 이동
                    check[i] = 0; // 뒤로 back할 때는 다시 체크 풀어준다 (항상 dfsR(v)를 기준으로 체크해주고 호출(방문)하고 풀어주고)
                }
            }

        };
    }
    check[1] = 1; // 항상 호출하기 전에 체크부터 걸어줘야한다. 방문했다고 표시해주고 해당 정점를 호출하는거다
    dfsR(1); // 1번 정점부터 호출(방문)
    return answer;
}
let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]; 
console.log(solution(5, arr));







// 이번에는 경로의 디테일도 출력해보자 : path라는 빈배열을 추가
function solution (n, arr) { 
    let answer = 0;
    let graph = Array.from(Array(n+1), ()=>Array(n+1).fill(0)); 
    let check = Array.from({length:n+1}, ()=>0); 
    let path = [];
    
    for(let [a, b] of arr) { 
        console.log(a, b);
        graph[a][b]=1; 
    }

    function dfsR(v) { 
        if (v===n) { 
            answer++; 
            console.log(path);
            
        } else {
            for (let i=1; i<n+1; i++) { 
                if (graph[v][i] === 1 && check[i] === 0) { 
                    check[i] = 1;
                    path.push(i); // i로 가고 있으니까 
                    dfsR(i); 
                    check[i] = 0; 
                    path.pop(); // 뒤로 back할 때는 푸쉬한거 팝으로 빼줘야한다
                }
            }

        };
    }
    path.push(1); // 제일먼저 여기서 1번 정점 푸쉬 해줘야해. 출발점이니까 
    check[1] = 1; 
    dfsR(1);
    return answer;
}
let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]; 
console.log(solution(5, arr));
// 이렇게 경로의 디테일이 잘 출력된다
// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 5 ]
// [ 1, 3, 4, 2, 5 ]
// [ 1, 3, 4, 5 ]
// [ 1, 4, 2, 5 ]
// [ 1, 4, 5 ]
// 6