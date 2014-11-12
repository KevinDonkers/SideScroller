/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Arrow class
    var Arrow = (function () {
        function Arrow(stage, game) {
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
        Arrow.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= (0 - this.height)) {
                this.reset();
            }
        };

        //resets the arrow back to the right of the screen
        Arrow.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 10);
            this.image.x = this.stage.canvas.width + this.width;
        };

        //removes the arrow from the game container
        Arrow.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Arrow;
    })();
    objects.Arrow = Arrow;
})(objects || (objects = {}));
//# sourceMappingURL=arrow.js.map
