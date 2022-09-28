// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5

function highAndLow(numbers){
   
    // split string into an array of numbers
    let nums = numbers.split(" ")
    
    // convert numbers for string to number format
    nums.forEach((num, i) => nums[i] = Number(num))
    
    // sort the numbers into an array
    let sorted = nums.sort((a,b) => (a-b))
    
    // return the max and min
    return `${sorted[(sorted.length - 1)]} ${sorted[0]}`
    
  }