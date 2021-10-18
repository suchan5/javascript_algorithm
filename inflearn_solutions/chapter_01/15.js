// 가운데 문자 출력 : 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
// 접근법: 홀수일 경우 => 예) 5/2 = 2.5 => 2로 나누었을 때, 몫인 index2가 가운데 값
//       짝수일 경우 => 예) 8/2 = 4 => 2로 나누었을 때, 몫인 index4랑 그 앞의 index3이 가운데 값
// substring()을 사용 : substring() is to extract characters from a string


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();
console.log(input); //study

function solution(str) {
    let answer;
    let mid = Math.floor(str.length/2); // 몫이 2
    if (str.lengh%2 !== 0) { // 홀수일 경우. ('===1'로 했더니 'study'로 테스트 해봤을 때 정상 작동 안하더라. 그래서 '!==0'으로 바꿔줬더니 더 정확함)

        // substring()을 사용한다. answer = str[quotient];로 했더니 안됨ㅠㅠ str[2]를 표현하고 싶었는데, 인덱스 접근할 때는 '[]'안에 오로지 찐숫자만 들어가야한다. 저렇게 변수 안에 담긴 숫자는 안되더라ㅜ
        answer = str.substring(mid, mid+1); // str.substring(2,3);이거랑 같다.
        
    } else { // 짝수일 경우
        answer = str.substring(mid-1, mid+1); // str.substring(3,5);이거랑 같다.
    }
    return answer;
};
console.log(solution(input));