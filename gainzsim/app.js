let gainNumber = 0;
let confidence = 0;
let arms = 1;
let gymBuddies = 0;
let armCost = 100;
let confidenceCost = 15;
let gymBuddyCost = 50;
if (!localStorage.alertSent) {
  localStorage.setItem('alertSent', "false");
}

// automatic stuff
setInterval(saveGame, 300000)

// Numbers go boom boom

function clickGains() {
  document.querySelectorAll('button')[0].style.background = "darkblue";
  var timer = setTimeout(function () {
    document.querySelectorAll('button')[0].style.background = "blue";
  }, 250);

  gainNumber += arms;
  gainCount.textContent = gainNumber;


};

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
    confidenceTimer();
  }
}

function confidenceTimer() {
  setInterval(function () {
    gainNumber += confidence;
    gainCount.textContent = gainNumber;
  }, 5000);
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
  buddiesTimer();
}

function buddiesTimer() {
  setInterval(function () {
    gainNumber +=gymBuddies;
    gainCount.textContent = gainNumber;
  }, 1000);
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

// Save Button

function saveGame() {

  if (localStorage.getItem("alertSent") == "false") {
    alert("Game auto-saves every 5 minutes")
    localStorage.setItem("gainz", gainNumber);
    localStorage.setItem("confidenceLvl", confidence);
    localStorage.setItem("confidenceCost", confidenceCost);
    localStorage.setItem("gymBuddyLvl", gymBuddies);
    localStorage.setItem("gymBuddyCost", gymBuddyCost);
    localStorage.setItem("armAmt", arms);
    localStorage.setItem("armCost", armCost);
    localStorage.removeItem("wiped");
    localStorage.setItem("alertSent", "true");
  } else {
    localStorage.setItem("gainz", gainNumber);
    localStorage.setItem("confidenceLvl", confidence);
    localStorage.setItem("confidenceCost", confidenceCost);
    localStorage.setItem("gymBuddyLvl", gymBuddies);
    localStorage.setItem("armAmt", arms);
    localStorage.setItem("armCost", armCost);
    localStorage.setItem("gymBuddyCost", gymBuddyCost);
    localStorage.removeItem("wiped");
  }

}


// Load Button
function loadGame() {
  if (!localStorage.wiped) {
  storedGainNumber = parseInt(localStorage.gainz);
  storedConfidenceLvl = parseInt(localStorage.confidenceLvl);
  storedConfidenceCost = parseInt(localStorage.confidenceCost);
  storedGymBuddies = parseInt(localStorage.gymBuddyLvl);
  storedGymBuddyCost = parseInt(localStorage.gymBuddyCost);
  storedArmAmt = parseInt(localStorage.armAmt);
  storedArmCost = parseInt(localStorage.armCost);
  gainNumber = storedGainNumber;
  confidence = storedConfidenceLvl;
  confidenceCost = storedConfidenceCost;
  gymBuddies = storedGymBuddies;
  gymBuddyCost = storedGymBuddyCost;
  arms = storedArmAmt;
  armCost = storedArmCost;
  gainCount.textContent = gainNumber;
  confidenceLevel.textContent = confidence;
  confidenceCostCounter.textContent = confidenceCost;
  gymBuddyCount.textContent = gymBuddies;
  gymBuddyCostCounter.textContent = gymBuddyCost;
  armCount.textContent = arms;
  armCostCounter.textContent = armCost;
  confidenceTimer();
  buddiesTimer();
  }
}

// Wipe Button
function wipeGame() {
  if (confirm("You sure buddy?")) {
    localStorage.clear();
    localStorage.setItem("wiped", "true");
    gainNumber = 0;
    confidence = 0;
    confidenceCost = 15;
    gymBuddies = 0;
    gymBuddyCost = 50;
    arms = 1;
    armCost = 100;
    gainCount.textContent = gainNumber;
    confidenceLevel.textContent = confidence;
    confidenceCostCounter.textContent = confidenceCost;
    gymBuddyCount.textContent = gymBuddies;
    gymBuddyCostCounter.textContent = gymBuddyCost;
    armCount.textContent = arms;
    armCostCounter.textContent = armCost;
  }
}