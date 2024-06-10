
// tutorial level
miningBlock.onclick = function () {
    if (coalNum < 3.1) {
        coalNum++;
        document.getElementById('coalStat').textContent = coalNum;
    } else if (coalNum < 4.9) {
        coalNum++;
        document.getElementById('coalStat').textContent = coalNum;
        miningBlock.style.backgroundColor = 'silver';
    } else if (ironNum < 3.1) {
        ironNum++;
        document.getElementById('ironStat').textContent = ironNum;
    } else if (ironNum < 4.9) {
        ironNum++;
        document.getElementById('ironStat').textContent = ironNum;
        miningBlock.style.backgroundColor = 'rgb(203, 116, 29)';
    } else if (copperNum < 3.1) {
        copperNum++;
        document.getElementById('copperStat').textContent = copperNum;
    } else if (copperNum < 4.9) {
        copperNum++;
        document.getElementById('copperStat').textContent = copperNum;
        miningBlock.style.backgroundColor = ('rgb(0, 250, 5)')
        showMessage("You're done with the tutorial! Now you can sell, buy, and most importantly, spend the rest of your life in the mines..")
    } else if (miningBlock.style.backgroundColor = 'rgb(0, 250, 5)') {
        miningBlock.onclick = function () {
            ranOre = array[Math.floor(Math.random() * array.length)];
            if (ranOre == 'coal') {
                miningBlock.style.backgroundColor = 'rgb(25, 25, 25)'
                coalNum++;
                document.getElementById('coalStat').textContent = coalNum
            } else if (ranOre == 'iron') {
                miningBlock.style.backgroundColor = 'silver'
                ironNum++
                document.getElementById('ironStat').textContent = ironNum
            } else if (ranOre == 'copper') {
                miningBlock.style.backgroundColor = ('rgb(203, 116, 29)')
                copperNum++
                document.getElementById('copperStat').textContent = copperNum
            }
        }
    }
} // main mechanic
var array = ['coal', 'iron', 'copper']