document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button").addEventListener("click", function () {
        let result = "";
        let userWinCount = 0;
        let computerWinCount = 0;

        for (let i = 1; i < 6; i++) {
            setTimeout(function () {
                result = "";
                let computerInput = Math.floor((Math.random() * 3) + 1);
                let userInput = Number(window.prompt("Enter 1 for Rock, 2 for Paper & 3 for Scissors"));

                if (userInput <= 0 || userInput >= 4) {
                    userInput = Number(window.prompt("Invalid Input!!!\nEnter 1 for Rock, 2 for Paper & 3 for Scissors"));
                } else if (userInput === computerInput) {
                    result += "It's a Tie !!!";
                } else if ((userInput === 1 && computerInput === 2) || (userInput === 2 && computerInput === 3) || (userInput === 3 && computerInput === 1)) {
                    result += "You Lose";
                    computerWinCount += 1;
                } else if ((userInput === 1 && computerInput === 3) || (userInput === 2 && computerInput === 1) || (userInput === 3 && computerInput === 2)) {
                    result += "You Win";
                    userWinCount += 1;
                }
                document.querySelector("h3").innerText = `Round ${i}: ${result}`;
                document.getElementById("user-wins").innerText = `User Win Count ${userWinCount}`;
                document.getElementById("computer-wins").innerText = `Computer Win Count ${computerWinCount}`;

                if (i == 5) {
                    if (userWinCount > computerWinCount) {
                        document.querySelector("h2").innerText = `Congratulations! You are the winner.`;
                    } else if (computerWinCount > userWinCount) {
                        document.querySelector("h2").innerText = `You lost!! Try Again!`;
                    } else {
                        document.querySelector("h2").innerText = `Good try, but it's a draw!`;
                    }
                }


            }, 100)


        }

    })
})