var miningBlock = document.createElement('div');
miningBlock.className = 'miningBlock';
document.body.appendChild(miningBlock); // create mining block

// stats
var coalNum = 0;
document.getElementById('coalStat').textContent = coalNum;

var ironNum = 0;
document.getElementById('ironStat').textContent = ironNum;

var copperNum = 0;
document.getElementById('copperStat').textContent = copperNum;

// stats go up on click | Main function
miningBlock.onclick = function() {
    if (miningBlock.style.backgroundColor = 'rgb(25, 25, 25)') {
    coalNum++;
    document.getElementById('coalStat').textContent = coalNum;
    }
}