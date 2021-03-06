var RainingNun = RainingNun || {};

RainingNun.Boot = function () {
    console.log("Booting...");
};

RainingNun.Boot.prototype = {
    create: function () {
        this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
        this.scale.minHeight = 480;
        this.scale.minWidth = 320;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.game.state.start("Preload");
    }
};
//# sourceMappingURL=../maps/game/Boot-debug.js.map
