// Setup
let processed = 0; // en global variabel

function processArg(num) { //en funktion der returnere resultatet af en matematisk operation
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7); // her bliver den globale variabel sat til resultatet af funktionen processArg med argumentet 7

console.log(processed); // her bliver resultatet af processArg(7) printet i konsollen