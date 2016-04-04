var game = new Phaser.Game(1280,720, Phaser.AUTO, 'Design de Jogos', 
	{preload:preload, create:create, update:update, render:render});


function preload(){

	//load das imagens
	game.load.image('background','images/background.png');
	game.load.image('player','images/sprites/player.png');
}




function create(){

//define os limites máximos do jogo
game.world.setBounds(0,0,5120,720);

//start physics system
game.physics.startSystem(Phaser.physics.arcade);

//enable arrow cursor keys
this.cursor = game.input.keyboard.createCursorKeys();


//Background images
    game.add.tileSprite(0, 0, 1400, 600, 'sky');
    game.add.sprite(0, 360, 'ground');

/*
registration point
    ufo.anchor.setTo(0.5, 0.5);

player gravity
this.player.body.gravity.y = 1000;

enable physics
this.walls.enableBody = true;
game.physics.arcade.enable(leftwall);

define collisions
game.physics.arcade.collide(player, walls);

the camera will follow the player in the world
*/

}

function update(){

	moveplayer();

}

function moveplayer(){

	if (this.cursor.left.isDown) {
		this.player.body.velocity.x = -200;
	}
	else if (this.cursor.right.isDown) {
		this.player.body.velocity.x = 200;
	}
	else{
		this.player.body.velocity.x = 0;
	}
}