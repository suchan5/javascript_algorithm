// 중복 순열 구하기
// 다중 for문일 경우 : 재귀함수를 쓴다
// 04.js랑 비슷한 문제 유형. 같이 봐.

function solution(n, m) { 
    let answer = [];
    let tmp= Array.from({length:m}, ()=>0); // 유사배열의 객체를 만든다. 첫번째 인자는 배열의 길이, 길이는 m길이만큼만 있으면 된다(길이가 m개 짜리인 배열을 만드는거다). 그리고 두번쨰 인자로 '()=>0'을 해서 초기화시켜준다(처음에는 다 undefined되어있으므로 초기화해줘야함)
    function dfsR(L) { //L이 몇 중 for문을 도느냐를 결정
        if (L===m) { // m번 뽑아야 level의 트리의 마지막 종착점까지 간거다. 
            answer.push(tmp.slice()); // 얕은 복사가 같은 주소값을 가르쳐서 야기되는 문제를, slice()를 해줌으로서 해결한다
        } else {
            for(let i=1; i<=n; i++) { // 왼쪽(1번 구슬) , 중간(2번 구슬), 오른쪽(3번 구슬) 세가닥이 있다. for문을 돌리는게 더 똑똑해보이지! ㅋㅋ
                tmp[L]=i; // tmp라는 임시 배열을 만들고 tmp[L]에 i(=왼쪽(1번 구슬), 중간(2번 구슬), 오른쪽(3번 구슬))을 순차적으로 넣는다. 
                dfsR(L+1);
            }
        }
    }
    dfsR(0); // 근데 왜 1번 노드부터 시작안하고 0번 노드부터 시작하지?
    return answer;
}
console.log(solution(3, 2)); // 1~3까지 적힌 구슬 세 개가 있고, 총 두 번을 뽑는다