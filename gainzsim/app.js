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

// automatic stuff
setInterval(saveGame, 60000)
confidenceTimer();
buddiesTimer();
TenMinAchievement();
trainersTimer();
// main mechanic

function clickGains() {
  gainNumber += arms * gainMultiplier;
  gainCount.textContent = gainNumber;
};

$("#gainHere").click(function () {
  var armSprite = $("#armSprite");
  armSprite.animate({ height: '+=10%', width: '+=10%' }, 300);
  armSprite.animate({ height: '-=10%', width: '-=10%' }, 300);
});
// shop items 

function clickConfidence() {

  if (gainCount.textContent = gainNumber < confidenceCost - .1) {
    gainCount.textContent = gainNumber;
  }

  else if (gainCount.textContent = gainNumber > confidenceCost - .1) {
    gainCount.textContent = gainNumber = gainNumber - confidenceCost;
    confidenceLevel.textContent = confidence = confidence + 1
    confidenceCost = confidenceCost = Math.ceil(confidenceCost * 1.2);
    confidenceCostCounter.textContent = confidenceCost;
  }
}

function confidenceTimer() {
  setInterval(function () {
    gainNumber + confidence;
    gainCount.textContent = gainNumber;
  }, 5000)
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
    gymBuddyCount.textContent = gymBuddies = gymBuddies + 1
    gymBuddyCost = gymBuddyCost = Math.ceil(gymBuddyCost * 1.2);
    gymBuddyCostCounter.textContent = gymBuddyCost;
  }
}

function buddiesTimer() {
  setInterval(function () {
    gainNumber += gymBuddies * gainMultiplier; // gain multiplier multiplies the amount each auto gains
    gainCount.textContent = gainNumber;
  }, 1000)
}

function clickPersonalTrainers() {
  if (gainCount.textContent = gainNumber < trainerCost - .1) {
    gainCount.textContent = gainNumber;
  }

  else if (gainCount.textContent = gainNumber > trainerCost - .1) {
    gainCount.textContent = gainNumber = gainNumber - trainerCost;
    trainerCount.textContent = personalTrainers = personalTrainers + 1
    trainerCost = trainerCost = Math.ceil(trainerCost * 1.2);
    trainerCostCounter.textContent = trainerCost;
  }
}

function trainersTimer() {
  setInterval(function () {
    gainNumber += personalTrainers * 5 * gainMultiplier;
    gainCount.textContent = gainNumber;
  }, 1000)
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
    gainMultiplier = gainMultiplier + 1
    multiplierLabel.textContent = gainMultiplier;
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

  if (localStorage.getItem("alertSent") == "false") {
    alert("Game auto-saves every minute")

    localStorage.setItem("alertSent", "true");
  }
}


// Load Button
function loadGame() {
  if (localStorage.wiped === "false") {
    gainNumber = parseInt(localStorage.gainz);
    gainCount.textContent = gainNumber;

    confidence = parseInt(localStorage.confidenceLvl);
    confidenceCost = parseInt(localStorage.confidenceCost);
    confidenceLevel.textContent = confidence;
    confidenceCostCounter.textContent = confidenceCost;

    gymBuddies = parseInt(localStorage.gymBuddyLvl);
    gymBuddyCost = parseInt(localStorage.gymBuddyCost);
    gymBuddyCount.textContent = gymBuddies;
    gymBuddyCostCounter.textContent = gymBuddyCost;

    arms = parseInt(localStorage.armAmt);
    armCost = parseInt(localStorage.armCost);
    armCount.textContent = arms;
    armCostCounter.textContent = armCost;

    personalTrainers = parseInt(localStorage.trainers);
    trainerCost = parseInt(localStorage.trainerCost);
    trainerCount.textContent = personalTrainers;
    trainerCostCounter.textContent = trainerCost;

    gainMultiplier = parseInt(localStorage.gainMultiplier);
    multiplierCost = parseInt(localStorage.multiplierCost);
    multiplierLabel.textContent = gainMultiplier;
    multiplierCostCounter.textContent = multiplierCost;

    confidenceTimer();
    buddiesTimer();
    trainersTimer();
    TenMinAchievement();
  }
}

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

// 10 Minute Easter Egg
if (!localStorage.tenMinAchievement) {
  localStorage.setItem('tenMinAchievement', "unsent");
}

function TenMinAchievement() {
  if (localStorage.getItem('tenMinAchievement') === "unsent") {
    setTimeout(function () {
      alert("Achievemnt unlocked! Play for 10 minutes: You're really a gamer aren't you?")
    }, 600000);
    localStorage.setItem('10minAchievement', "sent");
  }
}