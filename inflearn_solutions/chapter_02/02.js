// 보이는 학생 : 앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.

function solution (arr) {
    let count=1; // 맨 앞에 사람은 무조건 보이므로 count 1해주고 시작
    let max = arr[0]; // 맨 앞의 사람을 max로 두고 비교
    for (let i=1; i<arr.length+1; i++) {  // 배열의 1번째 index사람부터 시작
        if (max < arr[i]) {  
            max = arr[i];
            count++
        }
    }
    return count;
}
let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));

