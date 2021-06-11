document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button").addEventListener("click", function () {
        let result = "";
        let computerInput = Math.floor((Math.random() * 3) + 1);
        let userInput = Number(window.prompt("Enter 1 for Rock, 2 for Paper & 3 for Scissors"));
        if (userInput <= 0 || userInput >= 4) {
            userInput = Number(window.prompt("Invalid Input!!!\nEnter 1 for Rock, 2 for Paper & 3 for Scissors"));
        } else if (userInput === computerInput) {
            result += "It's a Tie !!!";
        } else if ((userInput === 1 && computerInput === 2) || (userInput === 2 && computerInput === 3) || (userInput === 3 && computerInput === 1)) {
            result += "You Lose";
        } else if ((userInput === 1 && computerInput === 3) || (userInput === 2 && computerInput === 1) || (userInput === 3 && computerInput === 2)) {
            result += "You Win";
        }
        document.querySelector("h2").innerText = result;
        console.log([userInput, computerInput, result])
    })
})