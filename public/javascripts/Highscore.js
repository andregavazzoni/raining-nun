var RainingNun = RainingNun || {};

RainingNun.Highscore = function () {
};

RainingNun.Highscore.prototype = {
    preload: function () {
        $.get({
            url: "/highscore"
        }).done(function (data) {
            this.scores = data;
        });
    },

    create: function () {
        var score;
        for (var i = 0; i < 10; i++) {
            score = this.scores[i];
            var offset = i * 40;
            this.game.add.text(this.game.width/2, 40 + offset, score.name + ": " + score.score,
                { font: "30px Arial", fill: "#FFFFFF" });
        }
    }
};