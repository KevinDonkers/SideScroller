/// <reference path="../objects/button.ts" />
/// <reference path="../objects/adventurer.ts" />
/// <reference path="../objects/arrow.ts" />
/// <reference path="../objects/gem.ts" />
/// <reference path="../objects/temple.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
module states {
    export function playState() {
        temple.update();
        gem.update();
        adventurer.update();

        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            arrows[count].update();
        }

        collision.update();
        scoreboard.score += 1 * scoreboard.multiplier;
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            adventurer.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }

    // play state Function
    export function play(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        temple = new objects.Temple(stage, game);
        gem = new objects.Gem(stage, game);
        adventurer = new objects.Adventurer(stage, game);

        // Show Cursor
        stage.cursor = "none";

        // Create multiple clouds
        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            arrows[count] = new objects.Arrow(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(adventurer, gem, arrows, scoreboard);

        stage.addChild(game);
    }
}