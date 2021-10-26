// boj Q2884 : 알람시계
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);
console.log(input);

function solution(H, M) {
    M -= 45;
    if (M<0) { // 45분을 뺐을 때 (-)값이면
        H -= 1;
        M += 60; 
    };
    if (H<0) {
        H = 23;
    };
    console.log(H, M);
};
solution(input[0], input[1]);






// 인프런
// 백설공주와 일곱난쟁이
function solution(arr) {
    let sum = arr.reduce((a,b) => a+b, 0)
    for (let i=0; i<9; i++){
        for (let j=i+1; j<10; j++) {
            if ((sum - 100) === (arr[i]+arr[j])) {
                arr.splice(j, 1);
                arr.splice(i, 1);
            }
        }
    } 
    console.log(arr);
}
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
solution(arr);






// 재귀 함수 템플릿 
function solution () {
    let answer;
    function dfsR() {
        if () { // 종료 조건이 있으면 여기서 종료. 재귀함수로 가지도 않는다
            return
        };
        if (L===arr.length) {

        } else {
            
        }
    }
    dfsR();
    return answer;
}
let arr = [];
console.log(solution());









// 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.
function solution (n) {
    function dfsR(v){
        if (v===n+1) {
            return;
        } else {
            console.log(v); // 여기다 넣으면 1 2 3 
            dfsR(v+1);
            // console.log(v); 여기다 넣으면 문제가 원하는 출력값데로 3 2 1 
        };
    }
    dfsR(1);
}
console.log(solution(3));



// 위의 코드 리팩토링 : answer라는 빈문자열에도 담을 수 있다
function solution (n) {
    let answer ='';
    function dfsR(v){
        if (v===n+1) {
            return;
        } else {
            answer += v+' '; // 여기다 넣으면 1 2 3 
            dfsR(v+1);
            // answer += v+' '; 여기다 넣으면 3 2 1 
        };
    }
    dfsR(1);
    return answer;
}
console.log(solution(3));










// 재귀함수를 이용한 이진수 출력
function solution (n) {
    let answer ='';
    function dfsR(v) {
        if (v===0) {
            return;
        } else {
            // answer += v%2; 여기다가 하면 1 1 0 1
            dfsR(parseInt(v/2));
            answer += v%2;         // 여기다가 하면 1 0 1 1 . answer 빈배열 만들어서 담기 싫으면 이 라인에 바로 console.log(v%2);찍어도 된다
        };
    }
    dfsR(11);
    return answer;
}
console.log(solution(11));










// 부분 집합 구하기 : 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램 을 작성하세요 : 예. {1,2,3} => {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}, {공집합}. 2^3 = 총 8개
// 이것 역시 포함하느냐 안하느냐하는 이진트리 문제 (다른점은 : 1) 시간제한 무게제한 없고 (재귀 함수 종료 조건), 2)최대값 최소값을 조건이 걸린 문제가 아니다 (문제가 진정 원하는 것), 3) 다만 포함됐는지 체크를 걸어줘야한다 (2)번 대신에 이 조건이 문제가 원하는 것))
function solution(N) {
    let answer = [];
    let check = Array.from({length:N+1}, ()=>0); // 체크배열 만들어주고
    function dfsR(L) {
        if (L===N+1) { // 개념적으로는 (L===arr.length)이랑 같은거다. 다만 여기서는 시작노드가 1이었으므로 +1을 해줘야하는거지
            let tmp = '';
            for (let i=1; i<N+1; i++) { // 체크배열을 돌면서 
                if (check[i]===1) { // 해당 인덱스 자리에 체크가 걸려있으면
                    tmp += i + ' '; // 빈 문자열을 만들고 거기다가 일단 담아둔다. 바로 answer배열에 추가하지 않음. answer.push(i+' ');이렇게 바로 해보니까 구분없이 다 연결되어서 나온다. 이런식으로[ '1 ', '2 ', '3 ','1 ', '2 ', '1 ', '3 ', '1 ', '2 ','3 ', '2 ', '3 ']. 그리고 // 쌤이 i가 원소래. 왜 원소임? index아냐? 아.. 만약 check배열 2번 인덱스자리에 체크(1)가 걸려있으면, i는 원소랑 같은 숫자이다. 그림을 봐 . 사실 엄밀히 따지면 i는 그저 index일뿐이다. 그런데 우연히 N이랑 겹친다(1,2,3).그래서 그냥 편하려고 i를 원소처럼 부려먹는(?)거다 ㅋㅋ
                    console.log(tmp);
                }
            }
            if (tmp.length > 0) { // 공집합은 문제에서 출력값에 없으므로 이런식으로해서 제거
                answer.push(tmp.trim()); // 한번 더 배열로 예쁘게 가공하는 것 뿐이다. 그리고 뒤에 trim()을 붙여주면 빈공간이 없어져서 이쁘게 다듬어진다
            }
        } else {
            check[L]=1;
            dfsR(L+1);
            check[L]=0;
            dfsR(L+1);
        };
    }
    dfsR(1);
    return answer;
}
console.log(solution(3)); 








