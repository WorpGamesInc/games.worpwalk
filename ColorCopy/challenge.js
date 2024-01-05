// Coming Soon Alert

function comingSoonAlert() {
    alert("Coming Soon!");
}

// Sound Stuffs

var sound1 = new Audio('sfx/simonSound1.mp3')
var sound2 = new Audio('sfx/simonSound2.mp3')
var sound3 = new Audio('sfx/simonSound3.mp3')
var sound4 = new Audio('sfx/simonSound4.mp3')
var loseSound = new Audio('sfx/loseSound.wav')

// Player Challenge Buttons

function CGreen() {
    sound1.play();
    document.getElementById("CGreen").style.backgroundColor = "rgb(0, 190, 0)";
    setTimeout(function() {
        document.getElementById("CGreen").style.backgroundColor = "rgb(0, 255, 0)";
    }, 500)
}

function CRed() {
    sound2.play();
    document.getElementById("CRed").style.backgroundColor = "rgb(190, 0, 0)";
    setTimeout(function() {
        document.getElementById("CRed").style.backgroundColor = "red";
    }, 500)
}

function CYellow() {
    sound3.play();
    document.getElementById("CYellow").style.backgroundColor = "rgb(200, 200, 0)";
    setTimeout(function() {
        document.getElementById("CYellow").style.backgroundColor = "rgb(255, 255, 0)";
    }, 500)
}

function CBlue() {
    sound4.play();
    document.getElementById("CBlue").style.backgroundColor = "darkblue"
    setTimeout(function() {
        document.getElementById("CBlue").style.backgroundColor = "blue";
    }, 500)
}

// Computer Challenge Buttons

var comGreen = function computerGreen() {
    sound1.play();
    document.getElementById("CGreen").style.backgroundColor = "rgb(0, 190, 0)";
    setTimeout(function() {
        document.getElementById("CGreen").style.backgroundColor = "rgb(0, 255, 0)";
    }, 500)
}

var comRed = function computerRed() {
    sound2.play();
    document.getElementById("CRed").style.backgroundColor = "rgb(190, 0, 0)";
    setTimeout(function() {
        document.getElementById("CRed").style.backgroundColor = "red";
    }, 500)
}

var comYellow = function computerYellow() {
    sound3.play();
    document.getElementById("CYellow").style.backgroundColor = "rgb(200, 200, 0)";
    setTimeout(function() {
        document.getElementById("CYellow").style.backgroundColor = "rgb(255, 255, 0)";
    }, 500)
}

var comBlue = function computerBlue() {
    sound4.play();
    document.getElementById("CBlue").style.backgroundColor = "darkblue"
    setTimeout(function() {
        document.getElementById("CBlue").style.backgroundColor = "blue";
    }, 500)
}

// Randomizer
var computerOptions = [comBlue, comYellow, comGreen, comRed]
