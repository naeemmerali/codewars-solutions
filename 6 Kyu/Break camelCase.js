// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
  
    // split the string into letters
    let letters = string.split('')
    
    // loop through each letter in the string
    for (i = 0; i < letters.length; i++){
      let letter = letters[i]
      
      // if the letter is uppercase, insert a space before it in the array of characters and advance i so you don't repeat the same letter on the next iteration
      if (letter === letter.toUpperCase()){
        letters.splice(i, 0, ' ')
        i++
      }
    }
    
    return letters.join('')
  }