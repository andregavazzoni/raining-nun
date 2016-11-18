var RainingNun = RainingNun || {};

RainingNun.Highscore = function () {
};

RainingNun.Highscore.prototype = {
    preload: function () {
        this.game.load.json('highscore', '/highscore')
    },

    create: function () {
        var church = this.game.add.sprite(0, 0, "church");
        church.width = this.game.width;
        church.height = this.game.height;

        var scores = this.game.cache.getJSON('highscore');

        var total = scores.length;
        if (total > 10) {
            total = 10;
        }
        for (var i = 0; i < total; ++i) {
            score = scores[i];
            var offset = i * 40;
            var text = this.game.add.text(this.game.width/2, 40 + offset, score.name + ": " + score.score,
                { font: "30px Arial", fill: "#FFFFFF" });
            text.anchor.x = Math.round(text.width * 0.5) / text.width;
        }

        var ret = this.game.add.text(this.game.width/2, this.game.height - 40, "Press ENTER",
            { font: "30px Arial", fill: "yellow" });
        ret.anchor.x = Math.round(ret.width * 0.5) / ret.width;

        this.enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    },

    update: function () {
        if (this.enterKey.isDown) {
            this.game.state.start("MainMenu");
        }
    }
};
//# sourceMappingURL=../maps/game/Highscore-debug.js.map
