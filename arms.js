//Create an alien
QuidcoEaster2017.Arm = function(game, armGroup, targetEgg) {

	//Make these objects available to all prototype functions.
	this.armGroup = armGroup;
	this.targetEgg = targetEgg;
	this.game = game;


	//Decide which position the arm is gonna come in from.
	//positionArray = StartX, StartY, EndX, EndY, angle, identifier.
	var randomValue = this.game.rnd.integerInRange(1, 7);
	switch(randomValue) {
		case 1:
			//top left
			var positionArray = [-440, -440, -40, -40, 135];
		break;
		case 2:
			//top right
			var positionArray = [1070, -440, 670, -40, 225];
		break;
		case 3:
			//right
			var positionArray = [1220, 300, 820, 300, 270];
		break;
		case 4:
			//bot right
			var positionArray = [1100, 1100, 700, 700, 315];
		break;
		case 5:
			//bot
			var positionArray = [320, 1250, 320, 850, 360];
		break;
		case 6:
			//bot left
			var positionArray = [-440, 1080, -40, 680, 45];
		break;
		case 7:
			//left
			var positionArray = [-590, 320, -190, 320, 90];
		break;
	}

	//Decide on which arm graphic to use
	var noveltyChance = this.game.rnd.integerInRange(1, 10);

	if (QuidcoEaster2017.handsSlapped < 5) { //The first few arms should always be standard hands.
		var randomArmValue = this.game.rnd.integerInRange(1, 2);
	} else {
		if (noveltyChance < 5){ //This number decides how likely it is to get a novelty arm
		var randomArmValue = this.game.rnd.integerInRange(1, 2);
		} else {
		var randomArmValue = this.game.rnd.integerInRange(3, 7);
		}
	}
	switch(randomArmValue) {
		case 1:
		    var armGraphic = "arm-light";
		    break;
		case 2:
			var armGraphic = "arm-dark";
		    break;
		case 3:
			var armGraphic = "arm-robot";
		    break;
		case 4:
			var armGraphic = "arm-tentacle";
		    break;
		case 5:
			var armGraphic = "arm-hook";
		    break;
		case 6:
			var armGraphic = "arm-bear";
		    break;
		case 7:
			var armGraphic = "arm-boxer";
		    break;
        default:
            var armGraphic = "arm-light";
	};

	//Checks that no arms aleady exist.
	var exists = false;
	armGroup.forEach(function(item) {
		exists = true;
	});

    var easinMethods = [
        'Linear',
        'Quad',
        'Quad.easeOut',
        'Quad.easeIn',
        'Quad.easeInOut',
        'Cubic',
        'Cubic.easeOut',
        'Cubic.easeIn',
        'Cubic.easeInOut',
        'Quart',
        'Quart.easeOut',
        'Quart.easeIn',
        'Quart.easeInOut',
        'Quint',
        'Quint.easeOut',
        'Quint.easeInOut',
        'Sine',
        'Sine.easeOut',
        'Sine.easeIn',
        'Sine.easeInOut',
        'Expo',
        'Expo.easeOut',
        'Expo.easeInOut',
        'Circ',
        'Circ.easeOut',
        'Circ.easeIn',
        'Circ.easeInOut',
        'Back',
        'Back.easeOut',
        'Back.easeInOut',
        'Bounce',
        'Bounce.easeOut',
        'Bounce.easeIn',
        'Bounce.easeInOut'
    ];

    var randomTween = this.game.rnd.integerInRange(1, easinMethods.length - 1);

    //if the arm doesnt exist in that position and the egg hasnt already been snatched, lets make one.
	if(exists!==true && QuidcoEaster2017.eggAlreadyGrabbed === false) {
	    Phaser.Sprite.call(this, this.game, positionArray[0], positionArray[1], armGraphic);
		this.originalX = positionArray[0];
		this.originalY = positionArray[1];
		this.positionKey = positionArray[5];
		//Set anchor, input and misc.
		this.anchor.setTo(0.5, 1);
		this.inputEnabled = true;
		this.input.useHandCursor = true;
		this.angle = positionArray[4];
		this.eggGrabbed = false;
		this.armSlapped = false;
		//When the arm is clicked, count it and remove it
		this.events.onInputDown.add(this.increaseHandSlaps, this, this);
		//Tween the hand from off of the screen to the center.
		var randomTweenSpeed = this.game.rnd.integerInRange(1600, 2200); //slightly randomise the speed
		this.armToNestTween = this.game.add.tween(this).to({ x: positionArray[2], y: positionArray[3] }, randomTweenSpeed, easinMethods[randomTween]);
		this.armToNestTween.onComplete.add(this.eggGrab, this); //If the animation completes, it means the hand has gotten to an egg.
		this.armToNestTween.start();
	}
}


