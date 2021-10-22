// 문제35 : Factory 함수 사용하기
// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 
// <pass>에 코드를 작성하여 two함수를 완성하세요.


// 어떻게 하는지 모르겠어서 답지에 나온 코드 복붙함. 함수 안에 함수가 있는 코드 자체가 이해가 안되서 visualizer돌려보니 이해가 된다
function one(n){
    function two(value){
        //pass
        const sq = Math.pow(value, n);
        return sq;
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

