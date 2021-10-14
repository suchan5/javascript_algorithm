// 섬나라 아일랜드 : BFS활용 (QUEUE를 사용해서 넓이우선탐색을 할꺼다) : 이렇게 뻗어나가는 격자판 같은거는 넓이우선 탐색 당연히 가능하다

function solution(board){  
    let answer = 0;
    let n = board.length;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];
    let queue = [];

    for (let i=0; i<n; i++){ // 2중 for문이 돌아야겠지. 2차원 배열 탐색하려고 그러는거임
        for (let j=0; j<n; j++) {
            if (board[i][j] === 1) { // 1이면 섬 발견한거지
                board[i][j] = 0; // 꺼냈을 때 바로 체크를 해준다. 보드의 i지점과 j지점을 0(바다)로 만들어버리는거지
                queue.push([i, j]); // 자 시작점이 만들어진거지. 그럼 이 때 이제 queue가 도는거다
                answer++; // 섬이 발견됐다? 그럼 while문으로 queue돌기 전에 한 번 count++해주고
                while (queue.length) { // 큐안에 들은 원소의 갯수가 0이란 소리는 큐가 비면
                    let x = queue.shift(); // 밑에 if문에서 , 8방향에 조건에 맞는게 있으면 push로 큐에 넣겠지, 넣다가 조건 맞는게 없으면 shift로 여기서 빼기만 하다가, 더이상 큐에 남은게 없으면(line 15의 while문) 종료
                    for (let k=0; k<8; k++) { // 8방향
                        let nx = x[0] + dx[k];
                        let ny = x[1] + dy[k];
                        if(nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1){ // 8방향이 격자판 밖으로 벗어나지 않고, 1(땅)이면 오케이
                            board[nx][ny] = 0; // 격자판의 nx지점, ny지점을 바다로 만들어버리고
                            queue.push([nx, ny]); // 큐에다가 푸쉬를 해주는거지
                        }
                    }
                }
                
            }
        }
    }
    return answer;
}

let arr=[[1, 1, 0, 0, 0, 1, 0], 
         [0, 1, 1, 0, 1, 1, 0],
         [0, 1, 0, 0, 0, 0, 0],
         [0, 0, 0, 1, 0, 1, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 1, 0, 0],
         [1, 0, 1, 0, 1, 0, 0]];

console.log(solution(arr));