﻿/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/temple.ts" />
/// <reference path="objects/adventurer.ts" />
/// <reference path="objects/arrow.ts" />
/// <reference path="objects/gem.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/gametext.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/instructions.ts" />

//create the stage, game container and theme sound instance
var stage: createjs.Stage;
var game: createjs.Container;
var themeSound: createjs.SoundInstance;

//game objects
var temple: objects.Temple;
var adventurer: objects.Adventurer;
var gem: objects.Gem;
var arrows = []; // Arrows array;
var scoreboard: objects.Scoreboard;

//collision manager
var collision: managers.Collision;

//buttons
var tryAgain: objects.Button;
var playButton: objects.Button;
var instructionsButton: objects.Button;

//state variables
var currentState: number;
var currentStateFunction;

// Preload function - Loads Assets and initializes game;
function preload(): void {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}

// init called after Assets have been loaded.
function init(): void {
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
function gameLoop(event): void {
    currentStateFunction();
    stage.update();
}

//state machine
function changeState(state: number): void {
    // Launch Various "screens"
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

            //if the music isnt playing then play it
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