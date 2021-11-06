// 자릿수의 합

let input ='128 460 603 40 521 137 123'.split(' ').map(item => +item);

// while문을 써서 쪼개들어가는 방법 (이것도 잘알아둬야한다)
function solution (str) { // str이 아니라 arr아녀? 아니면 위에 input에서 배열로 미리 바꿀 필요가 없는건가?
    let answer;
    let max = Number.MIN_SAFE_INTEGER;
    for (let s of str) {
        let sum = 0; 
        let tmp = s; // s를 하나하나  뜯어서 더해야하는데 그럴수없으니... 배열을 돌 수도 없고... 일단 tmp라는 임시 변수를 만들어서  s를 저장
        while (tmp) { // tmp===0이면 멈춘다
            sum += tmp%10 // 일의 자리인 8을 sum에 누적
            tmp = Math.floor(tmp/10); // 12. 이제 이 과정을 while문으로 tmp가 0이 될 때까지 반복
        }
        console.log(sum); // 11 10 9 4 8 11 6
        if (max < sum ) { // 128도 137도 합이 11이다. 그러므로 아래에다가 else if로 조건을 한 번 더 해줄꺼다. 안그러면 128이 정답 확정이니까
            max = sum;
            answer = s;
        } else if (max === sum) { // 
            if (s > answer) { // 137이 지금 현재 정답인 128보다 크면 그 큰걸로 바꿔주는거다 정답을
                answer = s;
            }
        }
    }
    return answer; // 137
}
console.log(solution(input));





// 이번엔 내장함수 사용해서 간결하게 해보자
function solution (str) {
    let answer;
    let max = Number.MIN_SAFE_INTEGER;
    for (let s of str) {
        let sum = s.toString().split('').reduce((a, b) => a+Number(b), 0); // toString해서 split하면 [ '1', '2', '8' ] [ '4', '6', '0' ] ... 요론식으로 뜬다 오. reduce함수로 더해줄꺼임. a에다가 누적하는거야, b는 원소 1,2,8을 도는거고 . 근데 지금 toString으로 바꿨기때문에 문자열이므로 Number를 사용해서 숫자로 바꿔주고 해야함 
        console.log(sum); // 11 10 9 4 8 11 6 
        if (max < sum ) { // 128도 137도 합이 11이다. 그러므로 아래에다가 else if로 조건을 한 번 더 해줄꺼다. 안그러면 128이 정답 확정이니까
            max = sum;
            answer = s;
        } else if (max === sum) { // 
            if (s > answer) { // 137이 지금 현재 정답인 128보다 크면 그 큰걸로 바꿔주는거다 정답을
                answer = s;
            }
        }
    }
    return answer;
}
console.log(solution(input));