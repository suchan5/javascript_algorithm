// 미로탐색 (DFS)

function solution (board){
    let answer = 0;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    function dfsR(x,y) { // 격자판이니까 좌표 x,y로
        if (x===6 && y===6) { // (6,6)이면 도착이므로 count++해준다
            answer++
        } else {
            for (let k=0; k<4; k++) { // 네 방향으로 뻗는다. 12시, 3시, 6시, 9시. i로 안하고 k로 하기로 하자
                let nx = x + dx[k]; // nx(next x)
                let ny = y + dy[k]; // ny(next y)
                if (nx>=0 && nx <=6 && ny>=0 && ny <=6 && board[nx][ny] ===0) { // 가려는 좌표가 (-1,-1)이러면 격자판 밖으로 나가니까 그걸 정리해준거임 , 그리고 board에서 가려고 하는 지점(board[nx][ny])이 0이어야만 갈 수 있다
                    board[nx][ny] = 1; // board[nx][ny]지점에 체크 걸어야된다 꼭. 0으로 그대로 둬서 이미 갔던 길을 계속 왔다갔다 하면 안된다
                    dfsR(nx, ny); // (nx, ny)좌표로 이동해야지
                    board[nx][ny] = 0; // back할 때는 다시 체크를 풀어줘야지. 항상 이렇게 풀어주고 백하는거다 
                }
            }
        };
    }
    board[0][0] = 1; // 첫번째 출발지에 (0,0)으로 꼭 체크를 걸어야한다
    dfsR(0,0); // 그리고 나서 dfsR(0,0)호출(출발)
    return answer;
}

let arr=[[0, 0, 0, 0, 0, 0, 0], 
         [0, 1, 1, 1, 1, 1, 0],
         [0, 0, 0, 1, 0, 0, 0],
         [1, 1, 0, 1, 0, 1, 1],
         [1, 1, 0, 0, 0, 0, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 0, 0, 0]];

console.log(solution(arr));



