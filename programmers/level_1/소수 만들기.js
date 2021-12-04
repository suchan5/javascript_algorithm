let input =[1,2,7,6,4];

function isPrime(num) {
    if (num === 1) {
        return false;
    }
    
    for (let i=2; i<parseInt(num/2); i++) { 
        if (num%i === 0) {
            return false;
        }
    }
    return true;
}


function solution (nums) {
    let answer = [];
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++ ) {
            for (let k=j+1; k<nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                //console.log(`${nums[i]} + ${nums[j]} + ${nums[k]} = ${sum}`);
                if (isPrime(sum)) {
                    answer.push(sum);
                }
            }
        }
    }
    answer = answer.length;
    return answer;
}
console.log(solution(input));