// 합이 같은 부분집합 구하기 (아마존 인터뷰)
// 예. {1, 3, 5, 6, 7, 10} => {1, 3, 5, 7} = {6, 10}
// 이 문제도 : 1) 시간제한 무게제한이 없고 (재귀 함수 종료조건이 없으니까 내가 flag로 만들어줄 수도 있다!), 2) 최대값 최소값 구하는 조건이 걸린것도 아니고 (문제가 진정 원하는 것), 3) 체크 걸어주지 않아도 되고, 4)그치만 2)번 대신에 조건으로 합이 서로 같은 경우 YES를 출력하랬으므로, 재귀를 돌면서 숫자의 sum은 누적해줘야한다
function solution (arr) {
    let answer='NO';
    let total = arr.reduce((a,b) => a+b, 0);
    function dfsR(L, sum) {
        if (L===arr.length) {
            if (total-sum === sum) {
                answer ='YES';
            }
        } else {
            dfsR(L+1,sum+arr[L]);
            dfsR(L+1, sum);
        }
    }
    dfsR(0,0);
    return answer;
}
let arr =[1, 3, 5, 6, 7, 10];
console.log(solution(arr));








// 바둑이를 태우냐 마느냐
function solution (C, arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    function dfsR(L, sum) {
        if (C < sum) {
            return;
        };
        if (L===arr.length) {
            answer = Math.max(answer, sum);
        } else {
            dfsR(L+1, sum+arr[L]);
            dfsR(L+1, sum)
        };
    }
    dfsR(0,0);
    return answer;
}
let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));










// 문제를 푸느냐 마느냐
function solution (M, scoreArr, timeArr) {
    let answer = Number.MIN_SAFE_INTEGER;
    function dfsR(L, scoreSum, timeSum) {
        if (M < timeSum) {
            return;
        };
        if (L===scoreArr.length) {
            answer = Math.max(answer, scoreSum);
        } else {
            dfsR(L+1, scoreSum+scoreArr[L], timeSum+timeArr[L]);
            dfsR(L+1, scoreSum, timeSum);
        };
    }
    dfsR(0,0,0);
    return answer;
}
let scoreArr = [10, 25, 15, 6, 7];
let timeArr = [5, 12, 8, 3, 4];
console.log(solution(20, scoreArr, timeArr));







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







// 동전 교환
function solution (M, arr) { // M: 거슬러 줄 금액
    let answer = Number.MAX_SAFE_INTEGER;
    function dfsR(L, sum) {
        if (sum > M) {  // sum이 m금액을 넘어가버리면 재귀 함수 자체를 바로 종료. 더 돌 필요 없다
            return;
        };
        if (sum===M) {  // sum이 m금액을 만나면 탐색을 종료. 왼쪽 아래로 쭉 뻗어나가다가 종료
            answer = Math.min(answer, L); // 여기서 L이 나타내는게 뭐지? sum이 거슬러줘야 할 금액인 m에 도달했을 때 , answer에 담긴 Max_SAFE_INTEGER랑 L(가지: 여기서는 1불, 2불, 5불) 들이랑 비교해서 가장 작은값은 반환
            
        } else {
            for (let i=0; i<arr.length; i++) {
                dfsR(L+1, sum+arr[i]); // 어랏. 'sum+arr[L]' 로 안해주지 왜? 오... 그림보면 available한 가지들에 아예 1불, 2불, 5불하고 원소를 할당해줬다. 다른 문제들은 가지가 두 개여서 그 원소를 포함하냐 안하냐, 바둑이를 태우냐 안태우냐, 문제를 푸냐 마냐의 o,x 문제였다면 이거는 가지가 세 개 이상이다. 각 가지에 arr의 원소들을 하나씩 부여했다. 그 가지를 선택하면 sum에 그 가지를 추가해줘야함 
            }
        };
    }
    dfsR(0,0);
    return answer;
}
let arr = [1,2,5];
console.log(solution(15 ,arr));







