


// // 백설공주와 일곱난쟁이
// function solution(arr) {
//     let sum = arr.reduce((a,b) => a+b, 0)
//     for (let i=0; i<9; i++){
//         for (let j=i+1; j<10; j++) {
//             if ((sum - 100) === (arr[i]+arr[j])) {
//                 arr.splice(j, 1);
//                 arr.splice(i, 1);
//             }
//         }
//     } 
//     console.log(arr);
    
    
// }
// let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
// solution(arr);










// // 바둑이를 태우냐 마느냐 
// // 1) 무게 제한 (재귀함수 종료 조건), 2) 최대 무게 구하기 (문제가 진정 원하는 것) => 둘 다 무게이므로 재귀로 배열을 탐색해 들어갈 때 무게sum을 누적해준다)
// function solution (C, arr) {
//     let answer = Number.MIN_SAFE_INTEGER;
//     function dfsR(L, sum) {
//         if (C < sum) {
//             return;
//         };
//         if (L===arr.length) {
//             answer = Math.max(answer, sum);
//         } else {
//             dfsR(L+1, sum+arr[L]);
//             dfsR(L+1, sum);
//         };
//     }

//     dfsR(0,0);
//     return answer;
// }

// let arr = [81, 58, 42, 33, 61];
// console.log(solution(259, arr));










// // 문제를 푸느냐 마느냐
// // 1) 시간 제한이 있고 (재귀함수 종료 조건), 2)최대 점수 구하기 (문제가 진정 원하는 것) => 시간이랑 점수 두가지이므로 재귀로 배열을 탐색할 들어갈 때, 시간sum과 점수sum을 누적해준다)
// function solution (m, scoreArr, timeArr) {
//     let answer = Number.MIN_SAFE_INTEGER;
//     function dfsR (L, scoreSum, timeSum) {
//         if (m < timeSum) {
//             return;
//         };
//         if (L===scoreArr.length) { // it can be either timeArr.lengh or scoreArr.length, since the length of the two arrays are same.
//             answer = Math.max(answer, scoreSum);
//         } else {
//             dfsR(L+1, scoreSum+scoreArr[L], timeSum+timeArr[L]);
//             dfsR(L+1, scoreSum, timeSum);
//         };

//     }
//     dfsR(0,0,0);
//     return answer;
// }
// let timeArr = [10, 25, 15, 6, 7];
// let scoreArr =[5, 12, 8, 3, 4];
// console.log(solution (20, timeArr, scoreArr));








// // 부분 집합 구하기 : 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램 을 작성하세요 : 예. {1,2,3} => {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}, {공집합}. 2^3 = 총 8개
// // 이것 역시 포함하느냐 안하느냐하는 이진트리 문제 (다른점은 : 1) 시간제한 무게제한 없고 (재귀 함수 종료 조건), 2)최대값 최소값을 조건이 걸린 문제가 아니다 (문제가 진정 원하는 것), 3) 다만 포함됐는지 체크를 걸어줘야한다 (2)번 대신에 이 조건이 문제가 원하는 것))
// function solution(N) {
//     let answer = [];
//     let check = Array.from({length:N+1}, ()=>0); // 체크배열 만들어주고
//     function dfsR(L) {
//         if (L===N+1) { // 개념적으로는 (L===arr.length)이랑 같은거다. 다만 여기서는 시작노드가 1이었으므로 +1을 해줘야하는거지
//             let emptyStr = '';
//             for (let i=1; i<N+1; i++) { // 체크배열을 돌면서 
//                 if (check[i]===1) { // 해당 인덱스 자리에 체크가 걸려있으면
//                     emptyStr += i + ' '; // 빈 문자열을 만들고 거기다가 일단 담아둔다. 바로 answer배열에 추가하지 않음. answer.push(i+' ');이렇게 바로 해보니까 구분없이 다 연결되어서 나온다. 이런식으로[ '1 ', '2 ', '3 ','1 ', '2 ', '1 ', '3 ', '1 ', '2 ','3 ', '2 ', '3 ']
//                     console.log(emptyStr);
                    
//                 }
//             }
//             if (emptyStr.length > 0) { // 공집합은 문제에서 출력값에 없으므로 이런식으로해서 제거
//                 answer.push(emptyStr.trim()); // 한번 더 배열로 예쁘게 가공하는 것 뿐이다. 그리고 뒤에 trim()을 붙여주면 빈공간이 없어져서 이쁘게 다듬어진다
//             }
            
//         } else {
//             check[L]=1;
//             dfsR(L+1);
//             check[L]=0;
//             dfsR(L+1);
//         };
//     }
//     dfsR(1);
//     return answer;

// }
// console.log(solution(3)); 








