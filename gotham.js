class Gotham {
    constructor(game) {
        this.game = game;
        
        this.animator = new Animator(ASSET_MANAGER.getAsset("./gotham.png"), 0, 0,1511,850,1,1);
        this.x = 0;
        this.y = 0;
        this.speed = 200;
    };

    update() {
       
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick,ctx,0,0);
    };
};