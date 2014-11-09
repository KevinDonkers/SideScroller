/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Island Class
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
        Gem.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= (0 - this.width)) {
                this.reset();
            }
        };

        Gem.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.width);
            this.image.x = this.stage.canvas.width + this.width;
        };

        Gem.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Gem;
    })();
    objects.Gem = Gem;
})(objects || (objects = {}));
//# sourceMappingURL=gem.js.map
