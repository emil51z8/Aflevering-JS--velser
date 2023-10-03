// Setup
function abTest(a, b) {
    // Only change code below this line
    if( a<0 || b<0) { //hvis a eller b er mindre end 0, returneres undefined og vi kommer aldrig ned til den anden return
      return undefined;
    }
  
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);