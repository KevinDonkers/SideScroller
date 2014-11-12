/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Temple Class
    var Temple = (function () {
        function Temple(stage, game) {
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
        Temple.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= 640) {
                this.reset();
            }
        };

        //sets the background image back to the start
        Temple.prototype.reset = function () {
            this.image.x = 1920;
        };

        //removes the background from the game container
        Temple.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Temple;
    })();
    objects.Temple = Temple;
})(objects || (objects = {}));
//# sourceMappingURL=temple.js.map
