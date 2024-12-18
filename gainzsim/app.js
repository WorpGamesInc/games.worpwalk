// Check for correct resolution (make sure to comment out in final releases).
sizeCheck = setInterval(function () {
  document.querySelector('#pageTitle').textContent = window.outerHeight + "," + window.outerWidth;
}, 1000);

let gainNumber = 0;
let confidence = 0;
let arms = 1;
let gymBuddies = 0;
let personalTrainers = 0;
let armCost = 100;
let confidenceCost = 15;
let gymBuddyCost = 50;
let trainerCost = 500;
let gainMultiplier = 1;
let multiplierCost = 750;
let gainzGained = 0;
if (localStorage.gainz) {
  localStorage.setItem("wiped", "false");
}

// Gym Name
if (!localStorage.getItem("StoredGymName")) {
  localStorage.setItem("StoredGymName", "_____");
  document.querySelector('#gymName').textContent = localStorage.StoredGymName;
} else {
  let gymName = localStorage.getItem("StoredGymName");
  document.querySelector('#gymName').textContent = gymName
  if (gymName == "The Creator") {
    document.querySelector('#gymName').style.color = "gold";
  } else if (gymName == "Donnie") {
    document.querySelector('#gymName').style.color = "green";
    alert("You have the name of my brother! I grant you a green name.")
  } else {
    document.querySelector('#gymName').style.color = "rgb(220, 224, 234)";
  }
}
document.querySelector('#gymName').addEventListener("click", () => {
  newGymName = prompt("What would you like to name your gym? ");
  if (newGymName) {
    document.querySelector('#gymName').textContent = newGymName;
  }
  if (newGymName == "The Creator") {
    document.querySelector('#gymName').style.color = "gold";
  } else if (newGymName == "Donnie") {
    document.querySelector('#gymName').style.color = "green";
    alert("You have the name of (The Creator) my brother! I grant you a green name.")
  } else {
    document.querySelector('#gymName').style.color = "rgb(220, 224, 234)";
  }
  localStorage.setItem('StoredGymName', newGymName);
});


// main mechanic
// Clicking

document.querySelector('#gainHere').addEventListener("click", () => {
  gainNumber += arms * gainMultiplier;
  gainCount.textContent = gainNumber.toFixed(2);
});

// Idling GPS

setInterval(() => {
  gainNumber += (((confidence / 10) + gymBuddies + (personalTrainers * 5)) * gainMultiplier) / 10;
  gainCount.textContent = gainNumber.toFixed(2);
}, 100)

//Stats GPS

setInterval(() => {
let GPS = (((confidence / 10) + gymBuddies + (personalTrainers * 5)) * gainMultiplier)
document.querySelector('#gps').textContent = GPS;
}, 1000);

// shop items 

function clickConfidence() {

  if (gainCount.textContent = gainNumber < confidenceCost - .1) {
    gainCount.textContent = gainNumber;
  }

  else if (gainCount.textContent = gainNumber > confidenceCost - .1) {
    gainCount.textContent = gainNumber -= confidenceCost;
    confidenceLevel.textContent = (confidence += 1) + " (" + (confidence / 5) + "g/s)";
    confidenceCost = Math.ceil(confidenceCost * 1.2);
    confidenceCostCounter.textContent = confidenceCost;
  }
}

function clickBothArms() {

  if (gainCount.textContent = gainNumber < armCost - .1) {
    gainCount.textContent = gainNumber;
  }

  else if (gainCount.textContent = gainNumber > armCost - .1) {
    gainCount.textContent = gainNumber = gainNumber - armCost;
    armCost = armCost * 2;
    armCostCounter.textContent = armCost;
    arms = arms + 1
    armCount.textContent = arms;
  }
}


function clickGymBuddies() {
  if (gainCount.textContent = gainNumber < gymBuddyCost - .1) {
    gainCount.textContent = gainNumber;
  }

  else if (gainCount.textContent = gainNumber > gymBuddyCost - .1) {
    gainCount.textContent = gainNumber = gainNumber - gymBuddyCost;
    gymBuddyCount.textContent = (gymBuddies += 1) + " (" + (gymBuddies) + "g/s)";
    gymBuddyCost = gymBuddyCost = Math.ceil(gymBuddyCost * 1.2);
    gymBuddyCostCounter.textContent = gymBuddyCost;
  }
}


function clickPersonalTrainers() {
  if (gainCount.textContent = gainNumber < trainerCost - .1) {
    gainCount.textContent = gainNumber;
  }

  else if (gainCount.textContent = gainNumber > trainerCost - .1) {
    gainCount.textContent = gainNumber = gainNumber - trainerCost;
    trainerCount.textContent = (personalTrainers += 1) + " (" + (personalTrainers * 5) + "g/s)";
    trainerCost = trainerCost = Math.ceil(trainerCost * 1.2);
    trainerCostCounter.textContent = trainerCost;
  }
}

