//@ts-check

import { canvas, ctx } from "./common/canvas.js";
import { GameManager } from "./game-manager.js";

let game = new GameManager();

game.Initialize();

let lastTimestamp = 0;

function gameLoop(timestamp) {
	let elapsedTime = timestamp - lastTimestamp;
	lastTimestamp = timestamp;

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	game.Update(elapsedTime);
	game.draw();

	window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);
