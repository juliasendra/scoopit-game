const player = new Player();
const scoopsArr = [];
let scoopsAmount = 0;

let score = 0;
this.scoreElm = document.createElement("div");
this.scoreElm.id = "score";
this.scoreElm.textContent = "Score: " + score;
board.appendChild(this.scoreElm);

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
        scoop.moveDown();

        if (scoop.positionY < 0 - scoop.height) {
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
            clearInterval(myInterval);
        }
    }, 100);
}

function generateScoop() {
    let count = 0;
    setInterval(() => {
        count++
        const scoop = new Scoop("scoop" + count);
        scoopsArr.push(scoop);
        fallDown(scoop);
    }, 3000);
}

generateScoop();

function checkCollision(player, scoop) {
    return (
        player.positionX < scoop.positionX + scoop.width &&
        player.positionX + player.width > scoop.positionX &&
        player.positionY < scoop.positionY + scoop.height &&
        player.positionY + player.height * (scoopsAmount + 1) > scoop.positionY
    );
}
