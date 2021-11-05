// 가장 짧은 문자거리
// 이 문제는 그림으로 그려서 이해해야 코드로 옮길 수 있다


let input ='teachermode';
let t = 'e';

function solution (str, t) {
    let answer = [];
    let p = 1000; // 문제에서 '문자열의 길이는 100을 넘지 않는다'라고 했으므로, 문자열보다 큰 수를 초기화해준다
    for(let s of str) {
        if (s === t) {
            p = 0;
            answer.push(p);
        } else {
            p++;
            answer.push(p);
        }
    }

    p = 1000;
    for (let i=str.length-1; i>=0; i--) { // 이번엔 배열을 역방향으로 돌면서.
        if (str[i] === t) {
            p = 0; // 어차피 기존에 0이니까 push안해도 된다
        } else {
            p++;
            answer[i] = Math.min(answer[i], p); //기존 answer배열에 들어있는 수랑 p랑 비교해서 더 짧은거리를 넣어준다
            
        }
    }
    return answer;
}
console.log(solution(input, t));
// for문을 두 번을 하지. BigO = O(2N) = O(N)이다. nested for문 아닌 이상 몇 벌을 해도 O(N)이랑 같다