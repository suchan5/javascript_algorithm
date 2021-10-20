// 문제25 : 원의 넓이를 구하세요
// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

// 원의 넓이 = 3.14 * radius * radius


function area (n) {
    const area = 3.14 * n * n;
    return area;
}
console.log(area(5));