// 순열 : 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.
// 순열은 지정석(=최종좌석)이 필요하므로 tmp배열이 필요하고, 순열은 중복을 허락하지 않으므로 체크배열이 필요하다
function solution (m, arr) {
    let answer = [];
    let check = Array.from({length:arr.length}, ()=>0);
    let tmp = Array.from({length:m}, ()=>0);
    function dfsR(L){
        if (L===m) { // M번 뽑으면 탐색을 멈춘다. 여기선 두 번 뽑으면 멈추겠지
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












// 조합 구하기 : 1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 M개를 뽑는 방법의 수를 출력하는 프로그램을 작성하세요.
// 문제 이해를 잘해야된다. 예) 예를들어 자연수 1~3까지가 주어졌으면 (3, 6, 9) => (1,2), (1,3), (2,3) 이 나오는 문제임
// 이 문제는 :   [ [3,6], [3,9], [6,9] ]일꺼 같지?? 아니야 [ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]이거야... 헐 . 왜냐하면 line 245가 핵심. i자체가 원소이다. index번호가 아니라. 결정적으로 line 246에서 tmp[L]에다가 원소 i를 바로 넣어버리니까 당연히 i에는 1,2,3,4 네가지 밖에 못들어가겠지. 그러므로 1~4사이의 조합들만 출력값으로 나오는거다! 유레카!!
// 중복 순열 :   [ [ 3, 3 ], [ 3, 6 ], [ 3, 9 ], [ 6, 3 ], [ 6, 6 ], [ 6, 9 ], [ 9, 3 ], [ 9, 6 ], [ 9, 9 ] ]
// 순열     :   [ [ 3, 6 ], [ 3, 9 ], [ 6, 3 ], [ 6, 9 ], [ 9, 3 ], [ 9, 6 ] ]


function solution (N, m) {
    let answer = [];
    let tmp = Array.from({length:m}, ()=>0);
    function dfsR(L, s) { // s는 왜 필요하지...? 아무튼 조합(몇가지인지)을 구하는 문제는 s가 필요
        if (L===m) {
            answer.push(tmp.slice());
        } else {
            for (let i=s; i<N+1; i++) { // 여기서 i는 index번호가 아니다. i자체가 원소다. 그것보단 s여기 왜 필요한지 모르겠어
                tmp[L]=i; 
                dfsR(L+1, 1+i); 
            }
        }
    }
    dfsR(0,1); // 1부터 시작. s는 for문의 start number. 위에서 말했다시피 i자체가 index번호가 아니라 원소다. 원소이므로 당연히 자연수 1부터 시작하지! 아무튼 dfsR(0,0)이라고 실수로 했더니 답이 이래나왔다 [ [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]. 저걸 dfsR(0,1)로 설정하는게 큰 의미가 있네.. 근데 잘 이해는 안된다 s를 왜 저기다 넣는지
    return answer;
}
console.log(solution(4, 2)); // [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]











// 수들의 조합 : N개의 정수가 주어지면 그 숫자들 중 K개를 뽑는 조합의 합이 임의의 정수 M의 배수인 개수 는 몇 개가 있는지 출력하는 프로그램을 작성하세요.
// 예를 들면 5개의 숫자 2 4 5 8 12가 주어지고, 3개를 뽑은 조합의 합이 6의 배수인 조합을 찾으면 4+8+12 2+4+12로 2가지가 있습니다.
function solution(N, K , arr, m) { // 숫자 5개 중, 3개 뽑기, arr, 6의 배수
    let answer = 0;
    function dfsR(L, s, sum) { // s는 왜 필요하지...? 아무튼 조합(몇가지인지)을 구하는 문제는 s가 필요. L= Level, s = available한 가지들의 starting number(for문을 돌 때 0부터 셀지 1부터 셀지 s에다가 지정하란 소리. dfsR(0,0,0)이니까 우리는 0부터 셀꺼다) , sum = 3개를 뽑는 그 원소들의 합 (합을 구해야 나중에 6으로 나눠서 6의 배수인지 확인할 수 있다)
        if (L===K) { // k번 뽑아야 깊이 들어가는 탐색을 멈춘다
            if (sum % m === 0) { // sum이 6의 배수인지 보는거다
                answer++;
            }
        } else {
            for (let i=s; i<N; i++) { //  dfsR(0,0,0). 0번부터 시작했으므로 i<N. 여기서 i는 index가 아니고 원소 그 자체인듯
                dfsR(L+1, i+1, sum+arr[i]); // i뒷편부터 시작된다고 했어(다음 Level로 뻗으면 i 뒷숫자부터 available하다. 0,1,2,3,4가 있으면 L=1에서 0을 선택했다고 해봐, 그럼 L+1 에서는 0은 제외하고 1,2,3,4만 available한거다 )
            }                                // sum에는 arr[i]를 누적. 뽑은 숫자를 sum에 누적해주는거야
        }
    }
    dfsR(0, 0, 0); // 0부터 시작
    return answer;
}
let arr = [2, 4, 5, 8, 12]
console.log(solution(5, 3, arr, 6)); // 숫자 5개 중, 3개 뽑기, arr, 6의 배수

