
var tutorialCopper = 5;
miningBlock.style.backgroundColor = 'rgb(25, 25, 25)';

miningBlock.onclick = function () {
    if (coalNum < 3.1) {
        coalNum++;
        document.getElementById('coalStat').textContent = coalNum;
    } else if (coalNum < 4.9){
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
    } else if (copperNum < 4.9) {
            copperNum++;
            document.getElementById('copperStat').textContent = copperNum;
        }
    }