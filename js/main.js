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
            if (scoop.positionY < 0 - scoop.height){
                scoop.scoopElm.remove(); 
            }
            if (
            player.positionX < scoop.positionX + scoop.width &&
            player.positionX + player.width > scoop.positionX &&
            player.positionY < scoop.positionY + scoop.height &&
            player.positionY + player.height > scoop.positionY
            ){
                scoop.scoopElm.remove();
                let newHeight = player.height * 2;
                player.playerElm.style.height = newHeight + "vh";
            }
        }
    ,100);
}

fallDown();