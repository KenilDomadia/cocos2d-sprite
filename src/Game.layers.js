Game.layers[1].extend = cc.Layer.extend({
    init: function () {
        this._super();
        var game = this;
        Game.layers[1].start(game);
    }
});

Game.layers[1].start = function (game) {
    var sprite = new cc.Sprite("cards.png"); //a
    // sprite.attr({ x: 0, y: 0 }); //b
    game.addChild(sprite); //c 
};