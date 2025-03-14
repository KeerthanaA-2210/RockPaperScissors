function playGame(playerMove) {
    const choices = ["r", "p", "s"];
    const computerMove = choices[Math.floor(Math.random() * choices.length)];

    let result = "";
    
    if (playerMove === computerMove) {
        result = "The game was a tie...";
    } else if (
        (playerMove === "r" && computerMove === "r") ||
        (playerMove === "p" && computerMove === "p") ||
        (playerMove === "s" && computerMove === "s")
    ) {
        result = "You win!! 🎉";
    } else {
        result = "You lose. 😞";
    }

    document.getElementById("result").innerText = 
        `You chose: ${playerMove.toUpperCase()} | Computer chose: ${computerMove.toUpperCase()}\n${result}`;
}
