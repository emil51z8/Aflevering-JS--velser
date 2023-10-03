function switchOfStuff(val) { //denne metode får et bogstab ind som parameter og returnere en string ud fra dens case i switchen
    let answer = "";
    // Only change code below this line
    switch(val) {
      case "a": answer = "apple";
      break;
      case "b": answer = "bird";
      break;
      case "c": answer = "cat";
      break;
      default: answer = "stuff"; //hvis ikke der er nogen match, returneres default
      break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);