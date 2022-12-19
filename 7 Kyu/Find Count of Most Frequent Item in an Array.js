// DESCRIPTION:
// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 


function mostFrequentItemCount(collection) {
    // Do your magic. :)
    
    if (collection.length === 0) return 0
    
    let frequency = {}
    
    for (i = 0; i <= collection.length; i++){
      
      if (frequency.hasOwnProperty([collection[i]])){
        frequency[collection[i]] += 1
      }
      else{
        frequency[collection[i]] = 1
      }   
    }
    
    let highestKey = Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b)
    
    return frequency[highestKey]
    
  }