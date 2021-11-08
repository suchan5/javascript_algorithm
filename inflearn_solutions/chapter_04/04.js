// 졸업 선물 : 최대한 많은 학생들에게 선물을 사줘야하니까 상품의 갯수가 중요하다 (비용이 작은 것들로 사야 최대갯수를 많이 살 수 있다)
// 이 문제에서 모든 경우의 수는 뭘까요? => 입력값 중에서 어떤 조합이 50% 할인을 받아야하는지 다 탐색을 해봐야한다 (일전에 멘토 멘티 문제에서 4x4 멘토 멘티가 되는 조합 모두를 탐색했듯이)


// 강사님 코드
function solution(m, product){
    let answer = 0;
    let n = product.length; // product의 길이 구하면 학생수가 되겠죠. 학생들이 각자 제출한 정보니까요
    product.sort((a, b)=>(a[0] + a[1]) - (b[0] + b[1])); // 할인받을 상품을 결정하고 나면 나머지는 예산에 맞춰 작은것부터 최대한 사야하니까 정렬한 것입니다. a[0]번이 상품가격, a[1]번이 배송비. b[0]번이 상품가격, b[1]번이 배송비
    // console.log(product); 
    for(let i=0; i<n; i++){ // for문으로 돌면서 0번째부터 할인가를 적용해보자
        let money = m - (product[i][0]/2 + product[i][1]); // money는 남은금액
        let cnt = 1;
        for(let j=0; j<n; j++){ // for문으로 product다 돕니다 얘도. 할인가 적용되고 남은돈 money로 살 수 있는 갯수를 다 사는거다
            if(j!==i && (product[j][0] + product[j][1]) > money) break; // j번째부터 시작해서 순서대로 살 수 있는거를 다 사는데 i는 할인된 상품이니까 사면 안된다. product[j][0]는 j번째 상품의 상품가격이다
            if(j!==i && (product[j][0] + product[j][1]) <= money) { // 남은 금액보다 작거나 같아야 살 수 있다
                money -= (product[j][0] + product[j][1]);
                cnt++; // 상품을 하나 더 샀다하고 쁠쁠해준다
            }
        }
        answer = Math.max(answer, cnt);
    }  
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));










// 청강생 코드
function solution(m, product) {
    let result = [];
  
    for (let i = 0; i < product.length; i++) {
      // 예산
      let money = m;
  
      // 카운트 수
      let count = 0;
  
      // 상품가격 50% 할인 하기
      product[i][0] = product[i][0] * 0.5;
  
      // 배송비와 상품가격의 합으로 새로운 배열 만들고
      // 오름차순으로 정렬
      let sortedArr = product
        .map((value) => value.reduce((acc, cur) => acc + cur))
        .sort((a, b) => a - b);
  
      // 예산으로 살 수 있는 개수 체크
      for (let j = 0; j < sortedArr.length; j++) {
        if (sortedArr[j] > money) {
          break;
        }
        money -= sortedArr[j];
        count++;
      }
  
      result.push(count);
  
      // 할인했던 상품가격 다시 원래 가격으로 바꿔주기
      product[i][0] = product[i][0] * 2;
    }
  
    return Math.max(...result);
  }
  
  let arr = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ];
  console.log(solution(28, arr));









//   // 다른 청강생 코드
  function solution(m, product) {
    let answer = 0;
    let n = product.length;
    product = product.sort((a, b) => (a[0] - b[0]));


    for (let i = 0; i < n; i++) {
        let dc = m - (parseInt(product[i][0] / 2) + product[i][1]);
        let cnt = 1, tmp = 0;
        for (let j = 0; j < n; j++) {
            if (j === i) continue;
            else {
                tmp += (product[j][0] + product[j][1]);
                cnt++
                if (tmp >= dc) break;
            }
        }
        answer = Math.max(answer, cnt);
    }
    return answer;
}



let arr = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));