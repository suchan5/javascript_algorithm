// function solution () {
//     function dfsR() {
//         if () {

//         } else {
//             dfsR();
//             dfsR();
//         }
//     }
//     dfsR();
// }
// solution();


function solution (arr) {
    let answer = 'NO';
    let total = arr.reduce((a, b) => a + b, 0);
    let flag = 0;
    function dfsR(L, sum) {
        if (L===arr.length) { // L이 6개가 되면 멈춘다
            if ((total-sum) === sum) { // 집합의 모든 원소의 합에서, 재귀 함수로 뻗어나가면서 포함될 때(왼쪽)마다 sum으로 누적해 놓은거를 빼면, 포함이 안된(오른쪽)남은 원소의 합이 나온다. 그 둘의 합이 같으면 출력값이 YES가 되는거임
                answer = 'YES';
                flag = 1;
            }
            if (flag) {
                return;
            }
        } else {
            dfsR(L+1, sum+arr[L]); // 왼쪽(=포함된다). L은 왼쪽일 때 하나씩 뻗어나가고(L+1), 그 원소를 sum에 누적한다
            dfsR(L+1, sum); // 오른쪽 (=포함 안된다). L은 오른쪽일 때 마찬가지로 하나씩 뻗어나가고(L+1), sum에는 포함시키지 않았으니 누적될 값도 없다
        }
    }
    dfsR(0, 0);
    return answer;
}
let arr = [1, 3, 5, 6, 7, 10]
console.log(solution(arr));

