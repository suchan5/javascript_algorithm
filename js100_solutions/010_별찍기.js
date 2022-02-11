// // 문제10 : 별 찍기
// // 입력 : 5





// // *****
// // ****
// // ***
// // **
// // *
 
// let n=5;
// for (let i=0; i<n; i++) {
//     console.log('*'.repeat(5-i));
// }





// // *
// // **
// // ***
// // ****
// // *****

// let n = 5;
// for (let i=0; i<n; i++) {
//     console.log('*'.repeat(i+1));
// }






// *
// **
// ****
// ********
// ****************

 // 별의 갯수
 // 1 2 4 8 16

//  for (let i=1; i<=16; i*=2) {
//     console.log('*'.repeat(i));
//  }





// // *********
// // *******
// // *****
// // ***
// // *

// let n=5;
// for(let i=0; i<n; i++) {
//     console.log('*'.repeat(9-i-i));
// }

// let n=5;
// for (let i=n; i>0; i--) {
//     console.log('*'.repeat(i*2-1));  // '*'.repeat(i+i-1) 이렇게도 할 수 있다
// }

// let n=5;
// for (let i=9; i>0; i-=2) {
//     console.log('*'.repeat(i));
// }





// // *
// // ***
// // *****
// // *******
// // *********

// let n=5;
// for (let i=0; i<n; i++) {
//     console.log('*'.repeat(i*2+1));
// }

// let n=5;
// for(let i=1; i<10; i+=2)  {   
//     console.log('*'.repeat(i));
// }




// // *****
// //  ****
// //   ***
// //    **
// //     *


// 별 개수
// 5 4 3 2 1

// 공백 개수
// 0 1 2 3 4

// for (let i=5; i>=1; i--) {
//     console.log(' '.repeat(Math.abs(i-5)) + '*'.repeat(i)); // 혹은 .repeat(Math.abs(5-i)) 
// } 

// 어렵게 할게 아니라 이렇게 하면 간다히 공백을 구하는 규칙을 찾을 수 있다
i + 공백(x) = 둘이 합치면 5   => 그러므로 x = 5-i  
5   0 =      5
4   1 =      5
3   2 =      5
2   3 =      5
1   4 =      5

for (let i=5; i>0; i--) {
    console.log(' '.repeat(5-i) + '*'.repeat(i));
}






// let n=5;
// for (i=0; i<n; i++) {
//     console.log(' '.repeat(i) +'*'.repeat(5-i));
// }






// //     *
// //    **
// //   ***
// //  ****
// // *****

// let n=5;
// for (let i=0; i<n; i++) {
//     console.log(' '.repeat(4-i) + '*'.repeat(i+1));  // (' '.repeat(Math.abs(i-4)) 이렇게도 된다
// }





// // ********* 
// //   ******* 
// //     ***** 
// //       ***
// //         *

// let n=5;
// for (let i=0; i<n; i++) {
//     console.log(' '.repeat(i*2) + '*'.repeat(9-i-i));
// }





// //         *
// //       ***
// //     *****
// //   *******
// // *********

// let n=5;
// for (let i=0; i<5; i++) {
//     console.log(' '.repeat(8-i-i) + '*'.repeat(i*2+1));
// }

// let n=5;
// for (let i=1; i<=9; i+=2) {
//     console.log(' '.repeat(9-i) + '*'.repeat(i));
// }






// //     *
// //    ***
// //   *****
// //  *******
// // *********

// let tree = '';
// let n = 5;
// for(let i=1; i<=n; i++){
//   let star = '';
//   for(let j=1; j<=n-i; j++){ // 공백이 4개니까 n-1로 해준거다
//     star += ' ';
//   }
//   for(let k=1; k<=2*i-1; k++){
//     star += '*';
//   }
//   tree += star + '\n';
// }
// console.log(tree);



// let n=5;
// for (let i=0; i<n; i++) {
//     console.log(' '.repeat(4-i) +  '*'.repeat(i*2+1));
// }







// // *********
// //  *******
// //   *****
// //    ***
// //     *

// 별 개수
// 9 7 5 3 1

// 공백 개수
// 0 1 2 3 4

for (let i=9; i>=1; i-=2) {
    console.log(' '.repeat((9-i)/2) + '*'.repeat(i)); 
}
// 공백 부분이 헷갈린다 : 
// 지금은 9-i라서    0 2 4 6 8
// 이렇게 바꿔줘야돼   0 1 2 3 4 
// 그러려면 (9-i)/2로 해주면 된다!




// let n=5;
// for (let i=0; i<n; i++) {
//     console.log(' '.repeat(i) + '*'.repeat(9-i-i));
// }





//   *
//  ***
// *****
//  ***
//   *

//빈칸갯수
// 2  1  0  1  2 
// 2  1  0 -1 -2
// 4  2  0 -2 -4

// let n=4;
// while (n >= -4) {
//     console.log(' '.repeat(Math.abs(n) / 2) + '*'.repeat(5 - Math.abs(n)));
//     n -= 2;
// }

// for (let i=0; i<3; i++) {
//     console.log(' '.repeat(2-i) + '*'.repeat(i*2+1));
// }
// for (let i=0; i<2; i++) {
//     console.log(' '.repeat(i+1) + '*'.repeat(3-i-i));
// }






// **********
// ********
// ******
// ****
// **

// 10 8 6 4 2

// for (let i=10; i>=2; i -=2) { // i를 원소라고 생각해 index가 아니라
//     console.log('*'.repeat(i));
// }





// *
// ***
// *****
// ***
// *

// 별 갯수
// 1  3  5  3  1
// 4  2  0  2  4
// 4  2  0 -2 -4

// let n=4;
// while (n >= -4) {
//     console.log('*'.repeat(5 - Math.abs(n)));
//     n -= 2;
// }


// for (let i=4; i>=-4; i-=2 ) {
//     console.log('*'.repeat(5-Math.abs(i)));
// }




//     *
//   ***
// *****
//   ***
//     *

// 별 개수
// 1 3 5 3 1 
// 4 2 0 2 4

// 공백 개수
// 5 3 1  3  5
// 4 2 0  2  4
// 4 2 0 -2 -4



// for (let i=4; i>=-4; i-=2) {
//     console.log(' '.repeat(Math.abs(i)) + '*'.repeat(5 - Math.abs(i)));
// }