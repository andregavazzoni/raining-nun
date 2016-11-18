var RainingNun = RainingNun || {};

RainingNun.Preload = function () {
    console.log("Preloading...");
};

RainingNun.Preload.prototype = {
    preload: function () {
        this.game.load.image("priest", "images/priest.png");
        this.game.load.image("church", "images/church.jpg");
        this.game.load.image("nun", "images/nun.png")
    },

    create: function () {
        this.game.state.start("MainMenu");
    }
};
//# sourceMappingURL=../maps/game/Preload-debug.js.map
