/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ocean Class
    var Ocean = (function () {
        function Ocean(stage, game) {
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
        Ocean.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= 640) {
                this.reset();
            }
        };

        Ocean.prototype.reset = function () {
            this.image.x = 1920;
        };

        Ocean.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Ocean;
    })();
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map
