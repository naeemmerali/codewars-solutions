// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:
// [
//     "  *  ",
//     " *** ", 
//     "*****"
//   ]
//   And a tower with 6 floors looks like this:
  
//   [
//     "     *     ", 
//     "    ***    ", 
//     "   *****   ", 
//     "  *******  ", 
//     " ********* ", 
//     "***********"
//   ]

function towerBuilder(nFloors) {
    // build here
    let floors = []
    let baseStars = (2*(nFloors-1)) + 1
    let stars = ""
    
    for (j = 0; j < baseStars; j++){
        stars += "*"
    }
    
    floors.push(stars)
    let spaces = " "
    let newStars = stars
    
    while (floors.length !== nFloors){
      newStars = newStars.slice(0,-2)
      let nextFloor = spaces + newStars + spaces
      floors.unshift(nextFloor)
      spaces += " "
    }
    
    return floors
}