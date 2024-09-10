import Test from "./main.js";

const config = {
    width: 1080,
    height: 800,
    type: Phaser.WEBGL,
    parent: 'my_game',
    scene: Test
};

const game = new Phaser.Game(config);