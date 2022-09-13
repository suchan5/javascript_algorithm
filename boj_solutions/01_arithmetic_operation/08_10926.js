function solution(id) {
    let answer = id + '??!';
    return answer;
}

const input = 'joonas'
console.log(solution(input));

// (난 처음에 문자열을 입력받고 그 문자열이 joonas면 joonas??!를 출력하는 문제인줄알고 조건문을 만들었다..)
// 입력조건을 다시보니 내가 어떤 문자를 입력해도 이미 존재하는 아이디라고 가정하고 시작한다..
// 그에따라 출력은 내가 입력한 아이디에 ??!만 붙여서 출력한다!