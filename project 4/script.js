// PROJECT 4 --------------------------------------------------------

let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', (e)=> {
        e.preventDefault();
        const value = parseInt(userInput.value);
        validateGuess(value);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter valid number !!");
    }else if(guess < 1){
        alert("Please enter a number greater than 1 !!");
    }else if(guess > 100){
        alert("Please enter a number smaller than 100 !!");
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. The number was ${randomNum}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You guessed it right.`);
        endGame();
    }else if(guess < randomNum){
        displayMessage(`Number is low !`);
    }else if(guess > randomNum){
        displayMessage(`Number is high !`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id = 'newGame'>Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.addEventListener('click', (e)=> {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
