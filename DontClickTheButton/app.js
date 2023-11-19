function pressButton() {
    document.getElementById('buttonImg').src = "/DontClickTheButton/img/buttonPressed.png"
    var timer = setTimeout(function() {
        document.getElementById('buttonImg').src = "/DontClickTheButton/img/buttonUnpressed.png";
      }, 500);
      var timer = setTimeout(function() {
        document.getElementById('buttonShown').style.display = 'none';
        document.getElementById('buttonHidden').style.display = 'block';
      }, 1500);
      var timer = setTimeout(function() {
        document.getElementById('goAhead').style.display = 'block';
      }, 2500);
      var timer = setTimeout(function() {
        document.getElementById('backButton').style.display = 'block';
      }, 3500);
}

function goBack() {
    document.getElementById('buttonHidden').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';
    document.getElementById('goAhead').style.display = 'none';
    document.getElementById('buttonShown').style.display = 'block';
}


function after30secs() {
  document.getElementById('topText').textContent = 'Fuck you';
  var timer = setTimeout(function() {
    document.getElementById('topText').textContent = "I'm pressing it for you.";
  }, 1000);
  var timer = setTimeout(function() {
  pressButton()
  }, 2000);
  var timer = setTimeout(function() {
    document.getElementById('topText').textContent = "DO NOT CLICK!!!";
    }, 2000);
}

setTimeout(after30secs, 30000);

