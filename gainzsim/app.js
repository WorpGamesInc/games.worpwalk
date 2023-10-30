let gainNumber = 0;
let arms = 1;
const gainCount = document.getElementById("gainCount");


function clickGains() {
    document.querySelectorAll('button')[0].style.background = "red";
    var timer = setTimeout(function() {
        document.querySelectorAll('button')[0].style.background = "blue";
      }, 250);

      gainNumber+=arms;
      gainCount.textContent = gainNumber;

      if (gainNumber > 14.1) {
        document.getElementById("confidence").style.display = "block";
      }

      if (gainNumber > 99.1) {
        document.getElementById("bothArms").style.display = "block";
      }
};


function clickReset() {
  location.reload();
}


function clickConfidence() {

  if (gainCount.textContent = gainNumber < 14.1) {
    gainCount.textContent = gainNumber;
  }

  else if (gainCount.textContent = gainNumber > 14.1) {
    gainCount.textContent = gainNumber = gainNumber - 15;

      setInterval(function() {
        gainNumber++;
        gainCount.textContent = gainNumber;
      }, 1000);
    }
  }


  function clickBothArms() {

    if (gainCount.textContent = gainNumber < 99.1) {
      gainCount.textContent = gainNumber;
    }
  
    else if (gainCount.textContent = gainNumber > 99.1) {
      gainCount.textContent = gainNumber = gainNumber - 100;
  
       arms = arms+2
      }
    }