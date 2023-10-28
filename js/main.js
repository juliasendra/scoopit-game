const player = new Player();
const scoopsArr = [];




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

function generateScoop() {
    let count = 0;
    setInterval(() => {
        count++
        const scoop = new Scoop("scoop" + count);
        scoopsArr.push(scoop);
        fallDown(scoop)
    }, 3000);
}

generateScoop();