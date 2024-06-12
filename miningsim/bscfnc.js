
// tutorial level
miningBlock.onclick = function () {
    if (coalNum < 3.1) {
        coalNum++;
        document.getElementById('coalStat').textContent = coalNum;
    } else if (coalNum < 4.9) {
        coalNum++;
        document.getElementById('coalStat').textContent = coalNum;
        miningBlock.style.backgroundImage = 'url(/sprites/iron_ore.png)';
    } else if (ironNum < 3.1) {
        ironNum++;
        document.getElementById('ironStat').textContent = ironNum;
    } else if (ironNum < 4.9) {
        ironNum++;
        document.getElementById('ironStat').textContent = ironNum;
        miningBlock.style.backgroundImage = 'url(/sprites/copper_ore.png)';
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
            ranOre = oresArray[Math.floor(Math.random() * oresArray.length)];
            // main mechanic
            if (ranOre == 'coal') {
                miningBlock.style.backgroundImage = 'url(/sprites/coal_ore.png)';
                coalNum++;
                document.getElementById('coalStat').textContent = coalNum
            } else if (ranOre == 'iron') {
                miningBlock.style.backgroundImage = 'url(/sprites/iron_ore.png)';
                ironNum++
                document.getElementById('ironStat').textContent = ironNum
            } else if (ranOre == 'copper') {
                miningBlock.style.backgroundImage = 'url(/sprites/copper_ore.png)';
                copperNum++
                document.getElementById('copperStat').textContent = copperNum
            }
        }
    }
}
var array = ['coal', 'iron', 'copper']