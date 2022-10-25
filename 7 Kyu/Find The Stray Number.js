// DESCRIPTION:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3



function stray(numbers) {
  
    // check if the first number is the stray number
    let firstNum = numbers[0]
    let nums = numbers.filter((x,i) => x === firstNum)  
    if (nums.length === 1) return firstNum
    
    // if the first number is not a stray number, check all other numbers for the stray number
    for (i = 1; i < numbers.length; i++){
      if (firstNum !== numbers[i]){
        return numbers[i]
      }
    }  
  }