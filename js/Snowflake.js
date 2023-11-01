class Snowflake {
    constructor(snowflakeId, playerPositionX, playerPositionY) {
        this.width = 5;
        this.height = 10;

        this.positionX = playerPositionX
        this.positionY = playerPositionY;
        this.speed = 5;

        this.snowflakeElm = document.createElement("div");
        this.snowflakeElm.setAttribute("id", snowflakeId);
        this.snowflakeElm.setAttribute("class", "snowflake");
        
        board.appendChild(this.snowflakeElm);
        this.snowflakeElm.style.width = this.width + "%";
        this.snowflakeElm.style.height = this.height + "%";
        this.snowflakeElm.style.left = this.positionX + "%";
        this.snowflakeElm.style.bottom = this.positionY + "%";
        this.snowflakeElm.style.backgroundImage = "url(./images/snowflake.png";
    }

    moveUp() {
        this.positionY += this.speed;
        this.snowflakeElm.style.bottom = this.positionY + "%";
    }
}