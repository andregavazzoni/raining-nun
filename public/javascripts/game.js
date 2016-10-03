window.addEventListener("load", function () {
        var states = {
            preload: function () {
                game.load.image("priest", "images/padre.png");
                game.load.image("church", "images/church.jpg");
            },
            create: function () {
                var church = game.add.sprite(0, 0, "church");
                priest = game.add.sprite(game.width * 0.5, game.height - 120, "priest");
                church.width = game.width;
                church.height = game.height;
                priest.scale.setTo(0.2, 0.2);
            },
            update: function () {
                var keyboard = game.input.keyboard;

                if (keyboard.isDown(Phaser.Keyboard.LEFT)) {
                    priest.x -= speed;
                }

                if (keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                    priest.x += speed;
                }
            }
        };

        var speed = 3;
        var priest;
        var game = new Phaser.Game(400, 600, Phaser.AUTO, 'gameDiv', states);
    }
);