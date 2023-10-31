const player = new Player();
const scoopsArr = [];
const fruitsArr = [];
const fruitImagesArr = ["url(../images/orange.png", "url(../images/pear.png", "url(../images/watermelon.png", "url(../images/peach.png", "url(../images/apple.png"];
let scoopsAmount = 0;

const bubbleSound = document.getElementById("bubble");
const negativeBeeps = document.getElementById("negativeBeeps");

let scoopsInterval;
let fruitsInterval;

const gameOverElement = document.getElementById("gameOver");
gameOverElement.style.display = "none";
let isGameOver = false;

let score = 0;
this.scoreElm = document.createElement("div");
this.scoreElm.id = "score";
this.scoreElm.textContent = "Score: " + score;
board.appendChild(this.scoreElm);

let level = 1;
this.levelElm = document.createElement("div");
this.levelElm.id = "level";
this.levelElm.textContent = "Level: " + level;
board.appendChild(this.levelElm);

document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "ArrowLeft":
            player.moveLeft();
            break;
        case "ArrowRight":
            player.moveRight();
            break;
    }
});

function fallDown(scoop) {
    let myInterval = setInterval(function () {
        if (scoop.positionY < 0 - scoop.height || this.isGameOver) {
            scoop.scoopElm.remove();
            clearInterval(myInterval);
            return;
        }

        if (checkCollision(player, scoop)) {
            scoop.scoopElm.remove();
            if (scoopsAmount < 3) {
                scoopsAmount++;
                player.grow();
            } else {
                scoopsAmount = 0;
                player.reset();
                score++;
                this.scoreElm.textContent = "Score: " + score;
            }
            bubbleSound.play();
            clearInterval(myInterval);
        }

        scoop.moveDown();
    }, 100);
}

function fruitFallDown(fruit) {
    let myInterval = setInterval(function () {
        if (fruit.positionY < 0 - fruit.height || this.isGameOver) {
            fruit.fruitElm.remove();
            clearInterval(myInterval);
            return;
        }

        if (checkCollision(player, fruit)) {
            gameOver();
            return;
        }
        fruit.moveDown();
    }, 100);
}

function snowflakeGoUp(snowflake) {
    let myInterval = setInterval(function () {
        if (snowflake.positionY > 100 - snowflake.height || this.isGameOver) {
            snowflake.snowflakeElm.remove();
            clearInterval(myInterval);
            return;
        }

        snowflake.moveUp();
    }, 100);
}

function generateScoop() {
    let count = 0;
    scoopsInterval = setInterval(() => {
        count++
        const scoop = new Scoop("scoop" + count);
        scoopsArr.push(scoop);
        fallDown(scoop);
    }, 3000);
}

generateScoop();

function generateFruit() {
    let count = 0;
    fruitsInterval = setInterval(() => {
        count++
        const fruit = new Fruit("fruit" + count);
        fruitsArr.push(fruit);
        fruitFallDown(fruit);
    }, 2000);
}

generateFruit();

function checkCollision(player, scoop) {
    return (
        player.positionX < scoop.positionX + scoop.width &&
        player.positionX + player.width > scoop.positionX &&
        player.positionY < scoop.positionY + scoop.height &&
        player.positionY + player.height > scoop.positionY
    );
}

function checkFruitCollision(player, fruit) {
    return (
        player.positionX < fruit.positionX + fruit.width &&
        player.positionX + player.width > fruit.positionX &&
        player.positionY < fruit.positionY + fruit.height &&
        player.positionY + player.height > fruit.positionY
    );
}

function gameOver() {
    this.isGameOver = true;

    clearInterval(scoopsInterval);
    clearInterval(fruitsInterval);

    player.playerElm.remove();
    negativeBeeps.play();

    const gameOver = document.getElementById("gameOver");
    const restartButton = document.getElementById("restartButton");

    gameOver.style.display = "block";
    
    restartButton.addEventListener("click", () => {
        resetGame();
    });
}

function resetGame() {
    gameOverElement.style.display = "none";
    location.reload();

}

document.addEventListener("keydown", (e) => {
    if (e.key === " ") {
        shootSnowflake();
        e.preventDefault(); 
}
});

function shootSnowflake() {
    const playerPosition = player.getPlayerPosition();
    const snowflakeId = "snowflake" + Date.now();
    const snowflake = new Snowflake(snowflakeId, playerPosition.positionX, playerPosition.positionY);
    snowflakeGoUp(snowflake)
}