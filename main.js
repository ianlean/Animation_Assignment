const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./theBat.png")
ASSET_MANAGER.queueDownload("./gotham.png")

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	gameEngine.addEntity(new Batman(gameEngine));
	gameEngine.addEntity(new Gotham(gameEngine));
	gameEngine.init(ctx);

	gameEngine.start();
});
