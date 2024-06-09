const encouragingWords = [
  "Dig deep for success!",
  "Mining for greatness!",
  "Shine like gold!",
  "Excavate your potential!",
  "Drill for excellence!",
  "Extract positivity!",
  "Rock-solid determination!",
  "Fuel your ambition!",
  "Strike it rich with effort!",
  "Forge ahead with grit!",
  "Unearthing opportunities with determination!",
  "Excavate with passion and purpose!",
  "Drill deep, reach high for success!",
  "Prospect for greatness and mine your dreams!",
  "Fuel your ambition with each excavation!",
  "Forge ahead and conquer challenges!",
  "Choose excellence in every drill!",
  "Shape the future underground with determination!",
  "Prospect, extract, repeat for success!",
  "Where grit meets gold in every endeavor!",
  "Unleash your mining potential!",
  "Discover the riches within!",
  "Excavate your dreams to reality!",
  "Drill down for success!",
  "Prospect for a brighter future!",
  "Fueling success with each dig!",
  "Rock-solid commitment to excellence!",
  "Unearth the treasures of hard work!",
  "Excavate opportunities for growth!",
  "Drill with determination!",
  "Prospect for new horizons!",
  "Fueling passion for mining!",
  "Rock-solid perseverance in every task!",
  "Unearth the path to success!",
  "Explore the depths of your potential!",
  "Excavate your way to greatness!",
  "Drill deep, climb high!",
  "Prospect for a better tomorrow!",
  "Fuel your ambition with determination!",
  "Rock-solid dedication to your craft!",
  "Unearth the possibilities within!",
  "Excavate success with every effort!",
  "Drill down for your dreams!",
  "Prospect for a brighter future ahead!",
  "Fueling your mining journey!",
  "Rock-solid resolve in every challenge!",
  "Unearth the rewards of hard work!",
  "Excavate the path to success!",
  "Drill deep for your aspirations!",
  "Prospect for opportunities on the horizon!"
];

console.log(encouragingWords);


var newCorpMessage = document.getElementById("corpMessage");

setInterval(function() {
    newCorpMessage.textContent = (encouragingWords[Math.floor(Math.random()*encouragingWords.length)]);
}, 15000);
