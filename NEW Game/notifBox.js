function showMessage(message) {
    const messageBox = document.getElementById('notifications');
    messageBox.innerHTML += `<p style="margin: 10px;font-size: 1.2rem;">${message}</p>`;
}

showMessage("Welcome to Willy's Mining Corp! You will mine the block to the left and it will give you some ore. You can then sell this ore for Mine Credits ⓜ which you can trade in for better tools and upgrades. We'll start by giving you 5 coal, iron, and copper to mine, then it'll be random. Good luck! And let's see what you unlock :)");
