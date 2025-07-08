let computerScore = 0;
let humanScore = 0;

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values */

getRandomIntInclusive = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

getComputerChoice = () => {
  const n = getRandomIntInclusive(0, 2);

  if (n === 0) {
    return "rock";
  } else if (n === 1) {
    return "paper";
  } else if (n === 2) {
    return "scissors";
  }
};

getHumanChoice = () => {
  return prompt("Rock, paper or scissors?", "");
};

playRound = (computerChoice, humanChoice) => {
  humanChoice = humanChoice.toLowerCase();
  if (computerChoice === humanChoice) {
    console.log(`A draw! You both chose ${computerChoice}`);
    return;
  }
  if (computerChoice === "rock") {
    if (humanChoice === "paper") {
      ++humanScore;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      return;
    }
    if (humanChoice === "scissors") {
      ++computerScore;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      return;
    }
  }
  if (computerChoice === "paper") {
    if (humanChoice === "rock") {
      ++computerScore;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      return;
    }
    if (humanChoice === "scissors") {
      ++humanScore;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      return;
    }
  }
  if (computerChoice === "scissors") {
    if (humanChoice === "rock") {
      ++humanScore;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      return;
    }
    if (humanChoice === "paper") {
      ++computerScore;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      return;
    }
  }
};

playGame = () => {
  for (let i = 0; i < 5; ++i) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(computerSelection, humanSelection);
    console.log(`Computer player score: ${computerScore}`);
    console.log(`Human player score: ${humanScore}`);
  }

  if (computerScore === humanScore) {
    console.log("A draw!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins!");
  } else if (computerScore < humanScore) {
    console.log("Human wins!");
  }
  return;
};
