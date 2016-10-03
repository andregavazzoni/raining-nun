window.addEventListener("load", function () {
        var states = {
            preload: function () {
                game.load.image("priest", "images/padre.png");
                game.load.image("church", "images/church.jpg");
                game.load.image("nun", "images/freira.png")
            },
            create: function () {
                game.physics.startSystem(Phaser.Physics.ARCADE);
                game.physics.setBoundsToWorld();
                game.physics.arcade.gravity.y = -100;

                nunGroup = game.add.physicsGroup();


                var church = game.add.sprite(0, 0, "church");
                priest = game.add.sprite(game.width * 0.5, game.height - 120, "priest");
                game.physics.enable(priest, Phaser.Physics.ARCADE);
                priest.body.collideWorldBounds = true;
                priest.scale.setTo(0.2, 0.2);
                priest.body.allowGravity = false;

                church.width = game.width;
                church.height = game.height;

                this.timer = game.time.events.loop(1500, this.addNun, this);

            },
            update: function () {
                var keyboard = game.input.keyboard;

                for (var i = 0, len = nunGroup.children.length; i < len; i++) {
                    nunGroup.children[i].y += 10;
                }

                if (keyboard.isDown(Phaser.Keyboard.LEFT)) {
                    priest.x -= speed;
                }

                if (keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                    priest.x += speed;
                }
            },
            addNun: function() {
                var x = game.rnd.between(40, 340);
                var nun = game.add.sprite(x, 100, 'nun');
                nunGroup.add(nun);
                game.physics.arcade.enable(nun);
                nun.checkWorldBounds = true;
                nun.outOfBoundsKill = true;
                nun.body.velocity.y += 10;

                console.log(nun);
            }
        };

        var speed = 3;
        var priest, nun, nunGroup;
        var MAX_NUN = 6;
        var nunCount = 0;
        var points = 0;
        var game = new Phaser.Game(400, 600, Phaser.AUTO, 'gameDiv', states);
    }
);