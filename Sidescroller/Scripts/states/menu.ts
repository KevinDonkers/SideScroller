/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/adventurer.ts" />
/// <reference path="../objects/arrow.ts" />
/// <reference path="../objects/gem.ts" />
/// <reference path="../objects/temple.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />

module states {
    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        adventurer.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    export function instructionsButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        adventurer.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTION_STATE;
        changeState(currentState);
    }

    export function menuState() {
        temple.update();
        adventurer.update();
    }

    export function menu() {
        var gameNameLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        temple = new objects.Temple(stage, game);
        adventurer = new objects.Adventurer(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "TEMPLE DIVER");
        game.addChild(gameNameLabel);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 200, "playButton");
        instructionsButton = new objects.Button(stage.canvas.width / 2, 300, "instructionsButton");
        game.addChild(playButton);
        game.addChild(instructionsButton);
        playButton.addEventListener("click", playButtonClicked);
        instructionsButton.addEventListener("click", instructionsButtonClicked);

        stage.addChild(game);
    }
} 