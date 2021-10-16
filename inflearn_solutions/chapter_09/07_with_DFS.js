// 섬나라 아일랜드 : DFS활용 : dfsR말고 그냥 DFS
// 이거 재귀함수 사용해서 풀 수 있나..? ㅇㅇ 할 수있는듯. 바꿔봐야겠다..? ㅎ 04.(js파일 참고)


function solution (board){ // 격자판이라서 board라는 매개변수 사용 ㅋㅋ
    let answer = 0;
    let n = board.length;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];

    function dfs(x,y) { // 아래 for문에서 호출된 dfs(i,j)로 인해서 출발지점 (0,0)이 인자로 넘어온다
        board[x][y] = 0; // 바로 격자판의 그 지점을 0으로 , 그러니까 바다로 바꿔버리겠습니다
        for (let k=0; k<8; k++) { // 8방향
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) { // 8방향이 격자판 밖으로 벗어나지 않고, 1(땅)이면 오케이
                dfs(nx, ny); // 또 다음 지점으로 넘어가지. dfs함수를 호출한다
            }
        }
    };

    for (let i=0; i<n; i++) { // 2중 for문이 돌아야겠지. 2차원 배열 탐색하려고 그러는거임
        for (let j=0; j<n; j++) {
            if(board[i][j] === 1) { // 1이면 섬 발견한거지
                answer++;
                dfs(i,j); // dfs(0,0)이겠지 맨 처음 for문을 돌때는
            }
        }
    }

    return answer;
};

let arr= [[1, 1, 0, 0, 0, 1, 0], 
          [0, 1, 1, 0, 1, 1, 0],
          [0, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 0, 1, 1],
          [1, 1, 0, 1, 1, 0, 0],
          [1, 0, 0, 0, 1, 0, 0],
          [1, 0, 1, 0, 1, 0, 0]];

console.log(solution(arr));

