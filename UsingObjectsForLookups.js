// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    // her er if else chainen udskiftet med et objekt, hvor vi bruger val som key til at hente værdien
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    }
    result = lookup[val]; //her henter vi værdien fra objektet
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie"); //returnerer "Chicago"