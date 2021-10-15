// 돌다리 건너기
// 계단 오르기랑 똑같다. 다만!! 돌다리 7까지 건너는 법을 구하려면 dy[7]이 아니라 dy[8]을 반환해야한다. 7번 돌다리에서 도착지점까지 점프해서 뛰어야 비로소 도착하는거니까
// 시작지점 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 도착지점 

function solution(n) {
    let answer;
    let dy = Array.from({length:n+1}, ()=>0);
    dy[1] = 1;
    dy[2] = 2;
    for (let i=3; i<=n+1; i++) { // 이거떄문이었다. i<n+1 이렇게해서 그런거였어. Either i<=n+1 아니면 i<n+2 이렇게 했어야돼
        dy[i] = dy[i-1] + dy[i-2];
    }
    answer = dy[n+1]; // 얼레?? 이렇게 하니까 답이 안찍힘.. undefined라고... 왜ㅠㅠ 
    return answer;
     
}
console.log(solution(7));






