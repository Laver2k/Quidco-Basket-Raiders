var QuidcoEaster2017 = QuidcoEaster2017 || {};

QuidcoEaster2017.TheGame = function() {};

QuidcoEaster2017.TheGame.prototype = {	
	

	init: function() { 
		this.gameWon = false;

		//Reset global variables
		QuidcoEaster2017.eggAlreadyGrabbed = false,
		QuidcoEaster2017.handsSlapped = 0;


	},


	create: function() {

		//Set up background
		this.stage.backgroundColor = 0xdddddd;
		this.add.image(0,0,'game-bg');

		//Set up egg sprite
		this.targetEgg = this.add.sprite(320, 320, 'game-egg');
		this.targetEgg.anchor.setTo(0.5);


		//Set up arm group
		this.armGroup = this.add.group(); 



		this.gradient = this.add.sprite(0, 0, 'gradient');

		//blockCircle puts an invisible circle over the egg basket that stops the players being able to hit the hands.
/*		var blockCircle = this.add.graphics(0, 0);
		blockCircle.lineStyle(2, 0xffd900, 1);
		blockCircle.beginFill(0xFF0000, 1);
		blockCircle.drawCircle(320, 320, 190);
		//blockCircle.alpha = 0;
		blockCircle.inputEnabled = true;
*/

		//Timer bar
		this.containerBar = this.add.sprite(325, 35, 'container-bar');
		this.containerBar.anchor.setTo(0.5, 0.5);
		this.blueBar = this.add.sprite(144, 33, 'blue-bar');
		this.blueBar.anchor.setTo(0, 0.5);
		this.blueBar.scale.setTo(1, 1);
		this.timeLeft = 30;
		this.game.time.events.loop(Phaser.Timer.SECOND, this.updateTimer, this);


        //Volume control
        this.volumeIcon = this.add.button(575, 10, 'volume', QuidcoEaster2017.toggleSound, this.volumeIcon);
        if (QuidcoEaster2017.soundOn === true) {
            this.volumeIcon.frame = 1;
        } else {
            this.volumeIcon.frame = 0;
        }
         
		//Transition effect
		QuidcoEaster2017.transitionIn();

		// Create the first arm
		this.time.events.add(1000, this.createArm, this); 





	},


	render: function () {
		//this.debugText();
	},


	update: function() {
		//Its decided in the Arm prefab when the game has been won, so use a global variable to inform the main game state.
		if(QuidcoEaster2017.eggAlreadyGrabbed === true) {
			this.time.events.add(2000, this.gameLose, this);
		}

	},


	//Timer updates every second, if it reaches 0 - the game is won.
	updateTimer: function() {
		if (this.gameWon === true || QuidcoEaster2017.eggAlreadyGrabbed === true) {
			return;
		}
		this.timeLeft--;

		this.blueBar.scale.setTo(this.timeLeft/29, 1);
		if (this.timeLeft === 0) {
			this.gameWon = true;
			this.time.events.add(0, this.gameWin, this);
		}
	},


	//Create a new arm
	createArm: function(){

		if (this.gameWon === true) { //Dont make more arms if the game has been won
			return;
		}

		//Arms are generated in the Arm prefab.
		var arm = new QuidcoEaster2017.Arm(QuidcoEaster2017.Game, this.armGroup, this.targetEgg);
		if (arm.key.substring(0,3)==="arm") { //This check ensures a 'new' arm has been created
			QuidcoEaster2017.Game.add.existing(arm);
			this.armGroup.add(arm);
		}

		//Create another arm after a randomised delay.
		var randomTime = this.rnd.integerInRange(900, 1100);
		this.time.events.add(randomTime, this.createArm, this); 

	},


	//Game over
	gameLose: function() {
		this.state.start('Fail');
	},


	//Game won
	gameWin: function() {
		this.state.start('Success');
	},


	debugText: function () {
	},

	
}