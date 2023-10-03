function caseInSwitch(val) { //denne metode får et tal ind som parameter og returnere en string ud fra dens case i switchen 
    let answer = "";
    // Only change code below this line
    switch(val) {
      case 1:
      answer = "alpha"; //hvis val er 1, returnere den "alpha"
      break;
      case 2: 
      answer = "beta"; //hvis val er 2, returnere den "beta"
      break;
      case 3: 
      answer = "gamma"; //hvsi val er 3, returnere den "gamma"
      break;
      case 4: 
      answer = "delta"; //hvis val er 4, returnere den "delta"
      break; 
    }
  
    // Only change code above this line
    return answer; //efter switchen er kørt, returnere vi answer
  }
  
  caseInSwitch(1);