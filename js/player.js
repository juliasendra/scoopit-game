class Player {
    constructor() {
        this.width = 10;
        this.height = 10;
        this.positionX = 50 - (this.width / 2);
        this.positionY = 0;

        this.playerElm = document.getElementById("player");
        this.playerElm.style.width = this.width + "vw";
        this.playerElm.style.height = this.height + "vh";
        this.playerElm.style.left = this.positionX + "vw";
        this.playerElm.style.bottom = this.positionY + "vh";

        this.scoopsInCone = 0;
    }
    moveLeft() {
        this.positionX--;
        this.playerElm.style.left = this.positionX + "vw";
    }
    moveRight() {
        this.positionX++;
        this.playerElm.style.left = this.positionX + "vw";
    }
    grow() {
        this.height += 5;
        this.playerElm.style.height = this.height + 'vh';
        this.scoopsInCone++;
        switch (this.scoopsInCone) {
            case 1:
                this.playerElm.style.backgroundImage = "url(../images/1-pink-scoop.png)";
                break;
            case 2:
                this.playerElm.style.backgroundImage = "url(../images/2-pink-scoops.png)";
                break;
            case 3:
                this.playerElm.style.backgroundImage = "url(../images/3-pink-scoops.png)";
                break;

        }
    }
    reset() {
        this.height = 10;
        this.playerElm.style.height = 10 + 'vh';
        this.scoopsInCone = 0;
        this.playerElm.style.backgroundImage = "url(../images/cone.png)";
    }

}