var RainingNun = RainingNun || {};

RainingNun.MainMenu = function () {
    console.log("Menu screen");
};

RainingNun.MainMenu.prototype = {
    create: function() {
        var title = this.game.add.text(this.game.width/2, this.game.height/6, "Raining Nun",
            { font: "30px Arial", fill: "#FFFFFF", align: "center"});

        title.anchor.x = Math.round(title.width * 0.5) / title.width;

        this.startGame = this.game.add.text(this.game.width/2, this.game.height/2, "Start",
            { font: "30px Arial", fill: "#FFFFFF", align: "center"});

        this.startGame.anchor.x = Math.round(this.startGame.width * 0.5) / this.startGame.width;

        this.ranking = this.game.add.text(this.game.width/2, this.game.height/2 + 50, "Ranking",
            { font: "30px Arial", fill: "#FFFFFF", align: "center"});

        this.ranking.anchor.x = Math.round(this.ranking.width * 0.5) / this.ranking.width;

        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        this.option = 0;
    },

    update: function () {

        if (this.cursors.up.justDown) {
            this.option -= 1;
            if (this.option < 0) {
                this.option = 1;
            }
        }

        if (this.cursors.down.justDown) {
            this.option += 1;

            if (this.option > 1) {
                this.option = 0;
            }
        }

        if (this.option == 0) {
            this.startGame.fill = "yellow";
            this.ranking.fill = "white";
        } else if(this.option == 1) {
            this.startGame.fill = "white";
            this.ranking.fill = "yellow";
        }

        if (this.enterKey.justDown) {
            if (this.option == 0) {
                console.log("Selected: Start game");

            } else if(this.option == 1) {
                console.log("Selected: Ranking");
            }
        }
    }
};