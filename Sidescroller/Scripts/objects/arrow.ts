﻿/// <reference path="../managers/asset.ts" />
module objects {
    // Arrow class
    export class Arrow {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "arrow");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }

        //updates the arrow every frame
        update() {
            this.image.x -= this.dx;
            if (this.image.x <= (0 - this.height)) {
                this.reset();
            }
        }

        //resets the arrow back to the right of the screen
        reset() {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 10);
            this.image.x = this.stage.canvas.width + this.width;
        }

        //removes the arrow from the game container
        destroy() {
            game.removeChild(this.image);
        }
    }

}