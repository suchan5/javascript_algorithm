function solution(A, B, C) {
    let answer;
    if (A===B && B===C) { // 세 숫자가 같으면
      answer = 10000+A*1000;
    } else if (A===B || B===C) { //  정렬을 해놨기 때문에 경우의 수가 두가지
      if (A===B) {
        answer = 1000+A*100;
      } else if (B===C) {
        answer = 1000+B*100;
      }
    } else if (A!==B && B!==C) { // 세 숫자가 각기 다르면
       answer = C*100; // 정렬을 통해 C가 제일 큰 숫자이므로 
    }
    return answer;
  }
  
  let input = [6, 2, 5];
  input = input.sort();
  console.log(input);
  console.log(solution(input[0], input[1], input[2]));