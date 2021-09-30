// Variables
const GAME_TIME = 3;
let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;

const wordInput = document.querySelector(".word-input")
const wordDisplay = document.querySelector(".word-display")
const scoreDisplay = document.querySelector(".score")
const timeDisplay = document.querySelector('.time')
const button = document.querySelector('.button')

  
init();

function init(){
    getWords()
}

function getWords(){
    
}

wordInput.addEventListener('input', () => {
    // conditional statement for to check if the input is an aswer or not`
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        score++;
        scoreDisplay.innerText = score;
        // Resets word input box once scored 
        wordInput.value = "";
    }
})

function run() {
    isPlaying = true;
    time = GAME_TIME;
    timeInterval = setInterval(countDown, 1000)
}

function countDown(){
    time > 0 ? time-- : isPlaying = false;
    timeDisplay.innerText = time;
    if (!isPlaying) {
        clearInterval(timeInterval)
    }
} 

function buttonChange(text) {
    button.innerText = text;

    text === 'Start Game' ? button.classList.remove("loading") : button.classList.add("loading")
}

buttonChange('Start Game')