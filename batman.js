class Batman {

    constructor(game) {
        this.game = game;
        
        this.animator = new Animator(ASSET_MANAGER.getAsset("./theBat.png"), 0, 0,243,430,6,0.15);
        this.x = 0;
        this.y = 0;
        this.speed = 200;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick,ctx,this.x,this.y);
    };
};