// 조합 구하기 : 1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 M개를 뽑는 방법의 수를 출력하는 프로그램을 작성하세요.

// 문제 이해를 잘해야된다. [3, 6, 9]가 있으면, 
// 중복 순열 :   [ [ 3, 3 ], [ 3, 6 ], [ 3, 9 ], [ 6, 3 ], [ 6, 6 ], [ 6, 9 ], [ 9, 3 ], [ 9, 6 ], [ 9, 9 ] ]
// 순열     :   [ [ 3, 6 ], [ 3, 9 ], [ 6, 3 ], [ 6, 9 ], [ 9, 3 ], [ 9, 6 ] ]
// 이 문제는 :   [ [3,6], [3,9], [6,9] ]일꺼 같지? 아니야 [ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]이거야... 헐


function solution (N, m) {
    let answer = [];
    let tmp = Array.from({length:m}, ()=>0);
    function dfsR(L, s) { // string 가지. Available한 가지의 수. 여기서는 자연수 (N)1,2,3,4이렇게 4가지
        if (L===m) {
            answer.push(tmp.slice()); // 지정석 tmp배열에 담긴 경우의 수들을 answer배열로 push. 그리고 뒤에 slice해줘서 깊은 복사로 만들어준다
        } else {
            for (let i=s; i<N+1; i++) { // 여기서는 i자체가 원소다. index번호가 아니라
                tmp[L]=i; // 처음 for문을 돌면 지정석 두 자리 중 tmp[0]의 자리에 i인 (N)1이 들어가겠지 . 다시말해볼께. // 지정석 tmp[0]번째에 i인 1을 선택했다고 치는거임(어차피 시작할 때 dfsR(0,1)로 시작했음). 그런데 1~4까지 available한 가지의 수가 있는것이므로 2를 선택할 수도 있고, 3을 선택할 수도 있고, 4를 선택할 수도 있다 . 나중에 어차피 for문이기 때문에 한 번씩 돌아가면서 선택할거긴 하지만
                dfsR(L+1, 1+i); // 그리고 다음 배열로 넘어왔지. 'dfsR(0,1)'에서 L, s 둘 다 1씩 증가해서 'dfsR(2,2)'가 된거다. 다시 말해볼께. // 위에서 tmp[L]을 선택하고 다음 Level로 뻗어나왔다. L+1은 이해했을테고, s의 1+i가 어렵지? s는 for문의 스타트 넘버. 1에서 시작했으니까 1에다가 간택된 숫자 i를 더하는거다. 지금은 1을 선택했다고 쳤으니 i는 1이겠지만, 만약 윗줄에서 두번째 가지인 2를 i로 선택했으면, 1+i = 1+2가 되겠지 'dfsR(1,2)'.
            }
        }
    }
    dfsR(0,1); // 왜 s를 1부터 시작하는지? 0부터 시작해도 되긴된다. 그치만! 그러면 [ [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ][ [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]가 나오므로
    return answer;
}
console.log(solution(4, 2)); // [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]







// // 이해를 돕기 위해 let arr = [3, 6, 9];를 넣어서 돌려보았다
// function solution (arr, m) {
//     let answer = [];
//     let tmp = Array.from({length:m}, ()=>0);
//     function dfsR(L, s) {
//         if (L===m) {
//             answer.push(tmp.slice());
//         } else {
//             for (let i=s; i<arr.length+1; i++) { 
//                 tmp[L]=i; 
//                 dfsR(L+1, 1+i); 
//             }
//         }
//     }
//     dfsR(0,1); 
// }
// let arr = [3, 6, 9];
// console.log(solution(arr, 2)); //[ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ] 헐. 

