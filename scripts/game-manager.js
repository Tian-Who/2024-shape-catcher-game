//@ts-check

import { canvas } from "./common/canvas.js";
import { Player } from "./player.js";

import { simpleGoodItem } from "./collectibles/good.js";
export class GameManager {
	constructor() {
		this.players = [];
		this.collectables = [];
		this.enemies = [];

		this.isGameOver = false;

		this.goodSpawn = {
			lastTime: 0,
			nextTime: Math.min(rand(15), 5),
			getNewNext: function () {
				this.nextTime = Math.min(rand(15), 5);
			},
		};
	}

	Initialize() {
		let p1 = new Player(canvas.width / 2, canvas.height / 2);
		p1.x -= p1.width / 2;
		p1.y -= p1.height / 2;
		this.players.push(p1);
		let p2 = new Player(canvas.width / 2, canvas.height / 2);
		p2.x -= p2.width / 2 + 500;
		p2.y -= p2.height / 2;
		p2.color = "red";
		p2.keybinding = {
			up: "KeyW",
			down: "KeyS",
			right: "KeyD",
			left: "KeyA",
		};
		this.players.push(p2);

		// this.players = [p1, p2];

		let c = new simpleGoodItem(10, 10);
		this.collectables = [c];
	}

	Update(elapsedTime) {
		this.players.forEach((p) => {
			p.update();
		});

		this.collectables.forEach((c) => {
			c.Update(elapsedTime);
		});
	}

	spawner(elapsedTime) {}
	draw() {
		this.players.forEach((p) => {
			p.draw();
		});

		this.collectables.forEach((c) => {
			c.draw();
		});
	}
}

function rand(max = 100) {
	let r = Math.floor(Math.random() * max);
	return r;
}
