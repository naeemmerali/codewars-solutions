function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    
    let total = marks.reduce((accumulator, current) => accumulator += current, 0)
    
    return Math.floor(total/marks.length)
  }