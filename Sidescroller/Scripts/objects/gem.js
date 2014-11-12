/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Gem Class
    var Gem = (function () {
        function Gem(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "gem");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }
        //updates the gem every frame
        Gem.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= (0 - this.width)) {
                this.reset();
            }
        };

        //puts the gem at a random height back at the right of the screen
        Gem.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.width);
            this.image.x = this.stage.canvas.width + this.width;
        };

        //removes the gem from the game container
        Gem.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Gem;
    })();
    objects.Gem = Gem;
})(objects || (objects = {}));
//# sourceMappingURL=gem.js.map
