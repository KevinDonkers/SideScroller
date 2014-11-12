/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
module objects {
    //button class
    export class Button extends createjs.Sprite {
        constructor(x:number, y:number, buttonIDString: string) {
            super(managers.Assets.atlas, buttonIDString);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }

        //gives the button its functionality
        setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }

        //sets the transparency to 80% when the mouse is over
        onButtonOver() {
            this.alpha = 0.8;
        }

        //sets the alpha back to 100% when the mouse leaves the button
        onButtonOut() {
            this.alpha = 1;
        }
    }
} 