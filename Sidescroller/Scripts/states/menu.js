﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    function playButtonClicked(event) {
        stage.removeChild(game);
        plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;

    function instructionsButtonClicked(event) {
        stage.removeChild(game);
        plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTION_STATE;
        changeState(currentState);
    }
    states.instructionsButtonClicked = instructionsButtonClicked;

    function menuState() {
        ocean.update();
        plane.update();
    }
    states.menuState = menuState;

    function menu() {
        var gameNameLabel;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        plane = new objects.Plane(stage, game);

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
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map
