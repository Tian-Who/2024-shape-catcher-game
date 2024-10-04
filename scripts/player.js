//@ts-check
import { canvas, ctx } from "./common/canvas.js";
export class Player {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 100;
        


        this.speed = 10;

        this.keybinding = {
            up:"ArrowUp",
            down: "ArrowDown",
            right: "ArrowRight",
            left: "ArrowLeft"
        }
 
        this.moving = {
            up:false,
            down: false,
            right: false,
            left: false

        }
        this.wireupKeyboard();
    }
    wireupKeyboard() {
        window.addEventListener("keydown", (e) => {
            
            console.log(this.moving)
            switch(e.code){
                case this.keybinding.up:
                    this.moving.up= true
                    break;

                case this.keybinding.down:
                    this.moving.down= true
                    break;

                case this.keybinding.left:
                    this.moving.left= true
                    break;

                case this.keybinding.right:
                    this.moving.right= true
                    break;
                    
                
            }
        });
        window.addEventListener("keyup", (e) => {
            console.log(this.moving)
            switch(e.code){
                case this.keybinding.up:
                    this.moving.up= false
                    break;
                    
                case this.keybinding.down:
                    this.moving.down= false
                    break;

                case this.keybinding.left:
                    this.moving.left= false
                    break;

                case this.keybinding.right:
                    this.moving.right= false
                    break;
            }
        });
    
    }
    update() {
        let dirX = 0;
        let dirY = 0;
        if(this.moving.up){
            dirY = - 1; console.log("pop")
        }
        if(this.moving.down){
            dirY = + 1;
        }
        if(this.moving.left){
            dirX = - 1;
        }
        if(this.moving.right){
            dirX = + 1;
        }
        this.x += this.speed * dirX;
        this.y += this.speed * dirY;
        
        if(this.x < 0){
            this.x=0;
        }
                
        if(this.y < 0){
            this.y=0;
        }
        if(this.x + this.width > canvas.width){
            this.x=canvas.width - this.width;
        }
        if(this.y + this.height > canvas.height){
            this.y=canvas.height - this.height;
        }
    }

    draw() {
        // console.log("hhahhahah")
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);

    }
}