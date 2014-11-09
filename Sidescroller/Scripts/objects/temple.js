/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ocean Class
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
        Temple.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= 640) {
                this.reset();
            }
        };

        Temple.prototype.reset = function () {
            this.image.x = 1920;
        };

        Temple.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Temple;
    })();
    objects.Temple = Temple;
})(objects || (objects = {}));
//# sourceMappingURL=temple.js.map
