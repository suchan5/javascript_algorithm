// A를 #으로
// 예) BANANA => B#N#N#

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();


function solution(word) {
        let answer = word.replace(/A/g,'#') 
        return answer;
    
};
console.log(solution(input));
//replace 함수에서와 같이 사용하되, 따옴표를 슬래시로 대체하고, 뒤에 gi 를 붙이면 replaceAll() 과 같은 기능을 한다.
// g : 발생할 모든 패턴에 대한 전역 검색
// i : 대/소문자 구분 안함
// m : 여러 줄 검색






// replace사용하지 않고 하고 싶다면
function solution2(word){
    let answer=''; // 빈 문자열을 만들고
    for(let w of word){ // for문을 돌면서
        if(w === 'A') {  // A일 때는
            answer += '#'; // answer라고 만들어뒀던 빈 문자열에 '#'을 더하고
        }
        else { // 그게 아니라면
            answer += w; // w를 answer에 추가
        }
    }
    return answer;
}

console.log(solution2(input));