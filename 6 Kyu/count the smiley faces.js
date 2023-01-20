// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

//return the total number of smiling faces in the array
function countSmileys(arr) {
  if (arr.length === 0) return 0;

  let smileys = 0;

  for (i = 0; i < arr.length; i++) {
    let face = arr[i].split("");

    if (face.length === 2) {
      if (face[0] === ":" || face[0] === ";") {
        if (face[1] === ")" || face[1] === "D") smileys++;
      }
    } else if (face.length === 3) {
      if (face[0] === ":" || face[0] === ";") {
        if (face[1] === "-" || face[1] === "~") {
          if (face[2] === ")" || face[2] === "D") smileys++;
        }
      }
    }
  }

  return smileys;
}
