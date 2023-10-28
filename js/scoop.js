class Scoop {
    constructor() {
        this.width = 10;
        this.height = 15;
        this.positionX = 50 - (this.width/2);
        this.positionY = 100 - (this.height/2);
        this.fallSpeed = 2;

        this.scoopElm = document.getElementById("scoop");
        this.scoopElm.style.width = this.width + "vw";
        this.scoopElm.style.height = this.height + "vh";
        this.scoopElm.style.left = this.positionX + "vw";
        this.scoopElm.style.bottom = this.positionY + "vh";
    }

    moveDown() {
        this.positionY--;
        this.scoopElm.style.bottom = this.positionY + "vh";
    }
}
