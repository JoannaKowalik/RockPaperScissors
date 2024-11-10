function playGame(event) {
  let userInput = event.target.id;
  console.log(userInput);
  let compArray = ["rock", "paper", "scissors"];
  let compInput = compArray[Math.floor(Math.random() * compArray.length)];
  console.log(compInput);

  if (userInput == compInput) {
    msg = "It's a tie!";
  } else if (userInput == "rock") {
    if (compInput == "paper") {
      msg = "You lose!";
    } else {
      msg = "You win!";
    }
  } else if (userInput == "paper") {
    if (compInput == "rock") {
      msg = "You win!";
    } else {
      msg = "You lose!";
    }
  } else {
    if (compInput == "rock") {
      msg = "You lose!";
    } else {
      msg = "You win!";
    }
  }
  document.getElementById("user").innerHTML = "Your choice: " + userInput;
  document.getElementById("comp").innerHTML = "Computer choice: " + compInput;
  document.getElementById("msg").innerHTML = msg;
  console.log(msg);
}

//   });
// }
