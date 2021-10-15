// 계단 오르기

function solution(n) {
    let answer;
    let dy = Array.from({length:n+1}, ()=>0); // 숫자 1번부터 시작할꺼니까 n+1, 0으로 초기화 시켜주고 // dy 배열에는 문제가 원하는 값을 저장. 이 문제에서는 도달하는 방법의 개수를 원하니까 그걸 저장. 그래서 dy배열의 값을 반환하거나 값을 활용하면 그게 곧 정답으로 이어지게끔
    dy[1] = 1; // 1번부터 2번까지는 초기화를 시켜주자
    dy[2] = 2;
    for (let i=3; i<n+1; i++) { // 3번째 계단부터 n번째 계단까지 for문을 돌리면서
        dy[i] = dy[i-1] + dy[i-2];
    }    
    answer = dy[n]
    return answer;
}

console.log(solution(7));



