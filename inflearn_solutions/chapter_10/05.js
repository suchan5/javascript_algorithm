// 최대점수 구하기 (냅색 알고리즘)

function solution (m, arr) {
    let answer=0;
    let dy = Array.from({length:m+1}, ()=>0); // 0으로 초기화해준다

    for (let i=0; i<arr.length; i++) {
        let ps = arr[i][0]; //ps: problem score, pt : problem time
        let pt = arr[i][1];
        for (let j=m; j>=pt; j--) {
            dy[j] = Math.max(dy[j], dy[j-pt]+ps);
        }
    }
    answer = dy[m];
    return answer;
}
let arr = [[10, 5], [25,12], [15,8], [6,3], [7,4]]; 
console.log(solution(20, arr));
