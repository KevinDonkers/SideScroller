﻿/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/gametext.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/instructions.ts" />
var stage;
var game;
var themeSound;

var ocean;
var plane;
var island;
var arrows = [];
var scoreboard;

var collision;

var tryAgain;
var playButton;
var instructionsButton;

var currentState;
var currentStateFunction;

// Preload function - Loads Assets and initializes game;
function preload() {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}

// init called after Assets have been loaded.
function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();
    themeSound = createjs.Sound.play('theme', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
    themeSound.volume = 0.5;
    currentState = constants.MENU_STATE;
    changeState(currentState);
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Game Loop
function gameLoop(event) {
    currentStateFunction();
    stage.update();
}

function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;

        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            if (themeSound.playState != createjs.Sound.PLAY_SUCCEEDED) {
                themeSound.play();
            }
            break;

        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;

            // instantiate game over screen
            states.gameOver();
            themeSound.stop();
            break;

        case constants.INSTRUCTION_STATE:
            currentStateFunction = states.instructionState;

            // instantiate instruction screen
            states.instructions();
            break;
    }
}
//# sourceMappingURL=game.js.map
