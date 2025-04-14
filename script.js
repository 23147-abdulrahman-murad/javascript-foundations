// Step 2: Function to get the computer's choice
function getComputerChoice() {
    const randomNumber = Math.random(); // Generates a number between 0 and < 1
    if (randomNumber < 1 / 3) {
      return "rock";
    } else if (randomNumber < 2 / 3) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  
  // Testing Step 2 (uncomment to test in console)
  // console.log("Computer choice:", getComputerChoice());
  // console.log("Computer choice:", getComputerChoice());
  // console.log("Computer choice:", getComputerChoice());
  
  // Step 3: Function to get the human's choice
  function getHumanChoice() {
    const choice = prompt("Enter your choice: rock, paper, or scissors");
    // For now, we assume the user enters a valid choice as per instructions
    return choice;
  }
  
  // Testing Step 3 (uncomment to test in console)
  // console.log("Human choice:", getHumanChoice());
  
  // Step 6: Function to play the entire game
  function playGame() {
    // Step 4: Declare the players score variables (moved inside playGame)
    let humanScore = 0;
    let computerScore = 0;
  
    // Step 5: Write the logic to play a single round (moved inside playGame)
    function playRound(humanChoice, computerChoice) {
      const humanLower = humanChoice.toLowerCase(); // Make humanChoice case-insensitive
  
      console.log(`You chose: ${humanLower}`);
      console.log(`Computer chose: ${computerChoice}`);
  
      if (humanLower === computerChoice) {
        console.log("It's a tie this round!");
      } else if (
        (humanLower === "rock" && computerChoice === "scissors") ||
        (humanLower === "paper" && computerChoice === "rock") ||
        (humanLower === "scissors" && computerChoice === "paper")
      ) {
        console.log(`You win this round! ${humanLower} beats ${computerChoice}`);
        humanScore++; // Increment human score
      } else {
        console.log(`You lose this round! ${computerChoice} beats ${humanLower}`);
        computerScore++; // Increment computer score
      }
      console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
      console.log("--------------------"); // Separator for rounds
    }
  
    // Play 5 rounds
    console.log("Starting Game: Best of 5 Rounds!");
    console.log("====================");
  
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        const humanSelection = getHumanChoice(); // Get new human choice each round
        const computerSelection = getComputerChoice(); // Get new computer choice each round
        playRound(humanSelection, computerSelection);
    }
  
    // Declare the overall winner after 5 rounds
    console.log("====================");
    console.log("Game Over!");
    console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);
  
    if (humanScore > computerScore) {
      console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
      console.log("Sorry! The computer won the game.");
    } else {
      console.log("It's a tie game overall!");
    }
    console.log("====================");
  }
  
  // Start the game
  playGame();