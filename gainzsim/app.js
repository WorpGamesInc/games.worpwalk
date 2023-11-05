let gainNumber = 0;
let confidence = 0;
let arms = 1;
let gymBuddies = 0;
let armCost = 100;
let confidenceCost = 15;
let gymBuddyCost = 50;

function updateStuff() {
  if (gainNumber > 14.1) {
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


function clickGains() {
    document.querySelectorAll('button')[0].style.background = "darkblue";
    var timer = setTimeout(function() {
        document.querySelectorAll('button')[0].style.background = "blue";
      }, 250);

      gainNumber+=arms;
      gainCount.textContent = gainNumber;

      
};


function clickConfidence() {

  if (gainCount.textContent = gainNumber < confidenceCost-.1) {
    gainCount.textContent = gainNumber;
  }

  else if (gainCount.textContent = gainNumber > confidenceCost-.1) {
    gainCount.textContent = gainNumber = gainNumber - confidenceCost;
    confidenceLevel.textContent = confidence = confidence + 1
    confidenceCost = confidenceCost = Math.ceil(confidenceCost*1.2);
      confidenceCostCounter.textContent = confidenceCost;
      setInterval(function() {
        gainNumber++;
        gainCount.textContent = gainNumber;
      }, 5000);
    }
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


const savedGainNumber = gainCount;
const gainCount = document.querySelector('.gainCount');
const saveButton = document.getElementById('.saveButton');
const storedGainNumber = localStorage.getItem('savedGainNumber');

const saveGame = () => {
  localStorage.setItem('savedGainNumber', gainCount.textContent);
}

document.getElementById('saveButton').addEventListener('click', saveGame);