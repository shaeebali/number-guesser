//declaration of global variables:
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// game logic below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const diffHuman = Math.abs(targetGuess - humanGuess)
  const diffComputer = Math.abs(targetGuess - computerGuess)
  return diffHuman <= diffComputer;
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore ++;
  } else if (winner === 'computer') {
    computerScore ++;
  }
}

const advanceRound = () => currentRoundNumber ++;
