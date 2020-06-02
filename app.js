var playerScore = 0;
var computerScore = 0;

function theComputerChoice() {
  const compChoices = ["Rock", "Paper", "Scissors"];
  const compNum = Math.floor(Math.random() * 3);
  return compChoices[compNum];
}
const playerScoreSPN = document.getElementById("playerscore");
const computerScoreSPN = document.getElementById("computerscore");
const output = document.querySelector(".output");

function winner(playerChoice, computerChoice) {
  playerScore++;
  playerScoreSPN.innerHTML = playerScore;
  computerScoreSPN.innerHTML = computerScore;
  output.innerHTML = `${playerChoice} BEATS ${computerChoice}. PLAYER WINS !!!`;
}

function tie(playerChoice, computerChoice) {
  output.innerHTML = `${playerChoice} TIES  ${computerChoice}`;
}

function losser(playerChoice, computerChoice) {
  computerScore++;
  playerScoreSPN.innerHTML = playerScore;
  computerScoreSPN.innerHTML = computerScore;
  output.innerHTML =
    playerChoice + " LOSES to  " + computerChoice + ". COMPUTER WINS !!!";
}

function theGame(playerChoice) {
  const computerChoice = theComputerChoice();
  switch (playerChoice + computerChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      winner(playerChoice, computerChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      losser(playerChoice, computerChoice);
      break;
    case "PaperPaper":
    case "ScissorsScissors":
    case "RockRock":
      tie(playerChoice, computerChoice);
      break;
  }
}
const rock = document.getElementById("Rock");
function playerClicks() {
  rock.addEventListener("click", function () {
    theGame("Rock");
  });
  const paper = document.getElementById("Paper");
  paper.addEventListener("click", function () {
    theGame("Paper");
  });
  const scissors = document.getElementById("Scissors");
  scissors.addEventListener("click", function () {
    theGame("Scissors");
  });
}
playerClicks();
