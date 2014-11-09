/// <reference path="../objects/arrow.ts" />
/// <reference path="../objects/gem.ts" />
/// <reference path="../objects/adventurer.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(adventurer, gem, arrows, scoreboard) {
            this.arrows = [];
            this.adventurer = adventurer;
            this.gem = gem;
            this.arrows = arrows;
            this.scoreboard = scoreboard;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        };

        // check collision between plane and any cloud object
        Collision.prototype.adventurerAndArrow = function (arrow) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.adventurer.image.x;
            p1.y = this.adventurer.image.y;
            p2.x = arrow.image.x;
            p2.y = arrow.image.y;
            if (this.distance(p1, p2) < ((this.adventurer.height / 2) + (arrow.height / 2))) {
                createjs.Sound.play("hit").volume = 1;
                this.scoreboard.lives -= 1;
                arrow.reset();
            }
        };

        // check collision between plane and island
        Collision.prototype.adventurerAndGem = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.adventurer.image.x;
            p1.y = this.adventurer.image.y;
            p2.x = this.gem.image.x;
            p2.y = this.gem.image.y;
            if (this.distance(p1, p2) < ((this.adventurer.height / 2) + (this.gem.height / 2))) {
                createjs.Sound.play("yay").volume = 0.5;
                this.scoreboard.multiplier += 1;
                this.gem.reset();
            }
        };

        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var count = 0; count < constants.CLOUD_NUM; count++) {
                this.adventurerAndArrow(this.arrows[count]);
            }
            this.adventurerAndGem();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
