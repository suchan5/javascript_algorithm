// 순열 구하기 (중복을 허락하지 않는다) : 숫자를 뽑는데 중복해서 뽑지 않는다

function solution (m, arr) {
    let answer = [];
    let ch=Array.from({length:arr.length}, () => 0);
    let tmp=Array.from({length:m}, () => 0);
    function dfsR(L) {
        if (L===m) { //  m번 뽑아야 level의 트리의 마지막 종착점까지 간거다. 
            answer.push(tmp.slice()); // slice()를 해서 깊은 복사를 해줘야한다
        } else {
            for (let i=0; i<arr.length; i++) { // 3번 구슬, 6번 구슬, 9번 구슬이라는 3가지 선택지를 돌리면서, 체크를 하는거다. 그리고 다음 레벨에서 또 3가지 선택지를 돌리면서 체크
                if (ch[i]===0) { // check가 걸린게 없이 0이면 i번째 원소를 사용할꺼다
                    ch[i]=1; // 그럼 사용하겠다. i번째 원소에 check를 거는거지
                    tmp[L] = arr[i]; // 사용한다고 했으니까, tmp의 L에다가 i번째 원소를 넣어주면 되는거지 (공책에 트리 그림 보면서 이해해)
                    dfsR(L+1); // 다음 원소로 넘어가면 되겠죠
                    ch[i]=0; // 기존에 체크했던 원소를 여기서 풀어주면 됩니다
                }
            }
        };
    }
    dfsR(0);
    return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr)); 