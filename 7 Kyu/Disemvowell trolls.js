// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    let letters = str.split('')
    
    for (i = 0; i < letters.length; i++){
      if (letters[i] === 'a' || letters[i] === 'A'){
        letters.splice(i,1)
        i--
      }
      else if (letters[i] === 'e' || letters[i] === 'E'){
        letters.splice(i,1)
        i--
      }
      else if (letters[i] === 'i' || letters[i] === 'I'){
        letters.splice(i,1)
        i--
      }
      else if (letters[i] === 'o' || letters[i] === 'O'){
        letters.splice(i,1)
        i--
      }
      else if (letters[i] === 'u' || letters[i] === 'U'){
        letters.splice(i,1)
        i--
      }
    }
    return letters.join('');
}