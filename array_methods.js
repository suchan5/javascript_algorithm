// 문제출처 : https://hackmd.io/@oW_dDxdsRoSpl0M64Tfg2g/rJc83gTrY#%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94-%EC%97%AC%EB%9F%AC%EB%B6%84-%EC%BD%94%EB%94%A9%EC%95%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-%EB%88%84%EB%82%98%EC%97%90%EC%9A%94
// 정답: https://hackmd.io/@oW_dDxdsRoSpl0M64Tfg2g/rkMXvayvK


// 배열함수 리스트
// forEach : 반환값이 없다, 단순 for문과 같이 작동한다.
// map : 반환값을 배열에 담아 반환한다.
// filter: 조건에 충족하는(true) 아이템만 배열에 담아 반환한다.
// some: 조건에 충족하는 아이템이 하나라도 있으면 true 반환, 아니면 flase.
// every: 모든 배열에 아이템이 조건을 충족하면 true 반환, 아니면 false.
// find : 조건에 충족하는 아이템 하나만 반환(여러개라면 첫번째것만 반환)
// findIndex : 조건에 충족하는 아이템의 인덱스값 반환 (여러개라면 첫번째아이템의 인덱스번호만 반환)


let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
  ];


// //  map 문제 : 1) 모든 이름을 대문자로 바꾸어서 출력하시오.
// // for
// for (let i=0; i<names.length; i++) {
//     console.log(names[i].toUpperCase());
// }

// // forEach
// names.forEach(element => console.log(element.toUpperCase()));

// // map
// names.map(item => console.log(item.toUpperCase()));





// // map 문제 : 2) 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
// // for
// for (let i=0; i<names.length; i++) {
//   console.log(names[i].split(' ')[0]);
// }

// // forEach
// names.forEach(item => console.log(item.split(' ')[0]));

// // map
// names.map(item => console.log(item.split(' ')[0]));





// map 문제 : 3) 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
let initialOnly = names.map(item => {
  let splitName = item.split(' ');
  let initial = '';
  splitName.forEach(item => initial += item[0]);
  return initial;
});
console.log(initialOnly);







//   filter 문제
//   이름에 a를 포함한 사람들을 출력하시오.
//   이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)

//   some 문제
//   전체 이름의 길이가 20자 이상인 사람이 있는가?
//   성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)

//   every 문제
//   모두의 전체 이름의 길이가 20자 이상인가?
//   모두의 이름에 a 가 포함되어 있는가?

//   find 문제
//   전체 이름의 길이가 20자 이상인 사람을 찾으시오.
//   미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)

//   findIndex 문제
//   전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
//   미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
