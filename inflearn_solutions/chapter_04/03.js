// 멘토링 문제 : 와..문제부터 어렵다 (for문을 사용해서 완전탐색하는 아주 대표적인 문제이다. 경우의 수를 for문을 돌면서 다 확인해봐야한다)
// (멘토 i, 멘티 j) : 문제 입력값에서 4명의 학생이 있다고 했으니까. 멘토가 될 수 있는 경우의 수 4개, 멘티가 될 수 있는 경우의 수 4개해서 4*4=총 16가지 경우의 수(물론 (1,1), (2,2), (3,3), (4,4)자기 자신과 매치되는 이 경우의 수는 나중에 없애줄꺼긴 하다)
//  1     1
//  2     2
//  3     3
//  4     4

// 이 문제 코드에 있는 4중 for문의 각 인덱스 변수가 무엇을 의미하는지 알아야 합니다.
// 첫 번째 for문의 인덱스인 i는 멘토가 되는 학생의 번호입니다.(1부터 n번까지)
// 두 번째 for문의 인덱스인 j는 멘티가 되는 학생의 번호입니다.(1부터 n번까지)
// 세 번째 for문의 인덱스인 k는 수학 테스트 번호입니다.(0번째 테스트부터 m-1번째 트스트까지)
// 네 번째 for문의 인덱스인 s는 각 테스트에서의 등수를 의미합니다. (0등부터 n-1등까지)
// 이것을 이해하고 영상을 다시 보시면 이해가 갈 것입니다.
// if(test[k][s]===i) pi = s;
// 위에 코드의 test[k][s]의 값은  k번째 테스트에서 s등을 하는 학생의 번호입니다. 즉 
// if(test[k][s]===i) 이 참이되면 s는 i번 학생의 등수가 되는 것이고 그것을 pi에 저장하는 것입니다.
// 따라서 pi는 멘토가 되는 i번 학생의 등수인 것입니다.
// 그러면 pj는 멘티가 되는 j번 학생의 등수가 되겠죠.




// 내장메써드를 쓰지 않고 반복만으로만 구현하기
let input = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];

function solution (test) {
    let answer = 0;
    let tmp = [];
    let m = test.length; // 총 3번의 시험을 본다
    let n = test[0].length; // 학생수는 4명.  [3, 4, 1, 2]의 길이이므로 4
    for (let i=1; i<n+1; i++ ) { // i(멘토)도 1번 학생부터 n번 학생까지
        for (let j=1; j<n+1; j++) { // j(멘티)도 1번 학생부터 n번 학생까지
            // console.log(i,j); // 16가지 경우의 수가 모두 찍힌다
            let cnt = 0; // cnt는 여기다가 초기화 해줘야하겠지. 매 test들어가기 전에
            for (let k=0; k<m; k++) { // 0번 인덱스부터 test횟수가 m만큼 돈다
                let pi; //i의 등수를 pi라고 할께
                let pj; // j의 등수를 pj라고 할께
                for (let s=0; s<n; s++) { // 등수. (학생 수만큼 돈다)
                    if (test[k][s] === i) { // k번쨰 테스트(예를들면 첫번째 테스트)의 s위치에 i번 학생이 있냐 없냐해서 있다고 하면
                        pi = s; // pi(i의 등수)는 s다
                    }
                    if (test[k][s] === j) {
                        pj = s;
                    }
                }
                if (pi < pj) { // s for문을 다 돌고나면 i번 학생의 등수와 j번 학생의 등수는 확인이 된거지. 그러니 여기서 확인을 한다. pi의 등수가 pj보다 작으면 쁠쁠. (1,1),(2,2),(3,3),(4,4)같은 숫자는 여기 조건문에서 제껴진다
                    cnt++;
                }
            }
            if (cnt === m) { // k for문(시험 본 횟수) 다 돌고나서
                tmp.push([i,j]); // tmp 빈배열을 만들어서 이렇게 찍어보면 어떤 조합으로 answer에 쁠쁠이 되는지 확인가능  
                answer++;
            }
        }
    }
    console.log(tmp);
    return answer;
}
console.log(solution(input));










// 내장함수 indexOf를 사용 (반례가 있는지는 모르겠음)
// 정답 출처 : https://gobae.tistory.com/11
// function solution(test){
//     let answer = [];
//     const m = test.length;
//     const n = test[0].length;
  
//     for(let i = 1; i<=n; i++){
//       for(let j = 1; j<=n; j++){
//         if(i===j) continue;
//         let cnt = 0;
//         for(let k = 0; k<m; k++){
//           const gi = test[k].indexOf(i)
//           const gj = test[k].indexOf(j)
//           if(gi < gj) cnt++;
//         }
//       if(cnt === m) answer.push([i, j]);
//       }
//     }
//     return answer;
//   }
  
//   let arr = [[3,4,1,2], [4,3,2,1], [3,1,4,2]];
//   console.log(solution(arr));

// 유의할 점 :
// indexOf 메서드는 2번째 인자로 fromIndex를 받는데, 이 인자 값을 설정하지 않으면 기본값 0을 가진다.
// 그렇게 되면 배열의 처음부터 찾고자하는 값을 찾아나가는데, 처음으로 값이 발견되면 그 즉시 인덱스를 반환하고 종료된다.
// 만약 [1,2,3,1,1,3] 등과 같이 두번째 1을 찾고 싶다면?
// fromIndex의 값을 부여해서, 찾는 시작점을 설정해주면 된다.

// 만약 indexOf만을 고집해서 모든 1의 인덱스를 사용하고 싶다면 :
// const arr = [1,2,3,1,1,3];
// const indexArr = [];
// let idx = 0;

// while(true){
//   idx = arr.indexOf(1, idx);
//   if(idx === -1) break;
//   indexArr.push(idx++);
// }

// 위와 같이 배열의 처음부터 1의 index를 찾는다.
// 그 값을 idx 변수에 저장한다.
// 만약 idx가 -1일 때 (indexOf 메서드는 찾고자 하는 값이 존재하지 않을 때 -1을 반환한다) while문을 탈출한다.
// idx가 -1이 아니라면, indexArr 배열에 idx값을 넣어주고, idx를 1 증가시키면 된다.
// - 발견한 인덱스 그 다음 인덱스부터 찾아야한다.