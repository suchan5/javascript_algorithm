// 보충 자료 
// Binary Tree : DFS wirh Recursion (Stack)
// 코드로 표현하면 아래와 같다 (기본 템플릿처럼 가져다가 사용하면 된다)

function solution (v) {
    let answer;
    function dfsR(v) { // vertex : 노드를 나타냄
        if (v>7) { // 임의로 노드를 6까지 있다고 가정. 6이 되면 종료
            return;
        } else {
            // console.log(v); // root 먼저출력하고 (preorder)
            dfsR(v*2); // root를 기준으로 왼쪽 자식 노드로 뻗고
            console.log(v); // 왼쪽 자식 노드 다 뻗은 다음에 root를 출력 (inorder)
            dfsR(v*2+1) // root를 기준으로 오르쪽 자식 노드로 뻗고 . 
            //console.log(v); // root를 가장 마지막에 출력 (postorder)
        }
    }
    dfsR(v);
    return answer; 
}
console.log(solution(1));




