/// <reference path="../objects/arrow.ts" />
/// <reference path="../objects/gem.ts" />
/// <reference path="../objects/adventurer.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private adventurer: objects.Adventurer;
        private gem: objects.Gem;
        private arrows = [];
        private scoreboard: objects.Scoreboard;

        constructor(adventurer: objects.Adventurer, gem: objects.Gem, arrows, scoreboard: objects.Scoreboard) {
            this.adventurer = adventurer;
            this.gem = gem;
            this.arrows = arrows;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between plane and any cloud object
        private adventurerAndArrow(arrow: objects.Arrow) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.adventurer.image.x;
            p1.y = this.adventurer.image.y;
            p2.x = arrow.image.x;
            p2.y = arrow.image.y;
            if (this.distance(p1, p2) < ((this.adventurer.height / 2) + (arrow.height / 2))) {
                createjs.Sound.play("hit").volume = 1;
                this.scoreboard.lives -= 1;
                arrow.reset();
            }
        }

        // check collision between plane and island
        private adventurerAndGem() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.adventurer.image.x;
            p1.y = this.adventurer.image.y;
            p2.x = this.gem.image.x;
            p2.y = this.gem.image.y;
            if (this.distance(p1, p2) < ((this.adventurer.height / 2) + (this.gem.height / 2))) {
                createjs.Sound.play("yay").volume = 0.5;
                this.scoreboard.multiplier += 1;
                this.gem.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.ARROW_NUM; count++) {
                this.adventurerAndArrow(this.arrows[count]);
            }
            this.adventurerAndGem();
        }
    }
} 