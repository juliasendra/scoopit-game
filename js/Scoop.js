class Scoop {
    constructor(scoopId) {
        this.width = 5;
        this.height = 10;

        let board = document.getElementById("board");
        this.positionX = Math.floor(Math.random() * (100 - this.width));
        this.positionY = 100 - (this.height / 2);
        this.fallSpeed = 2;

        this.scoopElm = document.createElement("div");
        this.scoopElm.setAttribute("id", scoopId);
        this.scoopElm.setAttribute("class", "scoop");
        
        board.appendChild(this.scoopElm);
        this.scoopElm.style.width = this.width + "%";
        this.scoopElm.style.height = this.height + "%";
        this.scoopElm.style.left = this.positionX + "%";
        this.scoopElm.style.bottom = this.positionY + "%";
        this.scoopElm.style.backgroundImage = "url(./images/pink-scoop.png";
    }

    moveDown() {
        this.positionY--;
        this.scoopElm.style.bottom = this.positionY + "%";
    }
}