QuidcoEaster2017.Arm.prototype = Object.create(Phaser.Sprite.prototype);
QuidcoEaster2017.Arm.prototype.constructor = QuidcoEaster2017.Arm;


//When a hand has reached the egg basket, start the 'game over' sequence
QuidcoEaster2017.Arm.prototype.eggGrab= function(eggGrab, tween) {
	if(this.alive === true) { //If the arm hasnt been killed...
		this.eggGrabbed = true; //The eggGrabbed property is used to prevent the arm being clicked on after it's already reached an egg.

		//Kill off any 'extra' arms on screen.
		this.armGroup.forEach(function(arm) {
			if (arm.eggGrabbed === false) {
				arm.kill();
				//var armFadeTween = this.game.add.tween(arm).to({ alpha:0 }, 500, "Linear", true, 600);

			}
		});

		//The egg is being grabbed for the first (and only) time so....
		if (QuidcoEaster2017.eggAlreadyGrabbed === false) {
			this.game.sound.play('fail');
			//Do some animation
			var snatchedHandTween = this.game.add.tween(this).to({ x:this.originalX, y:this.originalY }, 300, "Linear", true, 0);
			snatchedHandTween.onComplete.add(this.eggSnatchComplete, this); //When the animation has finished, its time to end the game as the user has failed.
			snatchedHandTween.start();
			var snatchedEggTween = this.game.add.tween(this.targetEgg).to({ x:this.originalX, y:this.originalY }, 300, "Linear", true, 0);
			snatchedEggTween.start();
			QuidcoEaster2017.eggAlreadyGrabbed = true;
		}
	}
};


//An egg has been snatched
QuidcoEaster2017.Arm.prototype.increaseHandSlaps = function(arm) {
	if (this.eggGrabbed === false && this.armSlapped === false) {
		this.randomSound = this.game.rnd.integerInRange(1,2)
		switch(arm.key) {
			case "arm-light":
			this.game.sound.play('slap');
			if (this.randomSound === 1) {
				this.game.sound.play('ouch');
			} else {
				this.game.sound.play('ouch2');
			}
			break;

			case "arm-dark":
			this.game.sound.play('slap');
			if (this.randomSound === 1) {
				this.game.sound.play('ouch3');
			} else {
				this.game.sound.play('ouch4');
			}
			break;

			case "arm-bear":
			this.game.sound.play('slap');
			if (this.randomSound === 1) {
				this.game.sound.play('bear');
			} else {
				this.game.sound.play('bear2');
			}
			break;

			case "arm-boxer":
			this.game.sound.play('slap');
			if (this.randomSound === 1) {
				this.game.sound.play('boxer');
			} else {
				this.game.sound.play('boxer2');
			}
			break;

			case "arm-hook":
			this.game.sound.play('slap');
			if (this.randomSound === 1) {
				this.game.sound.play('pirate');
			} else {
				this.game.sound.play('pirate2');
			}
			break;

			case "arm-robot":
			this.game.sound.play('slap');
			if (this.randomSound === 1) {
				this.game.sound.play('robot');
			} else {
				this.game.sound.play('robot2');
			}
			break;

			case "arm-tentacle":
			this.game.sound.play('slap');
			if (this.randomSound === 1) {
				this.game.sound.play('tentacle');
			} else {
				this.game.sound.play('tentacle2');
			}
			break;

			default:
			this.game.sound.play('slap');
			break;
		}
		QuidcoEaster2017.handsSlapped++;
		this.retreatArm(arm);
	}




};


//An egg has been snatched
QuidcoEaster2017.Arm.prototype.eggSnatchComplete = function(arm) {

	this.killArm(arm);
	this.armGroup.remove(arm);

};


//Make the hand retreat when slapped
QuidcoEaster2017.Arm.prototype.retreatArm = function(arm) {
	arm.armToNestTween.stop();
	var retreatTween = this.game.add.tween(arm).to({ x:this.originalX, y:this.originalY }, 200, "Linear", true, 200);
	retreatTween.start();
	retreatTween.onComplete.add(this.killArm, this);
	this.armSlapped = true;
}


//Kill off the arm and remove it from the group.
QuidcoEaster2017.Arm.prototype.killArm = function(arm) {
	if (this.eggGrabbed === false) {
		arm.kill();
		this.armGroup.remove(arm);

	}
};
