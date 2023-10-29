class Scoop {
    constructor(scoopId) {
        this.width = 10;
        this.height = 10;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
        this.positionY = 100 - (this.height / 2);
        this.fallSpeed = 2;

        this.scoopElm = document.createElement("div");
        this.scoopElm.setAttribute("id", scoopId);
        this.scoopElm.setAttribute("class", "scoop");
        let board = document.getElementById("board");
        board.appendChild(this.scoopElm);
        this.scoopElm.style.width = this.width + "vw";
        this.scoopElm.style.height = this.height + "vh";
        this.scoopElm.style.left = this.positionX + "vw";
        this.scoopElm.style.bottom = this.positionY + "vh";
        this.scoopElm.style.backgroundImage = "url(../images/pink-scoop.png";
    }

    moveDown() {
        this.positionY--;
        this.scoopElm.style.bottom = this.positionY + "vh";
    }
}
