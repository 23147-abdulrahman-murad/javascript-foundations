// Global score variables
let humanScore = 0;
let computerScore = 0;
let gameEnded = false; // Flag to check if the game has ended

// Get references to DOM elements
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const scoreDisplay = document.getElementById('score');
const roundResultDisplay = document.getElementById('round-result');
const finalResultDisplay = document.getElementById('final-result');
const buttons = document.querySelectorAll('.buttons button'); // Select all choice buttons

// Function to get the computer's choice
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Function to disable choice buttons
function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

// Function to update the score display
function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;
}

// Function to play a single round
function playRound(humanChoice) {
    if (gameEnded) return; // Stop playing if game has ended

    const computerChoice = getComputerChoice();
    let roundMessage = "";

    // Determine winner and update score/message
    if (humanChoice === computerChoice) {
        roundMessage = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundMessage = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        roundMessage = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }

    // Update DOM elements
    roundResultDisplay.textContent = roundMessage;
    updateScoreDisplay();

    // Check for winner (first to 5 points)
    if (humanScore === 5 || computerScore === 5) {
        gameEnded = true; // Set the flag
        declareWinner();
        disableButtons(); // Disable buttons once game ends
    }
}

// Function to declare the overall winner
function declareWinner() {
    finalResultDisplay.classList.remove('loser'); // Reset class just in case
    if (humanScore > computerScore) {
        finalResultDisplay.textContent = "Congratulations! You won the game!";
        // Keep default final-result color (green)
    } else {
        finalResultDisplay.textContent = "Game over! The computer won the game.";
        finalResultDisplay.classList.add('loser'); // Add class to make text red
    }
}

// Add event listeners to buttons
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

// Initialize score display on page load
updateScoreDisplay();
