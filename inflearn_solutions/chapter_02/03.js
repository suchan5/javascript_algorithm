// 가위(1) 바위(2) 보(3)
// A를 기준으로 놓고 A가 이기는 경우를 중심으로 구현하면 간단하게 할 수 있다


function solution (a, b) {
    let winner = [];
    for (let i=0; i<a.length; i++) {
        if ((a[i]===1 && b[i]===3) || (a[i]===2 && b[i]===1) || (a[i]===3 && b[i]===2)) {
            winner.push('A');
        } else if (a[i]===b[i]) {
            winner.push('D');
        } else {
            winner.push('B');
        }
    }
    return winner.join(' ');
}
let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));