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
