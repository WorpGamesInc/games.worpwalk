let gainNumber = 0;
let confidence = 0;
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
        document.getElementById("confidenceCounter").style.display = "block";
      }

      if (gainNumber > 49.1) {
        document.getElementById("bothArms").style.display = "block";
        document.getElementById("armCounter").style.display = "block";
      }
};


function clickConfidence() {

  if (gainCount.textContent = gainNumber < 14.1) {
    gainCount.textContent = gainNumber;
  }

  else if (gainCount.textContent = gainNumber > 14.1) {
    gainCount.textContent = gainNumber = gainNumber - 15;
    confidenceLevel.textContent = confidence = confidence + 1
      setInterval(function() {
        gainNumber++;
        gainCount.textContent = gainNumber;
      }, 5000);
    }
  }


  function clickBothArms() {


    if (gainCount.textContent = gainNumber < 49.1) {
      gainCount.textContent = gainNumber;
    }
  
    else if (gainCount.textContent = gainNumber > 49.1) {
      gainCount.textContent = gainNumber = gainNumber - 50;
      arms = arms+1
      armCount.textContent = arms;
      }
    }

  
  // function changeMode() {

  //   if (document.body.style.backgroundColor == 'white') {
  //     document.body.style.backgroundColor = 'black';
  //     document.getElementById('Counters').style.color = 'white';
  //   }

  //   else if (document.body.style.backgroundColor == 'black') {
  //     document.body.style.backgroundColor = 'white';
  //     document.getElementById('Counters').style.color = 'black';
  //   }
  // }