// 보충 자료 
// 이진트리 넓이우선탐색 (BFS - 상태트리탐색으로 이해하면 좋다. 최단거리를 구한다거나. 아무튼 BFS는 Level단위로 넓게 먼저 탐색하고, 못찾으면 다음 Level로 넘어가서 또 넓게 찾는다)
// DFS가 아니라서 더이상 코드 짤 떄 recursion을 사용하지 않는다. 큐의 원리를 코드로 구현해서 문제를 푼다
// PDF자료 pg5쪽의 그림보면서 해야한다


function solution (board){
    let answer = '';
    let queue = []; // queue는 배열과 같다고 이해한다 
    queue.push(1);
    while (queue.length) { //queue의 원소의 갯수가 0이면 queue가 비어있단 얘기니까 멈춘다
        let v = queue.shift(); // v는 노드. 아무튼 큐의 FIFO구조를 구현하는 거임 . 큐에서 하나 빼주고 line 15에서 푸쉬한다
        answer += v + ' ';
        for(let nv of [v*2, v*2+1]) { // 분배의 법칙처럼 v*2가 nv에 들어가고, v*2+1도 nv에 들어간다. 아무튼 트리 그림보면 왼쪽 노드는 v*2, 오른쪽 노드는 v*2+1로 뻗어나간다
            if (nv>7){ // 이렇게하면 7이상은 안들어간다. 노드가 1~7까지 밖에 없다 트리 그림보면
                continue;
            }
            queue.push(nv);
        }
    }
    return answer;
}
console.log(solution());