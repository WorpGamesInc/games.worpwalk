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

function updateStuff() {
  if (gainNumber > 14.1 || localStorage.confidenceLvl) {
    document.getElementById("confidence").style.display = "block";
    document.getElementById("confidenceCounter").style.display = "block";
  }

  if (gainNumber > 99.1) {
    document.getElementById("addArm").style.display = "block";
    document.getElementById("armCounter").style.display = "block";
  }

  
  if (gainNumber > 49.1) {
    document.getElementById("gymBuddies").style.display = "block";
    document.getElementById("gymBuddyCounter").style.display = "block";
  }
}

setInterval(updateStuff,1000);
setInterval(saveGame,300000)

// Numbers go boom boom

function clickGains() {
    document.querySelectorAll('button')[0].style.background = "darkblue";
    var timer = setTimeout(function() {
        document.querySelectorAll('button')[0].style.background = "blue";
      }, 250);

      gainNumber+=arms;
      gainCount.textContent = gainNumber;

      
};

// shop items 

function clickConfidence() {

  if (gainCount.textContent = gainNumber < confidenceCost-.1) {
    gainCount.textContent = gainNumber;
  }

  else if (gainCount.textContent = gainNumber > confidenceCost-.1) {
    gainCount.textContent = gainNumber = gainNumber - confidenceCost;
    confidenceLevel.textContent = confidence = confidence + 1
    confidenceCost = confidenceCost = Math.ceil(confidenceCost*1.2);
      confidenceCostCounter.textContent = confidenceCost;
    confidenceTimer();
    }
  }

function confidenceTimer() {
  setInterval(function() {
    gainNumber+=confidence;
    gainCount.textContent = gainNumber;
  }, 5000);
}

  function clickBothArms() {


    if (gainCount.textContent = gainNumber < armCost-.1) {
      gainCount.textContent = gainNumber;
    }
  
    else if (gainCount.textContent = gainNumber > armCost-.1) {
      gainCount.textContent = gainNumber = gainNumber - armCost;
      armCost = armCost*2;
      armCostCounter.textContent = armCost;
      arms = arms+1
      armCount.textContent = arms;
      }
    }


function clickGymBuddies() {
  if (gainCount.textContent = gainNumber < gymBuddyCost-.1) {
    gainCount.textContent = gainNumber;
  }

  else if (gainCount.textContent = gainNumber > gymBuddyCost-.1) {
    gainCount.textContent = gainNumber = gainNumber - gymBuddyCost;
    gymBuddyCount.textContent = gymBuddies = gymBuddies + 1
    gymBuddyCost = gymBuddyCost = Math.ceil(gymBuddyCost*1.2);
      gymBuddyCostCounter.textContent = gymBuddyCost;
      setInterval(function() {
        gainNumber = gainNumber + 2;
        gainCount.textContent = gainNumber;
      }, 1000);
    }
  }
  

  function clickAddArm() {


    if (gainCount.textContent = gainNumber < armCost) {
      gainCount.textContent = gainNumber;
    }
  
    else if (gainCount.textContent = gainNumber > armCost) {
      gainCount.textContent = gainNumber = gainNumber - armCost;
      armCost = armCost*2;
      armCostCounter.textContent = armCost;
      arms = arms+1
      armCount.textContent = arms;
      }
    }

// Shop Functions

    function openShop() {
      document.getElementById("shop").style.display = "block";
      document.getElementById("openShopButton").style.display = "none";
      document.getElementById("closeShopButton").style.display = "block";
    }

    function closeShop() {
      document.getElementById("shop").style.display = "none";
      document.getElementById("openShopButton").style.display = "block";
      document.getElementById("closeShopButton").style.display = "none";
    }

// Save Button

function saveGame() {
  alert("WARNING! This button does not save everything.")
  if (localStorage.getItem("alertSent") == "false") {
    alert("Game auto-saves every 5 minutes")
    localStorage.setItem("gainz", gainNumber);
    localStorage.setItem("confidenceLvl", confidence);
    localStorage.setItem("confidenceCost", confidenceCost);
    localStorage.setItem("alertSent", "true");
  } else {
    localStorage.setItem("gainz", gainNumber);
    localStorage.setItem("confidenceLvl", confidence);
    localStorage.setItem("confidenceCost", confidenceCost);
  }

}


// Load Button
function loadGame() {
 storedGainNumber = parseInt(localStorage.gainz);
 storedConfidenceLvl = parseInt(localStorage.confidenceLvl);
 storedConfidenceCost = parseInt(localStorage.confidenceCost);
 gainNumber = storedGainNumber;
 confidence = storedConfidenceLvl;
 confidenceCost = storedConfidenceCost;
 gainCount.textContent = gainNumber;
 confidenceLevel.textContent = confidence;
 confidenceCostCounter.textContent = confidenceCost;
 confidenceTimer();
}

// Wipe Button
function wipeGame() {
if (confirm("You sure buddy?")) {
  localStorage.setItem("gainz", "0");
  localStorage.setItem("confidenceLvl", "0");
  localStorage.setItem("confidenceCost", "15");
  storedGainNumber = parseInt(localStorage.gainz);
  storedConfidenceLvl = parseInt(localStorage.confidenceLvl);
  storedConfidenceCost = parseInt(localStorage.confidenceCost);
  gainNumber = storedGainNumber;
  confidence = storedConfidenceLvl;
  confidenceCost = storedConfidenceCost;
  gainCount.textContent = gainNumber;
  confidenceLevel.textContent = confidence;
  confidenceCostCounter.textContent = confidenceCost;
}
}