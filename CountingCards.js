let count = 0;

function cc(card) { //funktionen tager et kort som parameter
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++; // hvis kortet er mellem 2 og 6, tælles der en op
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--; // hvis kortet er 10, J, Q, K eller A, tælles der en ned
      break;
  }
  if (count > 0) { //hvis count er større end 0, returneres count + " Bet"
    return count + " Bet";
  } else { //ellers returneres count + " Hold"
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');