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
//     console.log('*'.repeat(i*2-1));
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





// // *****
// //  ****
// //   ***
// //    **
// //     *

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
//     console.log(' '.repeat(4-i) + '*'.repeat(i+1));
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