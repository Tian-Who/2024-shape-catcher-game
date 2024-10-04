//@ts-check
import { CollectableItem } from "./collectible-base.js";

export class simpleGoodItem extends CollectableItem {
    constructor(x = 0, y = 0){
        super(x, y);
        this.width = 50;
        this.height= 50;
        this.alpha = 0;
        this.lastAlphaTime = 0;
        this.despawnTime = 10 * 1000;
        this.spawnInTime = 5 * 1000;
        this.lifetime = 0;

    }

    Update(elapsedTime){
        this.lifetime += elapsedTime;

        if(this.lifetime < this.spawnInTime){
            this.alpha = Math.floor((this.lifetime/this.spawnInTime) * 100);
            this.color = `hsls(112, 100%, 50%, ${this.alpha})%`
        }
    }
}