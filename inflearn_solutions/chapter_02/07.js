// 봉우리 : 네방향 탐색

let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]
];

function solution (arr) {
    let answer = 0;
    let n = arr.length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    for (let i=0; i<n; i++) { // 배열의 행 탐색
        for (let j=0; j<n; j++) { // 배열의 열 탐색
            let flag = 1;
            for (let k=0; k<4; k++) { //  네방향 탐색 
                let nx = i + dx[k]; // 가려고 하는 방향
                let ny = j + dy[k]; 
                if (nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny] >= arr[i][j]) { // nx>=0 && nx<n : 가려는 곳이 격자판 밖으로 나가면 안된다. 0보다는 크고 n보다는 작다(범위 안에 있어야 한다는 소리) && 현재 기준이 되는 좌표에서 , 나보다 크거나 같은 값이 있으면 봉우리가 아니다  
                    flag = 0; // 봉우리가 아니다
                    break; // 봉우리가 아닌데 더 돌 필요 있나. k포문을 멈추면 된다
                }
            }
            if (flag) { // k for문을 break;하고 나왔는데 flag가 1 고대로 있더라. for문을 다 돌았는데 0이 없었단 얘기는 봉우리라는 얘기
                answer++
            }
        }
    }

    return answer;
}

console.log(solution(arr));