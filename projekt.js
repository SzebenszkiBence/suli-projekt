// Hangman game logic
let word = "hello";
let guessedLetters = [];
let guessesLeft = 6;
const canvas = document.getElementById('hangmanCanvas');
const ctx = canvas.getContext('2d');

// Draw parts of the hangman as the game progresses
function drawHangman(incorrectGuesses) {
    switch (incorrectGuesses) {
        case 1:
            // Draw gallows base
            ctx.beginPath();
            ctx.moveTo(50, 280);
            ctx.lineTo(250, 280);
            ctx.stroke();
            break;
        case 2:
            // Draw vertical gallows pole
            ctx.beginPath();
            ctx.moveTo(100, 280);
            ctx.lineTo(100, 50);
            ctx.stroke();
            break;
        case 3:
            // Draw top gallows pole
            ctx.beginPath();
            ctx.moveTo(100, 50);
            ctx.lineTo(200, 50);
            ctx.stroke();
            break;
        case 4:
            // Draw hanging rope
            ctx.beginPath();
            ctx.moveTo(200, 50);
            ctx.lineTo(200, 100);
            ctx.stroke();
            break;
        case 5:
            // Draw head
            ctx.beginPath();
            ctx.arc(200, 130, 30, 0, Math.PI * 2);
            ctx.stroke();
            break;
        case 6:
            // Draw body
            ctx.beginPath();
            ctx.moveTo(200, 160);
            ctx.lineTo(200, 220);
            ctx.stroke();
            break;
        case 7:
            // Draw left arm
            ctx.beginPath();
            ctx.moveTo(200, 180);
            ctx.lineTo(170, 200);
            ctx.stroke();
            break;
        case 8:
            // Draw right arm
            ctx.beginPath();
            ctx.moveTo(200, 180);
            ctx.lineTo(230, 200);
            ctx.stroke();
            break;
        case 9:
            // Draw left leg
            ctx.beginPath();
            ctx.moveTo(200, 220);
            ctx.lineTo(170, 250);
            ctx.stroke();
            break;
        case 10:
            // Draw right leg
            ctx.beginPath();
            ctx.moveTo(200, 220);
            ctx.lineTo(230, 250);
            ctx.stroke();
            break;
    }
}

function guessLetter() {
    const letter = document.getElementById("letterGuess").value.toLowerCase();
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!word.includes(letter)) {
            guessesLeft--;
            drawHangman(10 - guessesLeft); // Draw part of the hangman for each wrong guess
        }
    }
    updateHangmanDisplay();
    if (guessesLeft <= 0) {
        alert("Game Over! The word was " + word);
        resetHangman();
    } else if (word.split("").every(l => guessedLetters.includes(l))) {
        alert("You win!");
        resetHangman();
    }
}

function updateHangmanDisplay() {
    document.getElementById("wordDisplay").innerHTML = word.split("").map(l => guessedLetters.includes(l) ? l : "_").join(" ");
    document.getElementById("hangmanStatus").innerHTML = "Guesses left: " + guessesLeft;
}

function resetHangman() {
    word = "hello";
    guessedLetters = [];
    guessesLeft = 6;
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    updateHangmanDisplay();
}