function clickAddArm() {
  if (gainCount.textContent = gainNumber < armCost - .1) {
    gainCount.textContent = gainNumber;
  }

  else if (gainCount.textContent = gainNumber > armCost - .1) {
    gainCount.textContent = gainNumber = gainNumber - armCost;
    armCost = Math.ceil(armCost * 1.5);
    armCostCounter.textContent = armCost;
    arms = arms + 1
    armCount.textContent = arms;
  }
}

function clickMultiplier() {
  if (gainCount.textContent = gainNumber < multiplierCost - .1) {
    gainCount.textContent = gainNumber;
  }

  else if (gainCount.textContent = gainNumber > multiplierCost - .1) {
    gainCount.textContent = gainNumber = gainNumber - multiplierCost;
    multiplierCost = multiplierCost * 2;
    multiplierCostCounter.textContent = multiplierCost;
    gainMultiplier += 1;
    multiplierLabel.textContent = gainMultiplier;
    multiplierMobileLabel.textContent = gainMultiplier;
  }
}

// Save Button

if (!localStorage.alertSent) {
  localStorage.setItem("alertSent", "false");
}

function saveGame() {
  localStorage.setItem("gainz", gainNumber);

  localStorage.setItem("confidenceLvl", confidence);
  localStorage.setItem("confidenceCost", confidenceCost);

  localStorage.setItem("gymBuddyLvl", gymBuddies);
  localStorage.setItem("gymBuddyCost", gymBuddyCost);

  localStorage.setItem("armAmt", arms);
  localStorage.setItem("armCost", armCost);

  localStorage.setItem("trainers", personalTrainers);
  localStorage.setItem("trainerCost", trainerCost);

  localStorage.setItem("gainMultiplier", gainMultiplier);
  localStorage.setItem("multiplierCost", multiplierCost);

  localStorage.setItem('wiped', "false");

  localStorage.setItem("gymName", gymName);

  if (localStorage.getItem("alertSent") == "false") {
    alert("Game auto-saves every minute")
  }
  localStorage.setItem("alertSent", "true");
}

document.querySelector('#saveButton').addEventListener("click", () => {
  saveGame();
})


// Load Button

function loadGame() {
  if (localStorage.wiped === "false") {
    gainNumber = parseInt(localStorage.gainz);
    gainCount.textContent = gainNumber;

    confidence = parseInt(localStorage.confidenceLvl);
    confidenceCost = parseInt(localStorage.confidenceCost);
    confidenceLevel.textContent = confidence + " (" + (confidence / 5) + "g/s)";
    confidenceCostCounter.textContent = confidenceCost;

    gymBuddies = parseInt(localStorage.gymBuddyLvl);
    gymBuddyCost = parseInt(localStorage.gymBuddyCost);
    gymBuddyCount.textContent = gymBuddies + " (" + (gymBuddies) + "g/s)";
    gymBuddyCostCounter.textContent = gymBuddyCost;

    arms = parseInt(localStorage.armAmt);
    armCost = parseInt(localStorage.armCost);
    armCount.textContent = arms;
    armCostCounter.textContent = armCost;

    personalTrainers = parseInt(localStorage.trainers);
    trainerCost = parseInt(localStorage.trainerCost);
    trainerCount.textContent = personalTrainers + " (" + (confidence * 5) + "g/s)";
    trainerCostCounter.textContent = trainerCost;

    gainMultiplier = parseInt(localStorage.gainMultiplier);
    multiplierCost = parseInt(localStorage.multiplierCost);
    multiplierLabel.textContent = gainMultiplier;
    multiplierCostCounter.textContent = multiplierCost;

    gymName = localStorage.gymName;
    document.querySelector('#gymName').textContent = gymName
  }
}

document.querySelector('#loadButton').addEventListener("click", () => {
  loadGame();
})
// Wipe Button

function wipeGame() {
  if (confirm("You sure buddy?")) {
    localStorage.clear();
    localStorage.setItem("wiped", "true");
    localStorage.setItem("alertSent", "false");
    gainNumber = 0;
    confidence = 0;
    confidenceCost = 15;
    gymBuddies = 0;
    gymBuddyCost = 50;
    arms = 1;
    armCost = 100;
    personalTrainers = 0;
    trainerCost = 500;
    gainMultiplier = 1;
    multiplierCost = 750;
    gainCount.textContent = gainNumber;
    confidenceLevel.textContent = confidence;
    confidenceCostCounter.textContent = confidenceCost;

    gymBuddyCount.textContent = gymBuddies;
    gymBuddyCostCounter.textContent = gymBuddyCost;

    armCount.textContent = arms;
    armCostCounter.textContent = armCost;

    trainerCount.textContent = personalTrainers;
    trainerCostCounter.textContent = trainerCost;

    multiplierLabel.textContent = gainMultiplier;
    multiplierCostCounter.textContent = multiplierCost;
  }
}

document.querySelector('#wipeButton').addEventListener("click", () => {
  wipeGame();
})

// automatic stuff
loadGame();
setInterval(saveGame, 60000);


// load game with tons of gainz
gainNumber += 99999;