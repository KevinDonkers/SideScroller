/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Plane Class
    var Adventurer = (function () {
        function Adventurer(stage, game) {
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
        Adventurer.prototype.update = function () {
            this.image.y = this.stage.mouseY;
        };
        Adventurer.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Adventurer;
    })();
    objects.Adventurer = Adventurer;
})(objects || (objects = {}));
//# sourceMappingURL=adventurer.js.map
