/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/adventurer.ts" />
/// <reference path="../objects/arrow.ts" />
/// <reference path="../objects/gem.ts" />
/// <reference path="../objects/temple.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/gametext.ts" />
module states {
    export function instructionState() {
        temple.update();
        adventurer.update();
    }

    export function instructions() {
        var instructionTitleLabel: objects.Label;
        var instructionText: createjs.Text;
        var labelText: objects.gameText;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        var instructionAvatar = new createjs.Sprite(managers.Assets.atlas, "adventurer");
        var instructionGem = new createjs.Sprite(managers.Assets.atlas, "gem");
        var instructionArrow = new createjs.Sprite(managers.Assets.atlas, "arrow");
        temple = new objects.Temple(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display title and instructions
        instructionTitleLabel = new objects.Label(stage.canvas.width / 2, 30, "Instructions");

        instructionText = new createjs.Text(
            "Control the Adventurer with your mouse.  " +
            "Pick up the ruby's to add to your multiplier.  " +
            "You gain more points the longer you last.  " +
            "Avoid the arrows, if you get hit with one you will lose a life.  " +
            "if you lose all 3 of your lives it's game over", constants.TEXT_FONT, constants.LABEL_COLOUR);

        instructionText.x = 20;
        instructionText.y = 80;

        instructionText.lineWidth = 600;
        instructionText.lineHeight = 35;

        game.addChild(instructionTitleLabel);
        game.addChild(instructionText);
        
        labelText = new objects.gameText(180, 350, "RUBY ADVENTURER ARROW");

        instructionAvatar.x = 150;
        instructionAvatar.y = 380;

        instructionGem.x = 20;
        instructionGem.y = 400;

        instructionArrow.x = 270;
        instructionArrow.y = 400;

        game.addChild(instructionAvatar);
        game.addChild(instructionArrow);
        game.addChild(instructionGem);
        game.addChild(labelText);
        
        // Display Play Button
        playButton = new objects.Button(500, 430, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
}  