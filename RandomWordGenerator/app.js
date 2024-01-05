console.log("Script is running!");

function newWord() {
    const EnWords = fetch('./EnWordList.js');
    const randIndex = Math.floor(Math.random() * EnWords.length);
    const randWord = EnWords[randIndex];
    const generatedWord = document.getElementById("generatedWord");
    generatedWord.textContent = randWord;
    console.log(randWord);
}

console.log("Script still running!");