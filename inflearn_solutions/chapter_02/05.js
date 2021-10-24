// 등수구하기



// 이중 for문 사용
// i = 0 일 때, j가 0부터 arr.length 까지 돈다. 
// i = 1 일 때, j가 0부터 arr.length 까지 돈다.
// i = 2 일 때, j가 0부터 arr.length 까지 돈다.
// i = 3 일 때, j가 0부터 arr.length 까지 돈다.
// i = 4 일 때, j가 0부터 arr.length 까지 돈다.


// 이 코드는 이해가 잘 안된다. 나는 아래 방법으로 풀어야지. 
// function solution(n, arr) {
//   let answer = [];
 
//   for (let i = 0; i < n; i++) {
//     let rank = 1; // rank변수를 이 줄에다가 넣어야지만 답이 나오는데 그 매케니즘이 이해가 잘안됨 ㅠㅠ
//     for (let j = 0; j < n; j++) {
//       if (arr[i] < arr[j]) {
//         rank++;
//       }
//     }
//     answer.push(rank);// push도 이 줄에서 해야지만 답이 나오는데 그 매케니즘이 이해가 잘안된다..
//   }
//   return answer;
// }
// let n = 5;
// let arr = [87, 89, 92, 100, 76];
// console.log(solution(n, arr));






function solution (arr) {
  let rank = Array.from({length:arr.length}, ()=>1); // rank라는 배열을 하나 만들고 원소를 모두 1로 초기화 (현재 모두가 1등이라고 가정)

  for (let i=0; i<arr.length; i++) { // i가 기준이다. i는 고정으로 두고  j가 한 번씩 돌면서 비교한다. 
    for (let j=0; j<arr.length; j++) {
      if (arr[i] < arr[j]) {  // i가 기준이다. i보다 j가 점수가 높으면, 
        rank[i]++; // answer의 i번째 값을 쁠쁠해준다. 그럼 1로 초기화 되었던게 2가 되겠지? 2등으로 밀려났단 소리
      }
    }
  }
  return rank;
}
arr = [87, 89, 92, 100, 76];
console.log(solution(arr));