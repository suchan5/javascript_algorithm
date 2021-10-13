// 일곱 난장이
// 접근법: 9명의 키를 더하면 140이다. 40만큼 초과되고 있다 => 무작위로 두 명씩 뽑아서 40이 나오는 조합을 찾은 다음 배열에서 제거한다.
// 더 구체적인 방법 : 배열을 돌면서 무작위로 두 명씩 뽑아서 40이 나오는 조합을 찾은 다음 => 총합애서 그 둘의 합을 빼서 100이 나오면 배열에서 제거한다.


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);
console.log(input);

function solution(arr) {
    let answer = arr; // 얉은 복사. 원본인 arr을 바꾸면 answer배열도 똑같이 바뀌는것처럼 보인다. 똑같은 arr라는 배열을 가리키고 있다
    let sum = arr.reduce((a , b) => a + b, 0); // 먼저 배열의 합을 reduce를 통해서 구하라(하나하나 입렵예제를 더해보면 140..근데 늘 140일수는 없으니 reduce를 사용해서 배열의 총합을 구하는 방법을 공식화한다). reduce는 배열을 돌면서 총합을 누적해주는 함수. a가 누적(accumulated)이 되는 컨테이너 역할을 하는 변수, b가 for문을 순회하며 각 값이 담기는 변수. 0은 a(누적값)를 0으로 초기화 히겠다는 뜻인데, 초기 누적값을 0으로 세팅하고 싶을때는 굳이 명시하고 싶지 않으면 안써줘도 되고, 초기 누적값을 5로 한다던지 하면 써줘야한다.
    for (let i=0; i<8; i++) { // 배열의 0번부터 8명의 난쟁이를 for문으로 돌고
        for (let j=i+1; j<9; j++) { // 0번 옆에 있는 난쟁이부터 남은 8명 남쟁이들을 또 for문으로 돌면서
            if ((sum - (arr[i] + arr[j])) === 100) { // 배열의 총합(140)에서 이 두 난쟁이의 합을 뺐을 때 완벽하게 100이면, 이 두 난쟁이가 범인
                arr.splice(j, 1); // 배열의 처음이나 끝이 아니라 중간을 만질 때는 splice를 쓴다. index의 j자리부터 1개를 제거
                arr.splice(i, 1); // 마찬가지로 index의 i자리부터 1개를 제거 (배열의 더 뒷자리에 있는 index j를 먼저 제거해야함. 제거하고 나면 제거한 자리를 뒤에 있는 애들이 당겨져 와서 채우는데, 뒷자리에 있는 애들을 먼저 제거하고 나서 앞자리를 제거해야, 영향이 없다)
            }
        }
    }
    console.log(answer); // 얕은 복사이기 때문에 answer나 arr아무거나 써도 둘 다 원본 배열인 arr를 가리킨다. 

};
solution(input);


