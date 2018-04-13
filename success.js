var QuidcoEaster2017 = QuidcoEaster2017 || {};

QuidcoEaster2017.Success = function() {};

QuidcoEaster2017.Success.prototype = {	
	
	create: function(){

		

		


        // helpers
        this.centerX = this.game.width / 2;
        this.centerY = this.game.height / 2;

        // used to control how many times a user can click the prize button.
        this.canWin = true;

        this.eggCracked = false;

        // We need to grab the user id from the iframe url for later user
        thisuserId = QuidcoEaster2017.getUrlVars()['uid'];
		
		this.add.image(0,0,'bg-plain');




		this.bannerWinner = this.add.image(70,30,'banner-winner');


		this.add.image(60,205,'text-tap');



		this.add.image(50,445,'chick-1');
		this.add.image(500,425,'chick-2');


        // create btn
        this.prizeEgg = this.add.button(320, 440, 'prize-egg', this.crackEggAnimation, this);
        this.prizeEgg.anchor.setTo(0.5);


		this.eggCrack = this.add.image(317, 377, 'egg-crack');
		this.eggCrack.anchor.setTo(0.5);



	    this.crackMask = this.add.graphics(0, 0);
		this.eggCrack.anchor.setTo(0.5);
	    //	Shapes drawn to the Graphics object must be filled.
	    this.crackMask.beginFill(0xffffff);

	    //	Here we'll draw a circle
	    this.crackMask.drawCircle(430, 170, 300);
	    this.crackMask.scale.setTo(1);


	    this.eggCrack.mask = this.crackMask;



        //Update hands slapped in database
        var username = QuidcoEaster2017.getUrlVars()['uid']; //Get username
        if (typeof username !== 'undefined') { //Only do this if we find a user..
            var userTrimmed = username.trim(); //trim the username
            if(userTrimmed) { // will evaluate true if userTrimmed is not: null, undefined, Nan, empty string (""), 0, false
                var request = new XMLHttpRequest(); //new ajax
                request.open('POST', '_/phaser/_/api/update-slaps.php?uid=' + userTrimmed + '&newslaps='+QuidcoEaster2017.handsSlapped, true); //send user id and number of hands slapped to php file
                request.onreadystatechange = function () {
                    if (request.readyState === 4) {
                        if(request.status === 200) { //Everything has worked
                           // var returnedData = JSON.parse(request.responseText);
                           // console.log(returnedData);
                        } else {
                            console.log('Error: ' + request.status); // An error occurred during the request.
                        }
                    }            
                }
                request.send(); //Go!
            } 
        } 
        
        //Volume control
        this.volumeIcon = this.add.button(575, 10, 'volume', QuidcoEaster2017.toggleSound, this.volumeIcon);
        if (QuidcoEaster2017.soundOn === true) {
            this.volumeIcon.frame = 1;
        } else {
            this.volumeIcon.frame = 0;
        }
        
		QuidcoEaster2017.transitionIn();

	},


    crackEggAnimation: function() {

    	if ( this.eggCracked === true) {
    		return;
    	}

    	this.eggCracked = true;
		var overlay = QuidcoEaster2017.Game.add.graphics(0, 0);
		overlay.beginFill('0xffffff', 1);
		overlay.drawRect(0, 0, QuidcoEaster2017.Game.width, QuidcoEaster2017.Game.height);
		overlay.alpha = 0;

		this.knockEgg = this.game.add.tween(this.prizeEgg).to({ angle:-5}, 100, "Linear", false);
		this.knockEggB = this.game.add.tween(this.prizeEgg).to({ angle:0}, 150, "Linear", false);

		this.maskRezize = this.game.add.tween(this.crackMask).to({ x: -200, y: 200 }, 1000, "Linear", false, 350);

		this.fadeTween = QuidcoEaster2017.Game.add.tween(overlay).to({ alpha: 1	 }, 750, 'Linear', false );

		this.knockEgg.chain(this.knockEggB);
		this.knockEggB.chain(this.maskRezize);
		this.maskRezize.chain(this.fadeTween);

		this.fadeTween.onComplete.add(this.runGameLogic, this); //If the animation completes, it means the hand has gotten to an egg.
		
		this.knockEgg.start();


    },



    /**
     * Calls the game logic to determin if the user has won a prize
     * @returns {game state} - loads the win or lose state depending on outcome 
     */
    runGameLogic: function() {




        var username = QuidcoEaster2017.getUrlVars()['uid'];
  //      console.log('user_id =', username);

        var self = this;

		if(this.canWin === false) {
		// 	console.log('you can only click once!!!');
		 	return;
		 }

        this.canWin = false;
        
		if (typeof username !== 'undefined') {

//            console.log('user_id =', username);
			
			var userTrimmed = username.trim();
			
			if(userTrimmed) { // will evaluate true if userTrimmed is not: null, undefined, Nan, empty string (""), 0, false

				var request = new XMLHttpRequest();
				
				request.open('POST', '_/phaser/_/api/game-logic.php?uid=' + userTrimmed, true);
				
				request.onreadystatechange = function () {
		
					if (request.readyState === 4) {
						
						if(request.status === 200) {
						
							var returnedData = JSON.parse(request.responseText);
							
//                            console.log(returnedData);
							// If anything apart from data.winner === true comes back,
							// i.e an error from not connecting to the database, player will automatically lose
							if (returnedData.winner === true) { // Winner
						
								self.state.start('Win', true, false, returnedData.outcome);
										
							} else { // Loser
						
								self.state.start('Lose');
						
							}
						
						} else {
							
							console.log('Error: ' + request.status); // An error occurred during the request.
							self.state.start('Lose');  // redirect to the lose page if there was an error
							
						}
					
					}
									
				}

				request.send();
			
			} else {
				
				this.state.start('Lose');
				
			}
		
		} else {
			
			this.state.start('Lose');
			
		}

    },
	
}