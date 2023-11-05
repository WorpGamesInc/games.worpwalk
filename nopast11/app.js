let numValue = 0;

function clickNum() {
    if (numValue < 11) {
    numValue = numValue + 1;
    numText.textContent = numValue;
    }

    if (numValue > 10) {
    document.getElementById('everything').style.display = 'none';
    }
}