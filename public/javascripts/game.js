window.addEventListener("load", function () {
        var states = {
            preload: function () {
                game.load.image("priest", "images/padre.png");
                game.load.image("church", "images/church.jpg");
                game.load.image("nun", "images/freira.png")
            },
            create: function () {
                //World
                game.physics.startSystem(Phaser.Physics.ARCADE);
                game.physics.setBoundsToWorld();
                game.physics.arcade.gravity.y = 100;

                var church = game.add.sprite(0, 0, "church");
                church.width = game.width;
                church.height = game.height;

                //Nun
                this.nunGroup = game.add.physicsGroup();

                //Player
                priest = game.add.sprite(game.width * 0.5, game.height - 120, "priest");
                game.physics.enable(priest, Phaser.Physics.ARCADE);
                priest.body.collideWorldBounds = true;
                priest.scale.setTo(0.2, 0.2);
                priest.body.allowGravity = false;

                //Score
                this.score = 0;
                this.labelScore = game.add.text(20, 20, "0",
                    { font: "30px Arial", fill: "#ffffff" });

                this.timer = game.time.events.loop(1500, this.addNun, this);

            },
            update: function () {
                var keyboard = game.input.keyboard;

                game.physics.arcade.overlap(priest, this.nunGroup, function (priest, nun) {
                    nun.destroy();
                    this.score += 1;
                    this.labelScore.text = this.score;
                }, null, this);

                if (keyboard.isDown(Phaser.Keyboard.LEFT)) {
                    priest.x -= speed;
                }

                if (keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                    priest.x += speed;
                }
            },
            addNun: function() {
                var x = game.rnd.between(0, 340);
                var nun = game.add.sprite(x, 0, 'nun');
                this.nunGroup.add(nun);
                game.physics.arcade.enable(nun);
                nun.checkWorldBounds = true;
                nun.outOfBoundsKill = true;
                nun.body.velocity.y = 100;
                nun.scale.setTo(0.15, 0.15);
            }
        };

        var speed = 3;
        var priest;
        var MAX_NUN = 6;
        var nunCount = 0;
        var points = 0;
        var game = new Phaser.Game(400, 600, Phaser.AUTO, 'gameDiv', states);
    }
);