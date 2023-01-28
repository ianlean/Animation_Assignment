const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./RedCircle.png");
ASSET_MANAGER.queueDownload("./black.png");
ASSET_MANAGER.queueDownload("./Minecraft Damage (Oof) - Sound Effect (HD).mp3");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	gameEngine.addEntity(new EvilCircle(gameEngine, true, false, 50, 20, 25));
	gameEngine.addEntity(new EvilCircle(gameEngine, false,true,1300, 100,22));
	gameEngine.addEntity(new EvilCircle(gameEngine, false,false,1300, 400,40));
	gameEngine.addEntity(new EvilCircle(gameEngine, true,true,1300, 400,50));
	gameEngine.addEntity(new EvilCircle(gameEngine, false,true,1000, 700,52));
	gameEngine.addEntity(new EvilCircle(gameEngine, true,false,200, 600,84));
	gameEngine.addEntity(new EvilCircle(gameEngine, true,true,100, 40,50));
	gameEngine.addEntity(new EvilCircle(gameEngine, false,true,2000, 70,52));
	gameEngine.addEntity(new EvilCircle(gameEngine, true,false,2200, 200,84));

	gameEngine.addEntity(new EvilCircle(gameEngine, true,false,50, 60,84));
	gameEngine.addEntity(new EvilCircle(gameEngine, true,true,-1100, 40,50));
	gameEngine.addEntity(new EvilCircle(gameEngine, false,true,-100, 70,52));
	gameEngine.addEntity(new EvilCircle(gameEngine, true,false,1500, 20,84));
	gameEngine.addEntity(new Dot(gameEngine));
	gameEngine.init(ctx);
	gameEngine.start();
});
