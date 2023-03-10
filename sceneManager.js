class SceneManager{
    

    constructor(game){
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.score = 0;

        this.player = new CharacterController(this.game,50,550);

        this.elapsedGraveTime = 0;
        this.elapsedDogTime = 0;
        this.scoreTime = 0;

        this.graveSpawns = [0.5,1,3,5];
        this.dogSpawns =[5,7,11];
        this.randomGraveSpawn = 0;
        this.randomDogSpawn = 0;
        this.GraveSpawn();
        this.DogSpawn();
        this.loadLevel(50,550);

    };


    loadLevel(x,y){
        this.game.entities = [];
        this.x =0;
        this.player.x = x;
        this.player.y = y;
        this.player.velocity = { x: 0, y: 0 };
        


       //this.player = (new CharacterController(gameEngine),50,550)

       this.game.addEntity(this.player);
       //this.game.addEntity(new Tombstone(this.game,1920,700))
       
       




    };
    addPoints(p) {
        this.scoreTime += p;
        this.draw(this.game.ctx)
    };

    GraveSpawn(){
        this.prevGraveSpawn = this.randomGraveSpawn;
        
        while(this.prevGraveSpawn === this.randomGraveSpawn){
            this.randomGraveSpawn = Math.floor(Math.random() * this.graveSpawns.length);
        }
    };

    DogSpawn(){
        this.prevDogSpawn = this.randomDogSpawn;
        
        while(this.prevDogSpawn === this.randomDogSpawn){
            this.randomDogSpawn = Math.floor(Math.random() * this.dogSpawns.length);
        }
    };
    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    update() {
        let midpoint = params.canvasWidth/2;
        this.elapsedGraveTime += this.game.clockTick;
        this.elapsedDogTime += this.game.clockTick;
    };

    draw(ctx){
        
        if(this.player.dead==true){

        } else {
            this.scoreTime += this.game.clockTick;
            ctx.font =  '60px "a"'
            ctx.fillStyle = "RED";
            this.score = Math.floor(this.scoreTime);
            ctx.fillText("SCORE:"+this.score+" ", 1000 ,100);


        }

    };

};