// // 합이 같은 부분집합 구하기 (아마존 인터뷰)
// // 예. {1, 3, 5, 6, 7, 10} => {1, 3, 5, 7} = {6, 10}
// // 이 문제도 : 1) 시간제한 무게제한이 없고 (재귀 함수 종료조건이 없으니까 내가 flag로 만들어줄 수도 있다!), 2) 최대값 최소값 구하는 조건이 걸린것도 아니고 (문제가 진정 원하는 것), 3) 체크 걸어주지 않아도 되고, 4)그치만 2)번 대신에 조건으로 합이 서로 같은 경우 YES를 출력하랬으므로, 재귀를 돌면서 숫자의 sum은 누적해줘야한다
// function solution (arr) {
//     let answer='NO';
//     let total = arr.reduce((a,b) => a+b, 0);
//     function dfsR(L, sum) {
//         if (L===arr.length) {
//             if (total-sum === sum) {
//                 answer ='YES';
//             }
//         } else {
//             dfsR(L+1,sum+arr[L]);
//             dfsR(L+1, sum);
//         }
//     }
//     dfsR(0,0);
//     return answer;
// }
// let arr =[1, 3, 5, 6, 7, 10];
// console.log(solution(arr));






// 중복 순열  : 1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열 하는 방법을 모두 출력합니다.
// 순열 관련은 최종좌석, 지정석인 tmp배열이 필요하다 : 두 번 뽑으면 두 번 뽑힌게 담길 최종좌석(?)
// 중복되어도 되므로 체크배열은 필요없다
function solution(arr, m) {
    let answer = [];
    let tmp = Array.from({length:m}, ()=>0);
    function dfsR (L) {
        if (L===m) { // m번 다 뽑아야 탐색을 멈춘다
            answer.push(tmp.slice()); // 문제가 진정 원하는 것. slice()를 해서 얉은 복사 문제를 해결한다
        } else {
            for (let i=0; i<arr.length; i++) { // 더이상 왼쪽 오른쪽 두가닥으로 뻗어나가지 않는다. 3가닥 이상이면 for문을 돌면서 3가닥 이상을 뻗어나간다
                tmp[L]=arr[i]; // tmp배열(최종좌석)의 L번째 인덱스에 담길 녀석은 arr의 0번 인덱스면 1번구슬, arr의 1번 인덱스이면 2번구슬, arr의 2번 인덱스이면 3번 구슬
                dfsR(L+1);
            }
        };
    }
    dfsR(0);
    return answer;
}
let arr = [3, 6, 9]; // [ [ 3, 3 ], [ 3, 6 ], [ 3, 9 ], [ 6, 3 ], [ 6, 6 ], [ 6, 9 ], [ 9, 3 ], [ 9, 6 ], [ 9, 9 ] ]
console.log(solution(arr, 2)); //3번까지 적은 구슬이 있고, m번 뽑는다 

// [ 3, 3 ], [ 6, 6 ], [ 9, 9 ] 들도 들어있네.. 아하 이런게 들어있으면 중복 순열이라고 하는구나
// 정리하자면 구슬 3개가 있는데, 2번을 뽑아. 그래서 나오는 조합을 모두 나열하라는 거구나(모든 부분 집합의 경우의 수)










// 순열 : 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.
// 순열은 지정석(=최종좌석)이 필요하므로 tmp배열이 필요하고, 순열은 중복을 허락하지 않으므로 체크배열이 필요하다
function solution (m, arr) {
    let answer = [];
    let check = Array.from({length:arr.length}, ()=>0);
    let tmp = Array.from({length:m}, ()=>0);
    function dfsR(L){
        if (L===m) {
            answer.push(tmp.slice());
        } else {
            for (let i=0; i<arr.length; i++) {
                if (check[i]===0) { // 처음 초기값들은 다 0이다. 체크배열의 i번째 인덱스자리가 0이라면 available하다는 뜻
                    check[i]=1; // 체크를 건다
                    tmp[L] = arr[i]; // tmp[L]에 3넣어보고, 6넣어보고, 9넣어보고 하겠다는 소리
                    dfsR(L+1); // 윗줄에서 한바퀴 돌아보고 다음 L으로 뻗어나간거다
                    check[i]=0; // 기존에 체크 걸었던 원소를 여기서 풀어준다 
                }
            }
        }
    }
    dfsR(0);
    return answer;
}
let arr = [3, 6, 9]; // [ [ 3, 6 ], [ 3, 9 ], [ 6, 3 ], [ 6, 9 ], [ 9, 3 ], [ 9, 6 ] ]
console.log(solution(2, arr));

// [ 3, 3 ], [ 6, 6 ], [ 9, 9 ] 이 빠져있네.. 아하 이런게 들어있으면 중복 순열이라고 하는구나
// 정리하자면 구슬 3개가 있는데, 2번을 뽑아. 그래서 나오는 조합을 모두 나열하라는 거구나(모든 부분 집합의 경우의 수)... 근데 이제 중복을 제외한..  [ 3, 3 ], [ 6, 6 ], [ 9, 9 ]이런 것들







