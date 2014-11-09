/// <reference path="../managers/asset.ts" />
module objects {
    // Plane Class
    export class Adventurer {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "adventurer");
            this.image.x = 40;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width * 0.5;
            this.image.regY = this.height * 0.5;
            game.addChild(this.image);
        }

        update() {
            this.image.y = this.stage.mouseY;
        }
        destroy() {
            game.removeChild(this.image);
        }
    }
} 