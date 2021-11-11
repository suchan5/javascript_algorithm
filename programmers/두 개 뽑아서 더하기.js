let input = [5,0,2,7];

function solution(numbers) {
    let answer = [];
    for (let i=0; i<numbers.length; i++) {
        for (let j=i+1; j<numbers.length; j++) {
            let sum = numbers[i] + numbers[j];
            // console.log(`${numbers[i]} + ${numbers[j]} = ${sum}`);
            answer.push(sum);
        }
    }
    answer = answer.filter((v, i) => answer.indexOf(v) === i);
    answer = answer.sort((a, b) => a-b); // 숫자는 그냥 sort();하면 오름차순으로 정렬이 잘안된다 [12, 2, 5, 7, 9]이런식임. 반드시 sort()안에 함수를 전달
    return answer;
}
console.log(solution(input));