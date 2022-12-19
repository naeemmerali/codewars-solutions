// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    // your code here
    let y = x.split("").reverse().join("").toLowerCase()
    return x.toLowerCase() === y ? true : false
  }