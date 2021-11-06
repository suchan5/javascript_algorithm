// 뒤집은 소수

let input = '32 55 62 20 250 370 200 30 100'.split(' ').map(item => +item);
console.log(input);

function isPrime (num) {
    if (num===1) {
        return false; // 1은 소수가 아니다
    }

    for (let i=2; i<parseInt(Math.sqrt(num)); i++) { // 16이면 4까지 도는거임. 아니면 'i < (num/>2)'도 가능
        if (num%i === 0) { // i로 나누어떨어진다는 소리는 소수가 아니라는 소리다
            return false;
        }
    }

    return true; // for문까지 다 돌고 return false안당했으면 여기서 return true해주면 된다
}

function solution(arr) { // 위에 input받으면서 배열로 바꿔줬다. 그리고 숫자로 바꿔줬다
    let answer = [];
    for (let x of arr) {
        let result = 0;
        while(x) { // x === 0 이되면 끝난다
            let t = x%10; // 어떤 수를 10으로 나누었들 때 나머지는 일의 자리 숫자이다
            result = result * 10 + t; 
            x = parseInt(x/10); // 이렇게 몫이 일의 자리 숫자를 제외한 나머지 앞자리 숫자들
        }
        if (isPrime(result)) {
            answer.push(result);
        }
    }
    return answer;
}
console.log(solution(input)); // [ 23, 2, 73, 2, 3 ]









// 이번엔 내장함수를 사용하여
function solution(arr) { 
    let answer = [];
    for (let x of arr) {
        let result = Number(x.toString().split('').reverse().join('')); // join을 하니 다시 string이 되었다. 앞에 Number()로 전체를 감싸줘서 넘버화 시킴
        // console.log(result);
        if (isPrime(result)) {
            answer.push(result);
        }
    }
    return answer;
}
console.log(solution(input)); // [ 23, 2, 73, 2, 3 ]