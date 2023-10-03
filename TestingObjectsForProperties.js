function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp))
        return obj[checkProp];
      else return "Not Found";
    // Only change code above this line
  }

  //denne funktion modtager et objekt og en property, og returnerer værdien af propertyen, hvis den findes i objektet