function nextInLine(arr, item) { //funktion der får et array og et tal ind som parametre
    // Only change code below this line
    arr.push(item); //her bliver item tilføjet til arrayet arr på den sidste plads
    const removed = arr.shift(); //her bliver det første element i arrayet fjernet og gemt i variablen removed
    return removed; //her returnere vi det første element i køen
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));