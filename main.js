var game = new Phaser.Game(600, 600, Phaser.AUTO, 'gameDiv', {preload: onPreload, create: onCreate, update: onUpdate});

var tileSize = 100;
var upKey, downKey, leftKey, rightKey;
var canMove = false;

var colors = {
    2:0xFFFFFF,
    4:0xFFEEEE,
    8:0xFFDDDD,
    16:0xFFCCCC,
    32:0xFFBBBB,
    64:0xFFAAAA,
    128:0xFF9999,
    256:0xFF8888,
    512:0xFF7777,
    1024:0xFF6666,
    2048:0xFF5555,
    4096:0xFF4444,
    8192:0xFF3333,
    16384:0xFF2222,
    32768:0xFF1111,
    65536:0xFF0000
};

var fieldArray = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var tileSprites;

function onPreload() {
    game.load.image('button', '/assets/buttonSettings.png');
    game.load.image('tile', '/assets/test.png');

    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    upKey.onDown.add(moveUp, this);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    downKey.onDown.add(moveDown, this);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    leftKey.onDown.add(moveLeft, this);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    rightKey.onDown.add(moveRight, this);
}

function onCreate() {
    game.stage.backgroundColor = "#71c5cf";

    game.add.sprite(0,0,'tile');
    tileSprites = game.add.group();

    addTwo();
    addTwo();
}

function onUpdate() {

}

//region extra methods

function addTwo() {
    do {
        var randomValue = Math.floor(Math.random() * 16);
    } while (fieldArray[randomValue] != 0);

    fieldArray[randomValue] = 2;

    var tile = game.add.sprite(toCol(randomValue)*tileSize, toRow(randomValue)*tileSize, 'tile');
    tile.pos = randomValue;
    tile.alpha = 0;

    var text = game.add.text(tileSize/2, tileSize/2, "2", {font: "bold 16px Arial", align: "center"});
    text.anchor.set(0.5);
    tile.addChild(text);

    tileSprites.add(tile);

    var fadeIn = game.add.tween(tile);
    fadeIn.to({alpha:1}, 250);
    fadeIn.onComplete.add(function(){
        updateNumbers();
        canMove = true;
    });
    fadeIn.start();
}

function toRow(n) {
    return Math.floor(n/4);
}

function toCol(n) {
    return n%4;
}

function updateNumbers() {
    tileSprites.forEach(function(item){
        var value = fieldArray[item.pos];
        item.getChildAt(0).text = value;
        item.tint = colors[value];
    })
}

//endregion

//region controlling
function moveUp() {

}
function moveDown() {

}
function moveLeft() {

}
function moveRight() {

}
//endregion


