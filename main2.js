var originalGameState = {preload: preload, create: create, update: update};

var preloader = {
    preload: function() {
        game.load.image('tile', 'assets/test.png');
    },

    create: function() {
        game.state.start('originalGameState');
    }
};


//относятся к originalGameState
function preload() {

}

function create(){
    game.add.sprite(0, 0, 'tile');
}

function update() {

}

var game = new Phaser.Game(600, 600, Phaser.AUTO, 'gameDiv');
game.state.add('originalGameState', originalGameState);
game.state.add('preloader', preloader);
game.state.start('preloader');
