class Fruit {
    constructor(fruitId, level) {
        this.fallInterval;
        this.width = 5;
        this.height = 10;

        let board = document.getElementById("board");
        this.positionX = Math.floor(Math.random() * (100 - this.width));
        this.positionY = 100 - (this.height / 2);
        this.fallSpeed = level;

        this.fruitElm = document.createElement("div");
        this.fruitElm.setAttribute("id", fruitId);
        this.fruitElm.setAttribute("class", "fruit");

        board.appendChild(this.fruitElm);
        this.fruitElm.style.width = this.width + "%";
        this.fruitElm.style.height = this.height + "%";
        this.fruitElm.style.left = this.positionX + "%";
        this.fruitElm.style.bottom = this.positionY + "%";
        this.fruitElm.style.backgroundImage = fruitImagesArr[Math.floor(Math.random() * fruitImagesArr.length)];
    }

    moveDown() {
        this.positionY -= this.fallSpeed;
        this.fruitElm.style.bottom = this.positionY + "%";
    }
}
