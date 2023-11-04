// Drawing the road
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath(); ctx.moveTo(730, 0);
ctx.lineTo(70, 0);
ctx.lineTo(30, 500);
ctx.lineTo(770, 500);
ctx.lineTo(730, 0);
ctx.stroke();
ctx.fill();

// Player
var player = {
    x: 200,
    y: 200,
    draw: function() {
        ctx.fillStyle = "green";
        ctx.fillRect(player.x, player.y - 20, 20, 20);
    }
}

player.draw();
