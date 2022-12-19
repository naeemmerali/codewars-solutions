// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  // Go for it
  let words = str.split(" ")
  
  return words.map(word => word.split('').reverse().join('')).join(' ')
  
}