let main = document.getElementById("main");

let container = document.getElementById("container");
container.remove();

let choices = ["rock", "paper", "scissors"];

let button = document.querySelector(".button");
button.addEventListener("click", () => {
    main.appendChild(container);
    button.remove();

    let playerWinCount = 0;
    let computerWinCount = 0;
    let gameRound = 0;
    let finalResult = "";

    let computerRock = document.getElementById("computer-rock");
    let computerPaper = document.getElementById("computer-paper");
    let computerScissors = document.getElementById("computer-scissors");


    let playerHands = document.querySelectorAll(".player-hand");
    playerHands.forEach(hand => {
        hand.addEventListener("click", (e) => {
            //player selection
            let playerChoice = e.target.getAttribute("value");
            console.log(playerChoice);

            //computer selection
            let randomChoice = Math.floor(Math.random() * 3);
            let computerChoice = choices[randomChoice];
            console.log(computerChoice);

            //winner logic
            let result = "";
            if (playerChoice === computerChoice) {
                result += "It's a draw.";
                gameRound++;
            } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
                playerWinCount++;
                result = "player wins";
                gameRound++;
            } else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")) {
                computerWinCount++;
                result = "computer wins";
                gameRound++;
            }

            document.querySelector("#player-win-count").textContent = `Player win count : ${playerWinCount}`;
            document.querySelector("#computer-win-count").textContent = `Computer win count : ${computerWinCount}`;
            document.querySelector("h4").textContent = result;

            if (gameRound >= 5) {
                if (playerWinCount > computerWinCount) {
                    finalResult = "You won the game";
                } else if (computerWinCount > playerWinCount) {
                    finalResult = "Computer won the game";
                } else {
                    finalResult = "It's a draw";
                }

                let heading = document.querySelector("h2");
                heading.textContent = finalResult;
                container.remove();

                let playAgain = document.createElement("button");
                playAgain.textContent = "Play Again";
                playAgain.classList.add("button");
                main.appendChild(playAgain);
                playAgain.addEventListener("click", () => {
                    location.reload();
                })
            }

            // //player selection animation
            // hand.classList.add("selected");
            // //computer selection animation
            // if (computerChoice === "rock") {
            //     computerRock.classList.add("selected");
            // } else if (computerChoice === "paper") {
            //     computerPaper.classList.add("selected");
            // } else if (computerChoice === "scissors") {
            //     computerScissors.classList.add("selected");
            // }

            // //removing all animations
            // let selectedHands = document.querySelectorAll("i");
            // selectedHands.forEach(hand => {
            //     hand.addEventListener("transitionend", () => {
            //         hand.classList.remove("selected");
            //         console.log("transition end");
            //     })
            // })

        })
    });


});