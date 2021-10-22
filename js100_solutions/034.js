// 문제34 : sort 구현하기
// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 
// 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자. (키는 공백으로 구분하여 입력됩니다.)

// 입출력
// 입력 : 176 156 155 165 166 169
// 출력 : NO

// 입력 : 155 156 165 166 169 176
// 출력 : YES



// 이렇게 간단하게 될 줄 알았지 뭐야 ㅋㅋ 실패한 코드다! 배열은 '얕은 복사'가 된다. 
// function solution (unsorted) {
//     let answer = 'NO';
//     let sorted = unsorted.sort();
//     // console.log(sorted); // [ 155, 156, 165, 166, 169, 176 ] 이렇게 원본 배열도 같이 sort가 되어버리기 때문에 두 배열을 비교하는게 불가능하다.
//     // console.log(unsorted);  // [ 155, 156, 165, 166, 169, 176 ]
//     if (sorted === unsorted) {
//         answer = 'YES';
//     }
//     return answer;

// }
// let unsorted = [176, 156, 155, 165, 166, 169];
// console.log(solution(unsorted));






// 이렇게 하는게 적절한 코드
function solution (unsorted) {
    let answer = 'NO';

    unsorted = unsorted.join(' '); 
    console.log(unsorted); // 176 156 155 165 166 169

    let sorted = '';
    sorted = unsorted.split(' ').sort((a, b) => a-b).join(' ');
    console.log(sorted);  // 155 156 165 166 169 176

    if (unsorted === sorted) {  // 이제 두 문자열끼리 비교하면 된다
        answer = 'YES';
    }
    return answer;
}
let unsorted = [176, 156, 155, 165, 166, 169];
console.log(solution(unsorted));





// 정리: 배열을 비교하는 방법은 두 가지가 있다
// 1. 배열을 돌면서 하나하나 비교
// 2. 배열을 정렬해서, 정렬하지 않은 배열과 비교 (배열은 정렬했을 때 원본 배열에 대한 얕은 복사가 이루어지므로 먼저 문자열로 바꾼 후에 정렬
// 3. JSON.stringify()를 이용하기 
// (속도 면에서 JSON.stringify()가 더 느리므로 1번이나 2번으로 하는게 좋다)


