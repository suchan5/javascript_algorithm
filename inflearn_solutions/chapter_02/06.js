// 격자판 최대합
let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
];

function solution (arr) {
    let sum1 = 0; // sum1 행의 합
    let sum2 = 0; // sum2 열의 합
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;

    for (let i=0; i<n; i++) {
        sum1 = 0; // 여기다가 초기화 또 해줘야한다. 다음 행의 합을 구하기 전에 0으로 매 번 초기화 되어야함
        sum2 = 0; 
        for (let j=0; j<n; j++) {
            sum1 += arr[i][j];
            sum2 += arr[j][i]; 
        }
        answer = Math.max(answer, sum1, sum2); // 이 셋 중에서 가장 큰 값이 asnwer로 들어가는거지
    }

    sum1 = 0;
    sum2 = 0;
    for (let i=0; i<n; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][n-i-1]; // 행(i)이 0번째일 때, 열은 4번째여야하니까 
    }
    answer = Math.max(answer, sum1, sum2); // 이 셋 중에서 가장 큰 값이 asnwer로 들어가는거지
    return answer;
}

console.log(solution(arr));