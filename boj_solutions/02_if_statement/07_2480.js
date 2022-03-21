// for (let i=0; i<5; i++) {
//     if (i %2 === 0) continue;
//     for (let j=0; j<5; j++) {
//         if (j %2 === 0) continue;
//         for (let k=0; k<5; k++) {
//             if (k %2 === 0) continue;
//             console.log(i, j, k);
//         }
//     }
// }
// tip? 그냥 다 찍히게 적고 pass할 것들만 조건문으로 적어준다



// const letter = ['가', '나', '다', '라', '마'];
// letter.splice(1,0,'방탄'); // 하나도 안 지우고 싶으면 0을 넣는다
// console.log(letter);


function solution (a, b, c) {
    let biggest;
    if (a > b) {
        biggest = a;
    } else if (b > a) {
        biggest = b;
    } else {
        biggest = c;
    };

    if (a===b || a===c || b===c) {
        console.log(10000 + (a * 1000));
    } else if (a===b) {
        console.log(1000 + 1000*a);
    } else if (a===c) {
        console.log(1000 + 1000*b);
    } else if (b===c) {
        console.log(1000 + 1000 *c);
    } else {
        console.log(biggest * 100);
    };
}
solution(6, 2, 5);


