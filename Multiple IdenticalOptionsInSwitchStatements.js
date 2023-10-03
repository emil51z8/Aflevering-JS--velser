function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch(val) {
      case 1:
      case 2: //hvis val enten er 1, 2 eller 3, returneres "Low"
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5: //hvis val enten er 4, 5 eller 6, returneres "Mid"
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8: //hvis val enten er 7, 8 eller 9, returneres "High"
      case 9:
        answer = "High";
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);