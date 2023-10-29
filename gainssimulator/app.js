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