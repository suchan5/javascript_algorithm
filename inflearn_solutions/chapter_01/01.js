// 최소값 구하기

// 자료형 숫자를 사용 : if문을 사용해서 비교
function solution (A, B, C) {
    let min;
    if (A < B) {
        min = A;
    } else if (C > min) {
        min = C;
    } else {
        min = B;
    };
    return min;
}
console.log(solution(6, 5, 11));





// 자료형 숫자를 사용 : Math.max()메서드를 사용해서 비교
function solution (A, B , C) {
    let min = Math.min(A, B, C);
    return min;
 }
 console.log(solution(6, 5, 11));





// 자료형 배열을 사용 : if문을 사용해서 비교 
function solution (arr) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i=0; i<arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
let arr = [6, 5, 11];
console.log(solution(arr));





// 자료형 배열을 사용 : Math.min()메서드를 사용해서 비교 
function solution (arr) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i=0; i<arr.length; i++) {
        min = Math.min(min, arr[i]); 
    }
    return min;
}
let arr = [6, 5, 11];
console.log(solution(arr));





// 자료형 배열을 사용 : for문으로 배열을 도는 것도 귀찮다 싶으면 배열을 숫자의 형태로 변환해서 넣어주면 된다
function solution (arr) {
   return Math.min(...arr); // Math.min()을 사용할 때는 괄호 안에 자료형 숫자만 들어갈 수 있다. array는 못들어간다. 그럴때 ...arr 앞에 쩜쩜쩜을 찍어주면 (전개연산자 : spread operator라고 한다) arr[0], arr[1], arr[2]이런식으로 숫자의 형태로 배열이 퍼진다(?) 오. 
}
let arr = [6, 5, 11];
console.log(solution(arr));


