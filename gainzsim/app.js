let gainNumber = 0;

const gainCount = document.getElementById("gainCount");

function clickGains() {
    document.querySelectorAll('button')[0].style.background = "red";
    var timer = setTimeout(function() {
        document.querySelectorAll('button')[0].style.background = "blue";
      }, 250);

      gainNumber++;
      gainCount.textContent = gainNumber;
};

function clickResetGame() {
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