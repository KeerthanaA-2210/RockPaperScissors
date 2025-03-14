function playGame(playerMove) {
    const choices = ["r", "p", "s"];
    const computerMove = choices[Math.floor(Math.random() * choices.length)];

    let result = "";
    
    if (playerMove === computerMove) {
        result = "The game was a tie...";
    } else if (
        (playerMove === "r" && computerMove === "s") ||
        (playerMove === "p" && computerMove === "r") ||
        (playerMove === "s" && computerMove === "p")
    ) {
        result = "You win!! 🎉";
    } else {
        result = "You lose. 😞";
    }

    document.getElementById("result").innerText = 
        `You chose: ${playerMove.toUpperCase()} | Computer chose: ${computerMove.toUpperCase()}\n${result}`;
}