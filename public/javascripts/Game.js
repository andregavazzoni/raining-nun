var RainingNun = RainingNun || {};

RainingNun.Game = function () {
    console.log("Game started...");
};

RainingNun.Game.prototype = {
    preload: function () {
    },

    create: function () {
        this.speed = 3;
        //World
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.setBoundsToWorld();
        this.game.physics.arcade.gravity.y = 100;

        var church = this.game.add.sprite(0, 0, "church");
        church.width = this.game.width;
        church.height = this.game.height;

        //Nun
        this.nunGroup = this.game.add.physicsGroup();

        //Player
        this.priest = this.game.add.sprite(this.game.width * 0.5, this.game.height - 120, "priest");
        this.game.physics.enable(this.priest, Phaser.Physics.ARCADE);
        this.priest.body.collideWorldBounds = true;
        this.priest.scale.setTo(0.2, 0.2);
        this.priest.body.allowGravity = false;

        //Score
        this.score = 0;
        this.labelScore = this.game.add.text(20, 20, "0",
            { font: "30px Arial", fill: "#000000" });

        this.timer = this.game.time.events.loop(1500, this.addNun, this);
    },

    update: function () {
        var keyboard = this.game.input.keyboard;

        this.game.physics.arcade.overlap(this.priest, this.nunGroup, function (priest, nun) {
            nun.destroy();
            this.score += 1;
            this.labelScore.text = this.score;
        }, null, this);

        if (keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.priest.x -= this.speed;
        }

        if (keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.priest.x += this.speed;
        }
    },

    restart: function (a) {
        alert("Você fez "+this.score+" pontos");
        this.game.state.start("MainMenu")
    },

    addNun: function() {
        var x = this.game.rnd.between(0, 220);
        var nun = this.game.add.sprite(x, 0, 'nun');
        this.nunGroup.add(nun);
        this.game.physics.arcade.enable(nun);
        nun.checkWorldBounds = true;
        nun.outOfBoundsKill = true;
        nun.body.velocity.y = 100;
        nun.scale.setTo(0.15, 0.15);
        nun.events.onOutOfBounds.add(this.restart, this)
    }
};