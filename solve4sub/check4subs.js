const Key = 'AIzaSyCaNo8MZLcpQyQX-xHX87iLjaHxrwzN-TM';
const username = 'UCKNezQZN9hQfW1ixB7iJDGg';
const subCount = document.getElementById('subCount');
var alarm = new Audio("alert.mp3")
var oldCount;

let getCount = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${username}&key=${Key}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            subCount.innerHTML = data["items"][0].statistics.subscriberCount;
            var newCount = data["items"][0].statistics.subscriberCount;
            if (newCount != oldCount) {
                document.getElementById("solveScreen").style.display = "block";
                alarm.play();
            }
            oldCount = newCount;
        })
}

setInterval(function () {
    getCount();
    console.log("updated!")
}, 30000);

function done() {
    document.getElementById("solveScreen").style.display = "none";
    alarm.pause();
    alarm.currentTime = 0;
}

getCount();
