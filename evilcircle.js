class EvilCircle {

    constructor(game, postiveX, postiveY, givenX, givenY, radius) {
        this.game = game;
        this.positiveDirectionX = postiveX;
        this.positiveDirectionY = postiveY;
        this.x = givenX;
        this.y = givenY;
        this.radius = Math.random() * 50;
        this.speed = 300;
        this.boundingcircle = new BoundingCircle(this.x,this.y,this.radius);
    };

    update() {
        this.updateCircle();
        if (this.positiveDirectionX) {
            this.x += this.speed * this.game.clockTick;
            //console.log("going right");
        } else {
            this.x -= this.speed * this.game.clockTick;
            //console.log("going left");
        }

        if (this.positiveDirectionY) {
            this.y += this.speed * this.game.clockTick;
            //console.log("going right");
        } else {
            this.y -= this.speed * this.game.clockTick;
            //console.log("going left");
        }

        if (this.x >= 1600 && this.positiveDirectionX) {
                this.positiveDirectionX = false;
                this.regenerate();
            //console.log("going left");
        }
        if (this.x <= -100 && !this.positiveDirectionX) {
            this.positiveDirectionX = true;
            this.regenerate();
            //console.log("going right");
        }

        if (this.y <= -200 && !this.positiveDirectionY) {
                this.positiveDirectionY = true;
                this.regenerate();
                //console.log("going up");
        }
        if (this.y >= 1000 && this.positiveDirectionY) {
            this.positiveDirectionY = false;
            this.regenerate();
            //console.log("going down");
        }
    };

    draw(ctx) {
        if (this.game.mouse) {
            ctx.strokeStyle = "Red";
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = "Red";
            ctx.fill();
            ctx.stroke();
        }
    };

    updateCircle() {
        this.boundingcircle = new BoundingCircle(this.x, this.y, this.radius);
    }

    regenerate() {
        this.radius = Math.random()* 100;
    }
};