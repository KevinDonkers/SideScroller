/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    function instructionState() {
        ocean.update();
        plane.update();
    }
    states.instructionState = instructionState;

    function instructions() {
        var instructionTitleLabel;
        var instructionText;
        var arrowText;
        var gemText;
        var avatarText;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        var instructionAvatar = new createjs.Sprite(managers.Assets.atlas, "adventurer");
        var instructionGem = new createjs.Sprite(managers.Assets.atlas, "gem");
        var instructionArrow = new createjs.Sprite(managers.Assets.atlas, "arrow");
        ocean = new objects.Ocean(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display title and instructions
        instructionTitleLabel = new objects.Label(stage.canvas.width / 2, 30, "Instructions");

        instructionText = new createjs.Text("Control the Adventurer with your mouse.  " + "Pick up the ruby's to add to your multiplier.  " + "You gain more points the longer you last.  " + "Avoid the arrows, if you get hit with one you will lose a life.  " + "if you lose all 3 of your lives it's game over", constants.TEXT_FONT, constants.LABEL_COLOUR);

        instructionText.x = 20;
        instructionText.y = 80;

        instructionText.lineWidth = 600;
        instructionText.lineHeight = 35;

        game.addChild(instructionTitleLabel);
        game.addChild(instructionText);

        avatarText = new createjs.Text("ADVENTURER", constants.TEXT_FONT, constants.LABEL_COLOUR);
        arrowText = new createjs.Text("RUBY", constants.TEXT_FONT, constants.LABEL_COLOUR);
        arrowText = new createjs.Text("ARROW", constants.TEXT_FONT, constants.LABEL_COLOUR);

        instructionAvatar.x = 10;
        instructionAvatar.y = 380;

        instructionGem.x = 80;
        instructionGem.y = 400;

        instructionArrow.x = 480;
        instructionArrow.y = 430;

        game.addChild(instructionArrow);
        game.addChild(instructionGem);
        game.addChild(instructionAvatar);

        // Display Play Button
        playButton = new objects.Button(stage.canvas.width / 2, 430, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", states.playButtonClicked);

        stage.addChild(game);
    }
    states.instructions = instructions;
})(states || (states = {}));
//# sourceMappingURL=instructions.js.map
