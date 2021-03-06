﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/adventurer.ts" />
/// <reference path="../objects/arrow.ts" />
/// <reference path="../objects/gem.ts" />
/// <reference path="../objects/temple.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />

module states {
    export function gameOverState() {
        temple.update();
    }

    // Restart Game when Try Again Button is clicked
    export function tryAgainClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    // Game Over Scene
    export function gameOver() {
        var gameOverLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;
        var finalMultiplierLabel: objects.Label;
        var finalMultiplier: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        temple = new objects.Temple(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "GAME OVER");
        game.addChild(gameOverLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 160, scoreboard.score.toString());
        game.addChild(finalScore);

        // Display Final Multiplier Label
        finalMultiplierLabel = new objects.Label(stage.canvas.width / 2, 200, "FINAL MULTIPLIER");
        game.addChild(finalMultiplierLabel);

        // Display Final Multiplier
        finalMultiplier = new objects.Label(stage.canvas.width / 2, 240, "X" + scoreboard.multiplier.toString());
        game.addChild(finalMultiplier);

        // Display Try Again Button
        tryAgain = new objects.Button(stage.canvas.width / 2, 350, "tryAgainButton");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);

        stage.addChild(game);

    }
}