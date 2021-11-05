// 문자열 압축 : 어렵다

let input ='KKHSSSSSSSE';

function solution (str) {
    let answer = '';
    let cnt = 1;
    str = str + ' '; // 이렇게 str문자열의 뒤에 빈공간을 하나 넣어준다. 그래야 for문을 돌면서 비교할 때, 마지막 글자가 비교할 것이 있다
    for (let i=0; i<str.length-1; i++) { // str.length-1 해줘야한다. 위에서 빈공간 하나 넣어줬으므로 이렇게 해야 알파벳까지만 순회한다
        if (str[i] === str[i+1]) { // i번째랑 그 뒤에꺼랑 같으면
            cnt++;
        } else {
            answer += str[i];
            if (cnt > 1) { // cnt가 1보다 클때만(i.e.그니까 같은 알파벳이 한 개 이상일때만)
                answer += String(cnt);
                cnt = 1; //  그리고 cnt는 1로 초기화한다
            }
        }
    }
    return answer;
}

console.log(solution(input));