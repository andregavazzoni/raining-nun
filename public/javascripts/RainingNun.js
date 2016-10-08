var RainingNun = RainingNun || {};

RainingNun.game = new Phaser.Game(320, 480, Phaser.AUTO, "game-container");

RainingNun.game.state.add('Boot', RainingNun.Boot);
RainingNun.game.state.add("Preload", RainingNun.Preload);
RainingNun.game.state.add("MainMenu", RainingNun.MainMenu);
RainingNun.game.state.add("Game", RainingNun.Game);
RainingNun.game.state.add("Highscore", RainingNun.Highscore);
RainingNun.game.state.start("Boot");