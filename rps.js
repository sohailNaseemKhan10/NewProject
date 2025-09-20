// Get all required elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreEl = document.querySelector("#user_Score");
const compScoreEl = document.querySelector("#com_score");

let userScore = 0;
let compScore = 0;

// Get computer's choice
const getComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Get winner
const playGame = (userChoice) => {
    const compChoice = getComputerChoice();

    if (userChoice === compChoice) {
        msg.innerText = `It's a Draw! Both chose ${userChoice}`;
        msg.style.backgroundColor = "gray";
    } else {
        let userWin = false;

        if (
            (userChoice === "rock" && compChoice === "scissor") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissor" && compChoice === "paper")
        ) {
            userWin = true;
        }

        if (userWin) {
            userScore++;
            userScoreEl.innerText = userScore;
            msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
        } else {
            compScore++;
            compScoreEl.innerText = compScore;
            msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
    }
};

// Add click events
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
