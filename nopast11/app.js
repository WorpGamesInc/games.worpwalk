let numValue = 1;

function clickNum() {
    if (numValue < 11) {
    numValue = numValue + 1;
    numText.textContent = numValue;
    }

    if (numValue > 10) {
    document.getElementById('everything').style.display = 'none';
    document.getElementById('everythingElse').style.display = 'block';
    }
}

function home() {
    window.location.href = '/';
}