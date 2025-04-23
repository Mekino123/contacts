const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let playerimg = new Image ();
playerImg.src = "ship.png"; // path to the ship image

let playerX = 50;
let playerY = canvas.height / 2;
const playerwidth = 50; // adjust width of the player
const playerwidth = 50; //Adjust height of the playr
const playerspeed = 5;

let obstacleX = canvas.clientWidth;
let obstacleY = canvas.height / 2;
const obstacleWidth = 20;
const obstacle.Height = 20;
const obstacleSpeed = 3;

let collision = false;

function drawPlayer () {
     if (playerImg.complete) {
        //check if the image is loaded
        ctx.drawImage(playerimg, playerX, playerY, playerwidth, playerHeight);
     }
}

function drawObstacle() {
    ctx.fillstyle = collision ? "red" : "grey"; //change color to red when collision occurs
    ctx.fillRect(obstacleX, obstacleY, obstacleWidth, obstacleHeight);
}

function moveObstacle() {
    obstacleX -= obstacleSpeed;
    if (obstacleX + obstacleWidth < 0) {
        obstacleX = canvas.Width;
        obstacleY = Math.random() * canvas.height;
    }
}
 
function checkcollision() {
    if (
        playerX < obstacleX + obstacleWidth &&
        playerX + playerwidth > obstacleX &&
        playerY < obstacleY + obstacleHeight &&
        playerY + playerHeight > obstacleY
    ) {
        // Collision detected, set collision to true 
        collision = true;
     }
}

function updateGameArea() {
    ctx.clearRect(0, 0, canvas.Width,canvas.height);
    drawPlayer();
    drawObstacle();
    moveObstacle();
    checkcollision();
    requestAnimationFrame(updateGameArea);
}

document.addEventListener("keydown", (Event) => {
    if (Event.key === "Arrowup" && playerY > 0) {
        playerY -= playerspeed;
    } else if (
        Event.key === "ArrowDown" &&
        playerY + playerHeight <.height
    ) {
        playerY += playerspeed;
    }
    });

    updateGameArea();


