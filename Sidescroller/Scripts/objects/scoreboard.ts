module objects {
    // Scoreboard Class
    export class Scoreboard {
        stage: createjs.Stage;
        game: createjs.Container;
        lives: number;
        score: number;
        multiplier: number;
        label: createjs.Text;
        labelText: string = "";
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.lives = constants.ADVENTURER_LIVES;
            this.score = 0;
            this.multiplier = 1;
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.update();
            this.label.y = 440;
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;

            game.addChild(this.label);
        }

        //updates the scoreboard every frame
        update() {
            this.labelText = "Lives: " + this.lives.toString() + " Score: " + this.score.toString() + " X" + this.multiplier.toString();
            this.label.text = this.labelText;
        }

        //removes the scoreboard from the game container
        destroy() {
            game.removeChild(this.label);
        }
    }
} 