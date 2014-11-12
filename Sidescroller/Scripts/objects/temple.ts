/// <reference path="../managers/asset.ts" />
module objects {
    // Temple Class
    export class Temple {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("temple"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }

        //updates the x value of the background every frame to look like its scrolling
        update() {
            this.image.x -= this.dx;
            if (this.image.x <= 640) {
                this.reset();
            }
        }

        //sets the background image back to the start
        reset() {
            this.image.x = 1920;
        }

        //removes the background from the game container
        destroy() {
            game.removeChild(this.image);
        }
    }

}