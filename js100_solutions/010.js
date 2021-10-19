// 문제10 : 별 찍기
// 입력 : 5





// *****
// ****
// ***
// **
// *
 
let n=5;
for (let i=0; i<n; i++) {
    console.log('*'.repeat(5-i));
}





// *
// **
// ***
// ****
// *****

let n = 5;
for (let i=0; i<n; i++) {
    console.log('*'.repeat(i+1));
}




// *********
// *******
// *****
// ***
// *

let n=5;
for(let i=0; i<n; i++) {
    console.log('*'.repeat(9-i-i));
}

let n=5;
for (let i=n; i>0; i--) {
    console.log('*'.repeat(i*2-1));
}





// *
// ***
// *****
// *******
// *********

let n=5;
for (let i=0; i<n; i++) {
    console.log('*'.repeat(i*2+1));
}





// *****
//  ****
//   ***
//    **
//     *

let n=5;
for (i=0; i<n; i++) {
    console.log(' '.repeat(i) +'*'.repeat(5-i));
}





//     *
//    **
//   ***
//  ****
// *****

let n=5;
for (let i=0; i<n; i++) {
    console.log(' '.repeat(4-i) + '*'.repeat(i+1));
}





// ********* 
//   ******* 
//     ***** 
//       ***
//         *

let n=5;
for (let i=0; i<n; i++) {
    console.log(' '.repeat(i*2) + '*'.repeat(9-i-i));
}





//         *
//       ***
//     *****
//   *******
// *********

let n=5;
for (let i=0; i<5; i++) {
    console.log(' '.repeat(8-i-i) + '*'.repeat(i*2+1));
}





//     *
//    ***
//   *****
//  *******
// *********

let tree = '';
let n = 5;
for(let i=1; i<=n; i++){
  let star = '';
  for(let j=1; j<=n-i; j++){ // 공백이 4개니까 n-1로 해준거다
    star += ' ';
  }
  for(let k=1; k<=2*i-1; k++){
    star += '*';
  }
  tree += star + '\n';
}
console.log(tree);



let n=5;
for (let i=0; i<n; i++) {
    console.log(' '.repeat(4-i) +  '*'.repeat(i*2+1));
}





// *********
//  *******
//   *****
//    ***
//     *

// let n=5;
// for (let i=0; i<n; i++) {
//     console.log(' '.repeat(i) + '*'.repeat(9-i-i));
// }