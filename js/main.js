const player = new Player();
const scoop = new Scoop();

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

function fallDown() {
    setInterval(
        function() {
            scoop.moveDown();
        }
    ,100);
}

fallDown();