class Player {
    constructor() {
        this.width = 5;
        this.height = 10;
        this.positionX = 50 - (this.width / 2);
        this.positionY = 0;

        this.playerElm = document.getElementById("player");
        this.playerElm.style.width = this.width + "%";
        this.playerElm.style.height = this.height + "%";
        this.playerElm.style.left = this.positionX + "%";
        this.playerElm.style.bottom = this.positionY + "%";

        this.scoopsInCone = 0;
    }

    getPlayerPosition() {
        return {
            positionX: this.positionX,
            positionY: this.positionY
        };
    }

    moveLeft() {
        if (this.positionX < 0) return;

        this.positionX--;
        this.playerElm.style.left = this.positionX + "vw";
    }
    moveRight() {
        if (this.positionX + this.width >= 100) return;

        this.positionX++;
        this.playerElm.style.left = this.positionX + "vw";
    }
    grow() {
        this.height += 5;
        this.playerElm.style.height = this.height + '%';
        this.scoopsInCone++;
        switch (this.scoopsInCone) {
            case 1:
                this.playerElm.style.backgroundImage = pinkScoop1;
                break;
            case 2:
                this.playerElm.style.backgroundImage = pinkScoop2;
                break;
            case 3:
                this.playerElm.style.backgroundImage = pinkScoop3;
                break;
            case 4:
                this.playerElm.style.backgroundImage = pinkScoop4;
                break;
            case 5:
                this.playerElm.style.backgroundImage = pinkScoop5;
                break;
        }
    }
    reset() {
        this.height = 10;
        this.playerElm.style.height = 10 + '%';
        this.scoopsInCone = 0;
        this.playerElm.style.backgroundImage = "url(./images/cone.png)";
    }

}