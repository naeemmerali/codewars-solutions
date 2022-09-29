// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    // split string into letters
    letters = str.split("")
    
    // map the letters into an array which will contain the letter repeated once. Do not repeat spaces
    let duplicateLetters = letters.map(letter => {
      if (letter != ' '){
        return letter + letter
      }
      else{
        return letter
      }
    })
    
    // return the duplicated letter string
    return duplicateLetters.join('')
  
  }