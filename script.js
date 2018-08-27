var canvas = document.getElementById('myCanvas'),
    ctx = canvas.getContext('2d'),
    x = canvas.width / 2,
    y = canvas.height - 30,
    dx = 2,
    dy = -2,
    ballRadius = 10;

function colorHex() {
    var hex = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return hex;
}

let randomColor = "#0095DD";
    
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = randomColor;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
        randomColor = colorHex();
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
        randomColor = colorHex();
    }

    x += dx;
    y += dy;
}
setInterval(draw, 10);