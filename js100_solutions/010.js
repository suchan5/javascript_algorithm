// 문제10 : 별 찍기

// 입력 : 5
// 출력 :
//     *
//    ***
//   *****
//  *******
// *********




let tree = '';
let n = 5;
for(let i=1; i<=n; i++){
  let star = '';
  for(let j=1; j<=n-i; j++){
    star += ' ';
  }
  for(let k=1; k<=2*i-1; k++){
    star += '*';
  }
  tree += star + '\n';
}

console.log(tree);