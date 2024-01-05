// First Buttons

function clickFreePlay() {
    document.getElementById("modePicker").style.display = "none";
    document.getElementById("freePlay").style.display = "block";
}

function back() {
    document.getElementById("freePlay").style.display = "none";
    document.getElementById("challenge").style.display = "none";
    document.getElementById("modePicker").style.display = "block";
}

function clickChallenge() {
    document.getElementById("modePicker").style.display = "none";
    document.getElementById("challenge").style.display = "block";
}

// Sound Stuffs

var sound1 = new Audio('sfx/simonSound1.mp3')
var sound2 = new Audio('sfx/simonSound2.mp3')
var sound3 = new Audio('sfx/simonSound3.mp3')
var sound4 = new Audio('sfx/simonSound4.mp3')
var loseSound = new Audio('sfx/loseSound.wav')

// Free Play Buttons

function FPGreen() {
    sound1.play();
}

function FPRed() {
    sound2.play();
}

function FPYellow() {
    sound3.play();
}

function FPBlue() {
    sound4.play();
}