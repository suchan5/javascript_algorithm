// k번째 큰 수 뽑기
// 10장의 카드 중 3장을 뽑는 경우의 수: 10 combination 3.
// 중복을 제거하는 자료구조가 있는데 그것이 set이다. 이걸 이용할꺼다.
// 3장을 뽑으니까 3중 for문을 돌꺼다.

let input = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

function solution (n, k, card) {
    let answer;
    let tmp = new Set(); // set객체를 tmp변수에 할당
    for (let i=0; i<n; i++) { // i<n-2 해도 되는데 그냥 n까지 돌린다 그게 편하니까. 이게 이해가 안되면 강의 다시보기 대략 7:50부터.
        for (let j=i+1; j<n; j++) { // i<n-1하고 해도 되는데 그냥 n까지 돌린다 그게 편하니까. 0부터 아니고 i뒷편부터 돌아야지 조합이 된다. 예전에 일곱난장이 문제에서한거랑 비슷
            for (let k=j+1; k<n; k++) { // 매개변수에 이미 k가 있어서 다른거로 쓰려다가 그냥 k썼다. 어차피 scope 가 어차피 이 for문 안에서만 유효하므로. 영 찝찝하면 다른거로 바꿔줘도 된다. 음 l정도? ㅎㅎ
                tmp.add(card[i] + card[j] + card[k]); // 세트에 뽑은것들을 추가해줄꺼다
            }
        }
    } 
    // console.log(tmp); // 중복없이 72개가 들어감
    let a = Array.from(tmp).sort((a, b) => b-a)// 내림차순으로 sort해야하지. 그런데 set은 sort라는 함수를 지원하지 않으니까 배열로 만든 후에 sort. b-a로 해줘야 내림차순이다
    // console.log(a); // 중복없이 72개가 내림차순 배열의 형태로 잘 찍힘
    answer = a[k-1]; // a의 k-1번째. 여기서 k는 for문의 k가 아니가 solution()함수의 매개변수 k이다
    return answer;
}

console.log(solution(10, 3, input));







// 수강생 질문: 
// 1.선생님 여기서 i =0 , j=i+1, k=j+1 부터 시작이라고 하셨는데 이 부분이 잘 이해가 안갑니다.. 3장 뽑는건데 이유가 있을까요?
// 2. 여기서 다중 for문이 돌아가는 원리가 잘 이해가 되지 않습니다.. 아직 많이 부족하네요..

// 강사님 답변: 
// 1. i=0일 때 참이 되어 j for문으로 들어가 j가 i+1부터 반복하니까 j=0되는 것을 방지합니다. 즉 i와 j가 같은 값을 갖지 않게 하기 위함입니다 마찬가지로 k는 j+1부터 반복하니까 j와 k가 같을 일도 없겠죠, 당연히 i와 k가 같을 일도 없구요. 그리고 집합에서 서로다른 n개의 원소가 있을 때 원소가 3개인 부분집합을 뽑을 때 방식이 위 3중 for방식입니다.
// 제가 제공한 코드에서 console.log(i, j, k)를 아래 코드처럼 추가하여 출력해보세요. 느낌이 올겁니다.
function solution(n, k, card){
    let answer;
    let tmp = new Set();
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            for(let k=j+1; k<n; k++){
                console.log(i, j, k); //출력해보기
                tmp.add(card[i]+card[j]+card[k]);
            }
        }
    }
    let a=Array.from(tmp).sort((a, b)=>b-a);
    answer=a[k-1];
    return answer;
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

// 2. 처음 시작하면 다중for문이 어렵습니다. 위에 1번의 질문도 결국에는 다중for문의 이해가 부족해서입니다.
// n=10으로 전달되었고 3중 for문이 반복한다면, 
// i=0일 때 i<n이 참이되어 j for문으로 들어가 j=1일때 j<n이 참이 되어  k for문으로 들어가 k=2부터 참이 되어 9까지 반복하면  k for문은 안에서 console.log(i, j, k)는

// 0 1 2

// 0 1 3

// 0 1 4

// 0 1 5

// 0 1 6

// 0 1 7

// 0 1 8

// 0 1 9

// 와 같이 출력됩니다. 
// 또 다시 k가 끝나고 나면 j=2가 되고 j<n이 참이 되어 다시 k for문으로 이동해 k=3부터 9까지 반복합니다.

// 0 2 3

// 0 2 4

// 0 2 5

// ....

// 과 같은 식으로 계속 해보세요. 
// 1번 답변에서의 코드를 실행시켜 console.log(i, j, k) 출력결과를 보시고 연구해보면 좋을 것 같습니다.