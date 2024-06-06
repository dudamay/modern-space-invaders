class Player {
    constructor(){
        this.velocity = {
            x: 0,
            y: 0
        };

        this.rotation = 0;
        this.opacity =  1;
        const image = new Image();
        image.src = "./img/spaceship.png";
        image.onload = () => {
            const scale = 0.15;
            this.image = image;
            this.width = image.width * scale;
            this.height = image.height * scale;
            this.position = {
                x: Canvas.width / 2 - this.width / 2,
                y: Canvas.height - this.height - 20
            };
            this.particle = [];
            this.frames = 0;
        };
    }  

    draw(){
        c.save();
        c.globalAlpha = this.opacity;
        c.translate(
            this.position.x + Player.width / 2, 
            this.position.y + Player.height / 2
        );

         c.rotate(this.rotation);
         c.translate(
            -Player.position.x - Player.width /2,
            -Player.position.y - Player.height / 2
         );

         c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );

        c.restore(); 
      }
}
