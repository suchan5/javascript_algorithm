// 배열간의 비교

function solution(blackPieces, input) {
    let answer=[];
    for (let i=0; i<input.length; i++) {
        let subtract = parseInt(blackPieces[i]) - parseInt(input[i]);
        answer.push(subtract);
    }
    return answer;
    
    
}
const blackPieces = [1,1,2,2,2,8];
const input = [2,1,2,1,2,1];
console.log(solution(blackPieces, input)); 




// map을 이용하면 더욱 간단히 풀 수 있다
// const blackPieces = [1,1,2,2,2,8];
// const input = [0,1,2,2,2,7];

// const result = blackPieces.map((element, idx) => element - input[idx]);
// console.log(result);
