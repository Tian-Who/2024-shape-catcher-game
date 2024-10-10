//@ts-check
import { CollectableItem } from "./collectible-base.js";

export class simpleGoodItem extends CollectableItem {
	constructor(x = 0, y = 0) {
		super(x, y);
		this.width = 50;
		this.height = 50;
		this.alpha = 0;

		this.blink = {
			Interval: 500,
			lastBlink: 0,
			isVisable: true,
		};

		this.lastAlphaTime = 0;

		this.despawnTime = 10 * 1000;
		this.spawnInTime = 5 * 1000;

		this.DespawnWarningTime = 3 * 1000;

		this.lifetime = 0;
		this.color = "hsla(112, 100%, 50%, 0%)";
	}

	Update(elapsedTime) {
		if (!this.isCollectable) {
			return;
		}
		this.lifetime += elapsedTime;

		if (this.lifetime < this.spawnInTime) {
			this.alpha = Math.floor((this.lifetime / this.spawnInTime) * 100);
		}
		if (this.lifetime > this.despawnTime - this.DespawnWarningTime) {
	
			this.blink.lastBlink += elapsedTime;
			if (this.blink.lastBlink > this.blink.Interval) {
				if (this.blink.isVisable) {
					this.alpha = 0;
				} else {
					this.alpha = 100;
				}
				this.blink.lastBlink = 0;
				this.blink.isVisable = !this.blink.isVisable;
			}
		}
		if (this.lifetime > this.despawnTime) {
			this.alpha = 0;
			this.isCollectable = false;
			this.isCollected = false;
		}
		this.color = `hsla(112, 100%, 50%, ${this.alpha}%)`;
	}
}
