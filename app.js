let count = 0;
let userScore = 0;
let compScore = 0;
let userPick = [];
function playGame(event) {
  let userInput = event.target.id;
  console.log(userInput);
  userPick.push(userInput);
  let compArray = ["rock", "paper", "scissors"];
  let compInput = compArray[Math.floor(Math.random() * compArray.length)];
  console.log(compInput);

  if (userInput == compInput) {
    msg = "It's a tie!";
  } else if (
    (userInput == "rock" && compInput == "scissors") ||
    (userInput == "paper" && compInput == "rock") ||
    (userInput == "scissors" && compInput == "paper")
  ) {
    msg = "You win!";
    userScore = userScore + 1;
    console.log(userScore);
  } else {
    msg = "You lose!";
    compScore = compScore + 1;
    console.log(compScore);
  }
  document.getElementById("user").innerHTML = "Your choice: " + userInput;
  document.getElementById("comp").innerHTML = "Computer choice: " + compInput;
  document.getElementById("msg").innerHTML = msg;
  console.log(msg);
  count++;

  if (count >= 5 || compScore >= 3 || userScore >= 3) {
    document.getElementById("rock").style.display = "none";
    document.getElementById("paper").style.display = "none";
    document.getElementById("scissors").style.display = "none";
    document.getElementById("user").style.display = "none";
    document.getElementById("comp").style.display = "none";
    document.getElementById("msg").style.display = "none";
    document.getElementById("gameover").innerHTML =
      "Game over! You score: " + userScore + " Computer scores: " + compScore +
      ". Your picks: " +
      userPick.join(", ");
  }
}
