// 최대 점수 구하기
// 이진트리 문제다 : 문제를 풀것인지 말것인지, 모든 경우의 수를 찾는다

function solution(m, scoreArr, timeArr) {
    let answer = Number.MIN_SAFE_INTEGER; // 문제가 최대값을 구하는 것이므로 일단 제일 작은 수를 할당해준다
    function dfsR(L, sum, time) { // 배열의 index(L), 점수의 합(time), 그리고 걸린 시간의 합(time)도 인자로 넘겨줘야한다. 앞의 바둑이 문제가 무게 제한이었다면, 이 문제는 시간 제한
        if (time > m) { // 걸린 시간의 합(time)이 제한시간(m)을 넘기면 재귀 함수를 바로 종료. 재귀 함수로 가지도 않는다
            return;
        }
        if (L===scoreArr.length) { // scoreArr나 timeArr 둘 중 아무거나 써도 상관 없다. 이진트리의 종착점. 제일 끝까지(배열의 마지막까지) 깊게 들어가 탐색했을 때 탐색이 끝난다.
                answer = Math.max(answer, sum); // 문제가 원하는 최대값을 구하자
        } else {
            dfsR(L+1, sum+scoreArr[L], time+timeArr[L]); // 푼다 
            dfsR(L+1, sum, time); // 풀지 않는다
        }
    }
    dfsR(0,0,0); 
    return answer;
}
let scoreArr = [10, 25, 15, 6, 7];
let timeArr = [5, 12, 8, 3, 4];
console.log(solution(20, scoreArr,timeArr ));



